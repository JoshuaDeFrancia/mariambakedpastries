<?php

require 'connect.php';
if (isset($_GET['CustomerID'])) {
    $customerID = $_GET['CustomerID'];
    $sql = "SELECT * FROM customer_tbl WHERE CustomerID = '$customerID'";
    $result = $conn->query($sql);
    
    if ($result) {
        if ($result->num_rows > 0) {
            $userData = $result->fetch_assoc();
            echo json_encode($userData);
        } else {
            echo json_encode(["error" => "No user found"]);
        }
    } else {
        echo json_encode(["error" => "Query error: " . $conn->error]);
    }
    exit; // Ensure no further output is sent
}




$sql = "SELECT CustomerID, FirstName, LastName, MiddleName, Nationality, Status, ContactNum, Gender, Religion, Birthday, Age, Address1, Address2, Barangay, City, Province, Country, ZipCode, AccountID FROM customer_tbl;";
$allusers = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User List</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        
    </head>
    <body style="background-color: #FAF0D9;">

    <nav class="sidenav_admin">
        <img src="..\Pictures\Navbar_Logo.png" class="side_navigation_logo">
        <a href="/Menu.html" class="navigation_header_button"><i class="fas fa-tachometer-alt small_icon"></i> Dashboard</a>
        <a href="/Menu.html" class="navigation_header_button"><i class="fas fa-shopping-cart small_icon"></i> Orders</a>
        <a href="/Menu.html" class="navigation_header_button"><i class="fas fa-user small_icon"></i> Users</a>
        <a href="/Menu.html" class="navigation_header_button"><i class="fas fa-cookie small_icon"></i> Products</a>
        <a href="/Menu.html" class="navigation_header_button"><i class="fas fa-tags small_icon"></i> Vouchers</a>
        <a href="/Menu.html" class="buttom_head_logout"><i class="fas fa-sign-out-alt small_icon"></i> Logout</a>
    </nav>
    <div class = "OrderListContainer">
        <div class = "OrderListSearch">
            <input type="text"  placeholder="Search User ID or Name">
            <button class="OrderListSearchButton">Search</button>
        </div>

        <div class = "UserListBody">
            <div class = "UserListBodyBox1">
                <div class = "UserListBan">
                    <i class="fa fa-ban"></i>
                </div>
                <div class= "UserListTable">

                
                    <table class="table table-hover tableorderlist">
                        <thead>
                          <tr>
                            <th scope="col"><input type="checkbox" id = "adminHeadCheckbox" onclick = "clickAllCheckbox(this)"> </th>
                            <th scope="col">ID</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Contact Number</th>
                          </tr>
                        </thead>
                        <tbody>
                        <?php
                    while($row = mysqli_fetch_assoc($allusers)) {
                ?> 
                          <tr onclick = "storeCustomerID('<?php echo htmlspecialchars($row['CustomerID']); ?>')">
                            <td><input type="checkbox" class = "adminCheckbox" > </td>
                            <td scope="row"><?php echo htmlspecialchars($row["CustomerID"]); ?></td>
                            <td><?php echo htmlspecialchars($row["LastName"]); ?></td>
                            <td><?php echo htmlspecialchars($row["FirstName"]); ?></td>
                            <td><?php echo htmlspecialchars($row["ContactNum"]); ?></td>
                            
                          </tr>
                          
                          <?php
                        }
                    ?>
                        </tbody>
                      </table>
                    
                </div>
            </div>
            <div class = "UserListBodyBox2">
                <div class = "UserListDetailsFirstRow">
                    <div class = "UserListDetailsUserID">
                        <p id = "UserDetailsID">Id</p> 
                    </div>
                    <div class = "UserListDetailsBasic">
                        <table class="table-sm ">
                            <tbody>
                                <tr >
                                    <th scope="row">Last Name</th>
                                    <td id = "UserDetailsLastName">id</td>
                                </tr>
                
                                <tr >
                                    <th scope="row">Middle Name</th>
                                    <td id = "UserDetailsMiddleName">YYYY/MM/DD</td>
                                </tr>
                
                                <tr >
                                    <th scope="row">First Name</th>
                                    <td id = "UserDetailsFirstName">randomtime</td>
                                </tr>
                                <tr >
                                    <th scope="row">Contact No.</th>
                                    <td id = "UserDetailsContact">YYYY/MM/DD</td>
                                </tr>
                
                                <tr >
                                    <th scope="row">Email</th>
                                    <td id = "UserDetailsEmail">randomtime</td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                </div>
                <hr>
                <div class = "UserListDetailsSecondRow">
                    <table class="table-sm ">
                        <tbody>
                            <tr >
                                <th scope="row">Address 1</th>
                            </tr>
            
                            <tr >
                                <td id = "UserDetailsAddress1">YYYY/MM/DD</td>
                            </tr>                
                            <tr >
                                <th scope="row">Address 2</th>
                            </tr>
                            <tr >
                               <td id = "UserDetailsAddress2">YYYY/MM/DD</td>
                            </tr>
                            <tr >
                                <th >Barangay</th>
                                <th >City</th>
                            </tr> 
                            <tr >
                                <td id = "UserDetailsBarangay">Barangay</td>
                                <td id = "UserDetailsCity">City</td>
                            </tr> 
                            <tr >
                                <th >Province</th>
                                <th >Country</th>
                            </tr> 
                            <tr >
                                <td id = "UserDetailsProvince">Barangay</td>
                                <td id = "UserDetailsCountry">City</td>
                            </tr> 
                            <tr >
                                <th >ZipCode</th>
                            </tr> 
                            <tr >
                                <td id = "UserDetailsZipCode">Barangay</td>
                            </tr> 
                        </tbody>
                    </table>    
                </div>
                <hr>
                <div class = "UserListDetailsThirdRow">
                <table class="table-sm ">
                        <tbody>
                            <tr >
                                <th >Birthday</th>
                                <th >Age</th>
                            </tr> 
                            <tr >
                                <td id = "UserDetailsBirthday">Barangay</td>
                                <td id = "UserDetailsAge">City</td>
                            </tr> 
                            <tr >
                                <th >Gender</th>
                                <th >Status</th>
                            </tr> 
                            <tr >
                                <td id = "UserDetailsGender">Barangay</td>
                                <td id = "UserDetailsStatus">City</td>
                            </tr> 
                            <tr >
                                <th >Nationality</th>
                                <th >Religion</th>
                            </tr> 
                            <tr >
                                <td id = "UserDetailsNationality">Barangay</td>
                                <td id = "UserDetailsReligion">City</td>
                            </tr> 

                        </tbody>
                    </table>  
                </div>
            </div>
        </div>

    </div>
    <script src = "script.js"></script>    
    </body>
</html>