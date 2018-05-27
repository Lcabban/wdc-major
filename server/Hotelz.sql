-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: hotelz
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE DATABASE /*!32312 IF NOT EXISTS*/ `hotelz` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `hotelz`;


--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `booking` (
  `idbooking` int(11) NOT NULL,
  `customer_account_cust_account_number` int(11) NOT NULL,
  `room_name` varchar(20) NOT NULL,
  `date_in` date DEFAULT NULL,
  `date_out` date DEFAULT NULL,
  PRIMARY KEY (`idbooking`,`room_name`),
  KEY `fk_booking_customer_account1_idx` (`customer_account_cust_account_number`),
  KEY `fk_booking_room1_idx` (`room_name`),
  CONSTRAINT `fk_booking_customer_account1` FOREIGN KEY (`customer_account_cust_account_number`) REFERENCES `customer_account` (`cust_account_number`),
  CONSTRAINT `fk_booking_room1` FOREIGN KEY (`room_name`) REFERENCES `room` (`room_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_account`
--

DROP TABLE IF EXISTS `customer_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `customer_account` (
  `cust_account_number` int(11) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `googleID` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cust_account_number`),
  UNIQUE KEY `cust_account_number_UNIQUE` (`cust_account_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_account`
--

LOCK TABLES `customer_account` WRITE;
/*!40000 ALTER TABLE `customer_account` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hotel` (
  `hotel_name` varchar(20) NOT NULL,
  `hotel_account_hotel_account_number` int(11) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `location` varchar(60) DEFAULT NULL,
  `important_info` varchar(500) DEFAULT NULL,
  `facilities` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`hotel_name`,`hotel_account_hotel_account_number`),
  UNIQUE KEY `hotel_name_UNIQUE` (`hotel_name`),
  KEY `fk_hotel_hotel_account1_idx` (`hotel_account_hotel_account_number`),
  CONSTRAINT `fk_hotel_hotel_account1` FOREIGN KEY (`hotel_account_hotel_account_number`) REFERENCES `hotel_account` (`hotel_account_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel_account`
--

DROP TABLE IF EXISTS `hotel_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hotel_account` (
  `hotel_account_number` int(11) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`hotel_account_number`),
  UNIQUE KEY `idhotel_account_UNIQUE` (`hotel_account_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel_account`
--

LOCK TABLES `hotel_account` WRITE;
/*!40000 ALTER TABLE `hotel_account` DISABLE KEYS */;
/*!40000 ALTER TABLE `hotel_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `review` (
  `review_number` int(11) NOT NULL,
  `hotel_hotel_name` varchar(20) NOT NULL,
  `comment` varchar(500) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`review_number`),
  KEY `fk_review_hotel1_idx` (`hotel_hotel_name`),
  CONSTRAINT `fk_review_hotel1` FOREIGN KEY (`hotel_hotel_name`) REFERENCES `hotel` (`hotel_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `room` (
  `room_name` varchar(20) NOT NULL,
  `hotel_hotel_name` varchar(20) NOT NULL,
  `hotel_hotel_account_hotel_account_number` int(11) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `bed_number` int(11) DEFAULT NULL,
  `guest_number` int(11) DEFAULT NULL,
  PRIMARY KEY (`room_name`,`hotel_hotel_name`,`hotel_hotel_account_hotel_account_number`),
  KEY `fk_room_hotel1_idx` (`hotel_hotel_name`,`hotel_hotel_account_hotel_account_number`),
  CONSTRAINT `fk_room_hotel1` FOREIGN KEY (`hotel_hotel_name`, `hotel_hotel_account_hotel_account_number`) REFERENCES `hotel` (`hotel_name`, `hotel_account_hotel_account_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-27 18:15:39
