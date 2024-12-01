-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2024 at 08:57 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mariams_baked_pastries`
--

-- --------------------------------------------------------

--
-- Table structure for table `account_tbl`
--

CREATE TABLE `account_tbl` (
  `AccountID` int(11) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `AccountType` enum('Admin','Customer') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `account_tbl`
--

INSERT INTO `account_tbl` (`AccountID`, `Email`, `Password`, `FirstName`, `LastName`, `AccountType`) VALUES
(1, 'Test@email.com', '$2y$10$x/U/pN4gHUUVP2VqLA3UAuYhizShgAdd5LtywkCLbtuv.eKGCEuoC', 'Dasd', 'Dasd', 'Customer');

-- --------------------------------------------------------

--
-- Table structure for table `cart_tbl`
--

CREATE TABLE `cart_tbl` (
  `CartID` int(11) NOT NULL,
  `CustomerID` int(11) DEFAULT NULL,
  `ProductID` int(11) DEFAULT NULL,
  `VoucherID` int(11) DEFAULT NULL,
  `OrderQuantity` int(11) NOT NULL,
  `Discount` decimal(10,2) DEFAULT NULL,
  `TotalPrice` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customer_tbl`
--

CREATE TABLE `customer_tbl` (
  `CustomerID` int(11) NOT NULL,
  `FirstName` varchar(50) DEFAULT NULL,
  `LastName` varchar(50) DEFAULT NULL,
  `MiddleName` varchar(50) DEFAULT NULL,
  `Nationality` varchar(100) DEFAULT NULL,
  `Status` varchar(20) DEFAULT NULL,
  `ContactNum` varchar(15) DEFAULT NULL,
  `Gender` varchar(20) DEFAULT NULL,
  `Religion` varchar(100) DEFAULT NULL,
  `Birthday` date DEFAULT NULL,
  `Age` int(11) DEFAULT NULL,
  `Address1` varchar(255) DEFAULT NULL,
  `Address2` varchar(255) DEFAULT NULL,
  `Barangay` varchar(100) DEFAULT NULL,
  `City` varchar(100) DEFAULT NULL,
  `Province` varchar(100) DEFAULT NULL,
  `Country` varchar(100) DEFAULT NULL,
  `ZipCode` varchar(10) DEFAULT NULL,
  `BirthPlace` varchar(50) DEFAULT NULL,
  `AccountID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer_tbl`
--

INSERT INTO `customer_tbl` (`CustomerID`, `FirstName`, `LastName`, `MiddleName`, `Nationality`, `Status`, `ContactNum`, `Gender`, `Religion`, `Birthday`, `Age`, `Address1`, `Address2`, `Barangay`, `City`, `Province`, `Country`, `ZipCode`, `BirthPlace`, `AccountID`) VALUES
(1, 'Dasd', 'Dasd', '', 'AD', 'Widowed', '9362881658', 'Prefer not to say', 'None', '1997-08-13', 27, '0', '', 'dasdas', 'sdadsas', 'dsada', 'BH', '1234', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `flavors_tbl`
--

CREATE TABLE `flavors_tbl` (
  `FlavorID` int(11) NOT NULL,
  `FlavorName` varchar(100) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Allergens` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `flavors_tbl`
--

INSERT INTO `flavors_tbl` (`FlavorID`, `FlavorName`, `Description`, `Allergens`) VALUES
(1, 'Classic Chocolate Chip', 'Made with flour, butter, sugar, eggs, and finest Belgian Chocolates', 'TBA'),
(2, 'Triple Dark Chocolate', 'Triple Dark Chocolate Made with flour, butter, sugar, eggs, and finest Belgian Chocolates', 'TBA'),
(3, 'Blue Velvet with Cream Cheese', 'Blue Velvet has 2 different kinds of Belgian Chocolates (White Chocolate and Milk Chocolate Callets)', 'TBA'),
(4, 'Red Velvet with Cream Cheese', 'Red Velvet Cookies with Cream Cheese Filling - Made with flour, butter, sugar, eggs, and finest Belgian Chocolates', 'TBA'),
(5, 'Matcha with Macadamia Nuts', 'Macadamia Nuts and White Chocolate - Made with flour, butter, sugar, eggs, macadamia nuts and finest Belgian Chocolates', 'TBA'),
(6, 'Malagos with Pecan Nuts & Sea Salt Flakes', 'Premium Malagos Chocolate - Made with flour, butter, eggs, chocolates, and nuts', 'TBA'),
(7, 'Chocolate Hazelnut', 'Finest Belgian Chocolates - Made with flour, butter, sugar, eggs, chocolates, and nuts', 'TBA'),
(8, 'White Chocolate Macadamia & Cranberry', 'Made with flour, butter, sugar, eggs, macadamia nuts and finest Belgian Chocolates', 'TBA'),
(9, 'Biscoff', 'TBA', 'TBA'),
(10, 'Assorted Classic Cookies', 'Made with flour, butter, sugar, eggs, chocolates, and cream cheese/ Classic Chocolate Chip, Triple Dark, Red and Blue Velvet Cookies with Cream Cheese Filling', 'TBA'),
(11, 'Assorted Nutty Cookies', '(Chocolate Hazelnut, Malagos with Pecan Nuts and Sea Salt Flakes, White Chocolate Macadamia and Cranberry, and Matcha with Macadamia Nuts) - Finest Belgian Chocolates - Made with flour, butter, sugar, eggs, chocolates, and nuts', 'TBA'),
(12, 'Mixed Cookies', 'TBA', 'TBA'),
(13, 'Carrot ', 'TBA', 'TBA');

-- --------------------------------------------------------

--
-- Table structure for table `orderlist_tbl`
--

CREATE TABLE `orderlist_tbl` (
  `OrderListID` int(11) NOT NULL,
  `CustomerID` int(11) DEFAULT NULL,
  `CartID` int(11) DEFAULT NULL,
  `PaymentID` int(11) DEFAULT NULL,
  `ShippingFee` decimal(10,2) DEFAULT NULL,
  `ConfirmationDateTime` datetime DEFAULT NULL,
  `PaymentDateTime` datetime DEFAULT NULL,
  `BakingDateTime` datetime DEFAULT NULL,
  `ShippingDateTime` datetime DEFAULT NULL,
  `CourierDateTime` datetime DEFAULT NULL,
  `DeliveryDateTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orderrequest_tbl`
--

CREATE TABLE `orderrequest_tbl` (
  `RequestID` int(11) NOT NULL,
  `CustomerID` int(11) DEFAULT NULL,
  `CartID` int(11) DEFAULT NULL,
  `RequestStatus` varchar(50) DEFAULT NULL,
  `DateOfOrder` date DEFAULT NULL,
  `TimeOfOrder` time DEFAULT NULL,
  `TypeOfDelivery` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_tbl`
--

CREATE TABLE `payment_tbl` (
  `PaymentID` int(11) NOT NULL,
  `CustomerID` int(11) DEFAULT NULL,
  `CartID` int(11) DEFAULT NULL,
  `OrderReferenceID` varchar(255) DEFAULT NULL,
  `PayReference` varchar(100) DEFAULT NULL,
  `ProofOfPayment` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `price_tbl`
--

CREATE TABLE `price_tbl` (
  `PriceID` int(11) NOT NULL,
  `Quantity` varchar(50) NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `ProductID` int(10) NOT NULL,
  `FlavorID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `price_tbl`
--

INSERT INTO `price_tbl` (`PriceID`, `Quantity`, `Price`, `ProductID`, `FlavorID`) VALUES
(7, '6', 250.00, 1, 1),
(8, '12', 420.00, 1, 1),
(9, '6', 250.00, 2, 2),
(10, '12', 420.00, 2, 2),
(11, '6', 270.00, 3, 3),
(12, '12', 450.00, 3, 3),
(13, '6', 270.00, 4, 4),
(14, '12', 450.00, 4, 4),
(15, '6', 275.00, 5, 7),
(16, '12', 470.00, 5, 7);

-- --------------------------------------------------------

--
-- Table structure for table `product_tbl`
--

CREATE TABLE `product_tbl` (
  `ProductID` int(11) NOT NULL,
  `FlavorID` int(11) DEFAULT NULL,
  `ProductImg` varchar(100) NOT NULL,
  `ProductName` varchar(255) NOT NULL,
  `ProductType` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_tbl`
--

INSERT INTO `product_tbl` (`ProductID`, `FlavorID`, `ProductImg`, `ProductName`, `ProductType`) VALUES
(1, 1, '..\\Pictures\\Assorted Classic\\Classic Chocolate Chip.jpg\r\n\r\n\r\n', 'Classic Chocolate Chip Regular Sized', 'Regular Sized Cookies'),
(2, 2, '..\\Pictures\\Assorted Classic\\Triple Dark Chocolate.jpg', 'Triple Dark Chocolate Regular Sized Cookies', 'Regular Sized Cookies'),
(3, 3, '..\\Pictures\\Assorted Classic\\Blue Velvet with cream cheese filling.jpg', 'Blue Velvet with Cream Cheese Regular Sized Cookies', 'Regular Sized Cookies'),
(4, 4, '..\\Pictures\\Assorted Classic\\Red velvet with cream cheese filling.jpg', 'Red Velvet with Cream Cheese Regular Sized Cookies', 'Regular Sized Cookies'),
(5, 7, '..\\Pictures\\Assorted Nutty\\Chocolate Hazelnut .jpg', 'Chocolate Hazelnut Regular Sized Cookies', 'Regular Sized Cookies');

-- --------------------------------------------------------

--
-- Table structure for table `voucher_tbl`
--

CREATE TABLE `voucher_tbl` (
  `VoucherID` int(11) NOT NULL,
  `VoucherCode` varchar(255) NOT NULL,
  `DiscountAmount` decimal(10,2) NOT NULL,
  `ExpiryDate` date DEFAULT NULL,
  `Status` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account_tbl`
--
ALTER TABLE `account_tbl`
  ADD PRIMARY KEY (`AccountID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indexes for table `cart_tbl`
--
ALTER TABLE `cart_tbl`
  ADD PRIMARY KEY (`CartID`),
  ADD KEY `CustomerID` (`CustomerID`),
  ADD KEY `ProductID` (`ProductID`),
  ADD KEY `VoucherID` (`VoucherID`);

--
-- Indexes for table `customer_tbl`
--
ALTER TABLE `customer_tbl`
  ADD PRIMARY KEY (`CustomerID`),
  ADD KEY `fk_account_customer` (`AccountID`);

--
-- Indexes for table `flavors_tbl`
--
ALTER TABLE `flavors_tbl`
  ADD PRIMARY KEY (`FlavorID`);

--
-- Indexes for table `orderlist_tbl`
--
ALTER TABLE `orderlist_tbl`
  ADD PRIMARY KEY (`OrderListID`),
  ADD KEY `CustomerID` (`CustomerID`),
  ADD KEY `CartID` (`CartID`),
  ADD KEY `PaymentID` (`PaymentID`);

--
-- Indexes for table `orderrequest_tbl`
--
ALTER TABLE `orderrequest_tbl`
  ADD PRIMARY KEY (`RequestID`),
  ADD KEY `CustomerID` (`CustomerID`),
  ADD KEY `CartID` (`CartID`);

--
-- Indexes for table `payment_tbl`
--
ALTER TABLE `payment_tbl`
  ADD PRIMARY KEY (`PaymentID`),
  ADD KEY `CustomerID` (`CustomerID`),
  ADD KEY `CartID` (`CartID`);

--
-- Indexes for table `price_tbl`
--
ALTER TABLE `price_tbl`
  ADD PRIMARY KEY (`PriceID`),
  ADD KEY `ProductID` (`ProductID`),
  ADD KEY `FlavorID` (`FlavorID`);

--
-- Indexes for table `product_tbl`
--
ALTER TABLE `product_tbl`
  ADD PRIMARY KEY (`ProductID`),
  ADD KEY `FlavorID` (`FlavorID`);

--
-- Indexes for table `voucher_tbl`
--
ALTER TABLE `voucher_tbl`
  ADD PRIMARY KEY (`VoucherID`),
  ADD UNIQUE KEY `VoucherCode` (`VoucherCode`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account_tbl`
--
ALTER TABLE `account_tbl`
  MODIFY `AccountID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cart_tbl`
--
ALTER TABLE `cart_tbl`
  MODIFY `CartID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer_tbl`
--
ALTER TABLE `customer_tbl`
  MODIFY `CustomerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `flavors_tbl`
--
ALTER TABLE `flavors_tbl`
  MODIFY `FlavorID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `orderlist_tbl`
--
ALTER TABLE `orderlist_tbl`
  MODIFY `OrderListID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orderrequest_tbl`
--
ALTER TABLE `orderrequest_tbl`
  MODIFY `RequestID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_tbl`
--
ALTER TABLE `payment_tbl`
  MODIFY `PaymentID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `price_tbl`
--
ALTER TABLE `price_tbl`
  MODIFY `PriceID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `product_tbl`
--
ALTER TABLE `product_tbl`
  MODIFY `ProductID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `voucher_tbl`
--
ALTER TABLE `voucher_tbl`
  MODIFY `VoucherID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart_tbl`
--
ALTER TABLE `cart_tbl`
  ADD CONSTRAINT `cart_tbl_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `customer_tbl` (`CustomerID`),
  ADD CONSTRAINT `cart_tbl_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `product_tbl` (`ProductID`),
  ADD CONSTRAINT `cart_tbl_ibfk_3` FOREIGN KEY (`VoucherID`) REFERENCES `voucher_tbl` (`VoucherID`);

--
-- Constraints for table `customer_tbl`
--
ALTER TABLE `customer_tbl`
  ADD CONSTRAINT `fk_account_customer` FOREIGN KEY (`AccountID`) REFERENCES `account_tbl` (`AccountID`);

--
-- Constraints for table `orderlist_tbl`
--
ALTER TABLE `orderlist_tbl`
  ADD CONSTRAINT `orderlist_tbl_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `customer_tbl` (`CustomerID`),
  ADD CONSTRAINT `orderlist_tbl_ibfk_2` FOREIGN KEY (`CartID`) REFERENCES `cart_tbl` (`CartID`),
  ADD CONSTRAINT `orderlist_tbl_ibfk_3` FOREIGN KEY (`PaymentID`) REFERENCES `payment_tbl` (`PaymentID`);

--
-- Constraints for table `orderrequest_tbl`
--
ALTER TABLE `orderrequest_tbl`
  ADD CONSTRAINT `orderrequest_tbl_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `customer_tbl` (`CustomerID`),
  ADD CONSTRAINT `orderrequest_tbl_ibfk_2` FOREIGN KEY (`CartID`) REFERENCES `cart_tbl` (`CartID`);

--
-- Constraints for table `payment_tbl`
--
ALTER TABLE `payment_tbl`
  ADD CONSTRAINT `payment_tbl_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `customer_tbl` (`CustomerID`),
  ADD CONSTRAINT `payment_tbl_ibfk_2` FOREIGN KEY (`CartID`) REFERENCES `cart_tbl` (`CartID`);

--
-- Constraints for table `price_tbl`
--
ALTER TABLE `price_tbl`
  ADD CONSTRAINT `price_tbl_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `product_tbl` (`ProductID`),
  ADD CONSTRAINT `price_tbl_ibfk_2` FOREIGN KEY (`FlavorID`) REFERENCES `flavors_tbl` (`FlavorID`);

--
-- Constraints for table `product_tbl`
--
ALTER TABLE `product_tbl`
  ADD CONSTRAINT `product_tbl_ibfk_1` FOREIGN KEY (`FlavorID`) REFERENCES `flavors_tbl` (`FlavorID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
