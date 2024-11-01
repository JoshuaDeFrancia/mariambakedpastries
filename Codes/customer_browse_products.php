<?php

require_once 'connect.php';

$sql = "SELECT PriceID, pr.FlavorID, pr.ProductID, Quantity, Price, p.ProductID ,ProductImg, ProductName,ProductType, FlavorName, Description, Allergens, f.FlavorID FROM price_tbl pr JOIN product_tbl p ON pr.ProductID= p.ProductID JOIN flavors_tbl f ON pr.FlavorID = p.FlavorID GROUP BY ProductName";
$all_products = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Browse Products</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
     

    <nav class="navigation_nav-bar">
        <div class="navigation_outerdiv">
            <div class="navigation_innerdiv">
                <img src="..\Pictures\Navbar_Logo.png" class="navigation_logo" alt="Navbar Logo"onclick="goHome()">
            </div>
            
            <div class="navigation_innerdiv navigation_bottom">
                <div class="navigation_bottom_inside navigation_bottom_left">
                    <a href="home_screen.php" class="navigation_header_button">Browse Product</a>
                    <a href="/Menu.html" class="navigation_header_button">Order Tracking</a>
                    <a href="/Menu.html" class="navigation_header_button">Notification</a>
                    <a href="/Menu.html" class="navigation_header_button">About Us</a>
                </div>
                <div class="navigation_bottom_inside navigation_cart_button">
                    <a href="#" class="navigation_cart">
                        <span class="glyphicon glyphicon-shopping-cart"></span>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <section class="customer_browse_product">
    <div class="browse_products_sidebar">
        <h2>Categories</h2>
        <ul class="browse_products_category-list">
            <li>
                <input type="checkbox" id="all-categories" class="category-checkbox" checked>
                <label for="all-categories">All Categories</label>
            </li>
            <li>
                <input type="checkbox" id="regular-cookies" class="category-checkbox">
                <label for="regular-cookies">Regular Sized Cookies</label>
            </li>
            <li>
                <input type="checkbox" id="palm-cookies" class="category-checkbox">
                <label for="palm-cookies">Palm Sized Cookies</label>
            </li>
            <li>
                <input type="checkbox" id="bite-cookies" class="category-checkbox">
                <label for="bite-cookies">One-bite Cookies</label>
            </li>
            <li>
                <input type="checkbox" id="cookie-cakes" class="category-checkbox">
                <label for="cookie-cakes">Cookie Cakes</label>
            </li>
            <li>
                <input type="checkbox" id="cupcakes" class="category-checkbox">
                <label for="cupcakes">Cupcakes</label>
            </li>
        </ul>
    </div>

    <div class="browse_products_products">
        <h2>Browse Products</h2>
        <div class="browse_products_product-grid"> <!-- Only one grid container -->
            <?php
            while($row = mysqli_fetch_assoc($all_products)) {
            ?> 
                <div class="browse_products_product" onclick="showBrowseProductPopup()">
                    <div class="browse_product_menu_img">
                        <img src="<?php echo htmlspecialchars($row["ProductImg"]); ?>" alt="products" class="browse_product_popup_image">
                    </div>
                    <h3><?php echo htmlspecialchars($row["ProductName"]); ?></h3>
                    <div class="browse_products_price"><?php echo htmlspecialchars($row["Price"]); ?></div>
                </div>
            <?php
            }
            ?>
        </div> <!-- End of grid container -->
    </div>
</section>


    <!-- START POP UP -->
    <div id="backdrop" class="backdrop" onclick="closeBrowseProductPopup()"></div>

    <div id="browse_product_popup" class="browse_product_popup">
        <div class="customer_browse_popup_content">
            <span class="close-btn" onclick="closeBrowseProductPopup()">&times;</span>
            <div class="browse_product_popup_image_div">
                <img src=" <?php echo htmlspecialchars($row["ProductImg"]); ?>" class="browse_product_popup_image" alt="Product Image"> 
            </div>
            <div class="browse_product_popup_details">
                <h3>Cookie Title</h3>
                <div class="popup_price">₱250-₱420</div>
                
                <div class="popup_description_ingredients">
                    <p>Description Here</p>
                    <p>Ingredients Here</p>
                </div>
                
                <div class="browse_product_popup_product_quantity">
                    <h4>Product Quantity</h4>
                    <button class="quantity-btn" onclick="selectQuantity('half')">Half Dozen</button>
                    <button class="quantity-btn" onclick="selectQuantity('dozen')">One Dozen</button>
                </div>

                <div class="browse_product_title_order_quantity">
                    <h4>Order Quantity</h4>
                </div>

                <div class="browse_product_popup_order_quantity">
                    <button type="button" class="quantity-modify" onclick="Browse_minus_Quantity()">-</button>
                    <span id="order-quantity">1</span>
                    <button type="button" class="quantity-modify" onclick="Browse_add_Quantity()">+</button>
                </div>

                <div class="browse_product_popup_buttons">
                    <button class="popup_order_btn">Order Now</button>
                    <button class="popup_cart_btn">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
