-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2020 at 09:14 PM
-- Server version: 10.3.15-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `frontend_dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `heist`
--

CREATE TABLE `heist` (
  `heist_id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `location` varchar(250) NOT NULL,
  `startTime` datetime NOT NULL,
  `endTime` datetime NOT NULL,
  `skills` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `heist`
--

INSERT INTO `heist` (`heist_id`, `name`, `location`, `startTime`, `endTime`, `skills`) VALUES
(1, 'FĂ¡brica Nacional de Moneda y Timbre', 'Spain', '2020-09-05 22:00:00', '2020-09-10 18:00:00', 'name: combat,\r\nlevel: *,\r\nmembers: 3]\r\n\r\nname: combat,\r\nlevel: *,\r\nmembers: 3\r\n\r\n\r\n'),
(2, 'Rober', 'Croatia', '2020-10-28 20:35:00', '2020-10-29 20:35:00', 'driver,*******,3\n,lock-breaking,*****,2\n'),
(7, 'Shopp Centar', 'England', '2020-11-07 20:47:00', '2020-11-07 22:49:00', 'Namedriver,Level ,Members: \n,Namealarm-breaker,Level *******,Members: 1\n');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `member_id` int(11) NOT NULL,
  `member_name` varchar(250) NOT NULL,
  `gender` varchar(150) NOT NULL,
  `email` varchar(250) NOT NULL,
  `status` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`member_id`, `member_name`, `gender`, `email`, `status`) VALUES
(50, 'John', 'm', 'johnj@example.com', 'available');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `skill_id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `level` varchar(250) NOT NULL,
  `member_id` int(11) NOT NULL,
  `main_skill` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`skill_id`, `name`, `level`, `member_id`, `main_skill`) VALUES
(8, 'money-laundering', '*******', 50, 'combat'),
(9, 'head', '***', 50, 'combat');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `heist`
--
ALTER TABLE `heist`
  ADD PRIMARY KEY (`heist_id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`member_id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`skill_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `heist`
--
ALTER TABLE `heist`
  MODIFY `heist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `skill_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
