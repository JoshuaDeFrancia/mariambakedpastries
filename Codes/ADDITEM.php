<?php
// Include database connection
require 'database.php';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // Debugging - print the POST data
    echo '<pre>';
    print_r($_POST);
    echo '</pre>';

    // Retrieve form data
    $productName = $mysqli->real_escape_string($_POST['itemname']);
    $productType = $mysqli->real_escape_string($_POST['producttype']);
    $flavor = $mysqli->real_escape_string($_POST['flavor']);
    $description = isset($_POST['description']) ? $mysqli->real_escape_string($_POST['description']) : '';
    $allergens = isset($_POST['allergens']) ? $mysqli->real_escape_string($_POST['allergens']) : '';
    $quantity = (int)$_POST['Quantity'];
    $price = (float)$_POST['Price'];

    // Handle image upload
    $imageName = $_FILES['ProductImage']['name'];
    $imageTmpName = $_FILES['ProductImage']['tmp_name'];
    $imageError = $_FILES['ProductImage']['error'];
    $imageSize = $_FILES['ProductImage']['size'];

    // Specify the target directory for the uploaded image
    $targetDirectory = '../Pictures/Products/'; // Ensure this directory exists and is writable
    $targetFile = $targetDirectory . uniqid() . '_' . basename($imageName); // Unique file name to avoid overwriting

    // Check if image upload is successful
    if ($imageError === UPLOAD_ERR_OK) {
        // Move the uploaded image to the target directory
        if (move_uploaded_file($imageTmpName, $targetFile)) {
            
            // Check if the flavor already exists in flavors_tbl
            $sqlFlavorCheck = "SELECT FlavorID FROM flavors_tbl WHERE FlavorName = '$flavor'";
            $resultFlavorCheck = $mysqli->query($sqlFlavorCheck);

            if ($resultFlavorCheck && $resultFlavorCheck->num_rows > 0) {
                // Flavor exists, retrieve the FlavorID
                $row = $resultFlavorCheck->fetch_assoc();
                $flavorID = $row['FlavorID'];
            } else {
                // Flavor doesn't exist, insert new flavor data into the flavors_tbl
                $sqlFlavor = "INSERT INTO flavors_tbl (FlavorName, Description, Allergens) 
                              VALUES ('$flavor', '$description', '$allergens')";  // Insert description and allergens

                // Debugging the SQL query before execution
                echo '<pre>';
                echo $sqlFlavor;
                echo '</pre>';

                if ($mysqli->query($sqlFlavor)) {
                    $flavorID = $mysqli->insert_id; // Get the last inserted FlavorID
                } else {
                    echo "Error inserting flavor: " . $mysqli->error;
                    exit;
                }
            }

            // Insert product data into product_tbl
            $sqlProduct = "INSERT INTO product_tbl (ProductName, ProductType, ProductImg, FlavorID) 
                           VALUES ('$productName', '$productType', '$targetFile', '$flavorID')";
            
            if ($mysqli->query($sqlProduct)) {
                $productID = $mysqli->insert_id; // Get the last inserted ProductID

                // Insert the price data into the price_tbl
                $sqlPrice = "INSERT INTO price_tbl (ProductID, FlavorID, Quantity, Price) 
                             VALUES ('$productID', '$flavorID', '$quantity', '$price')";
                if ($mysqli->query($sqlPrice)) {
                    echo "Product added successfully!";
                } else {
                    echo "Error inserting price: " . $mysqli->error;
                } 
                header("Location: product_list_admin.php");
            } else {
                echo "Error inserting product: " . $mysqli->error;
            }
        } else {
            echo "Error moving uploaded image to target directory.";
        }
    } else {
        echo "Error with image upload. Error code: $imageError";
    }
}
?>