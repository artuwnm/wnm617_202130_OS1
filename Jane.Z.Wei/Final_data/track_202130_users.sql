-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 24, 2021 at 01:47 PM
-- Server version: 5.6.51-cll-lve
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
-- Database: `JW_products`
--

-- --------------------------------------------------------

--
-- Table structure for table `track_202130_users`
--

CREATE TABLE `track_202130_users` (
  `id` int(13) NOT NULL,
  `name` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(32) NOT NULL,
  `img` varchar(256) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_202130_users`
--

INSERT INTO `track_202130_users` (`id`, `name`, `username`, `email`, `password`, `img`, `date_create`) VALUES
(1, 'Leblanc Shaffer', 'user1', 'user1@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/797/fff/?text=user1', '2020-04-05 11:52:35'),
(2, 'Noemi Rios', 'user2', 'user2@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/742/fff/?text=user2', '2020-02-22 07:39:18'),
(3, 'Minerva Jensen', 'user3', 'user3@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/877/fff/?text=user3', '2020-04-30 03:43:43'),
(4, 'Tammie Carroll', 'user4', 'user4@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/890/fff/?text=user4', '2020-12-30 08:54:21'),
(5, 'Buchanan Faulkner', 'user5', 'user5@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/821/fff/?text=user5', '2020-10-18 05:23:04'),
(6, 'Earlene Charles', 'user6', 'user6@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/731/fff/?text=user6', '2020-08-03 12:23:52'),
(7, 'Williams Roth', 'user7', 'user7@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/939/fff/?text=user7', '2020-01-19 07:33:47'),
(8, 'Craft Flores', 'user8', 'user8@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/709/fff/?text=user8', '2020-09-28 03:57:43'),
(9, 'Holly Gates', 'user9', 'user9@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/978/fff/?text=user9', '2020-01-05 07:48:54'),
(10, 'Sadie Vaughan', 'user10', 'user10@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/972/fff/?text=user10', '2020-01-22 09:38:04'),
(14, '', '', 'W@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '', '2021-05-08 22:59:32'),
(13, 'Jane', 'Jannnne', 'zwei11@art.edu', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/500/?text=Profile', '2021-05-08 18:10:38'),
(15, 'W1', 'W1', 'W1@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', 'https://via.placeholder.com/500/?text=Profile', '2021-05-08 23:01:00'),
(16, 'jane', 'Jannne', 'J@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/500/?text=Profile', '2021-05-10 10:31:00'),
(17, '0', '0', '0@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/500/?text=Profile', '2021-05-22 23:36:51'),
(18, 'Zero', 'user0', 'user0@617.com', '1a1dc91c907325c69271ddf0c944bc72', 'uploads/1621875941.2584_Character=Kim, Skin tone=White, Posture=26 Crossing Finger.png', '2021-05-24 03:07:04'),
(19, '111', '111', '1@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/500/?text=Profile', '2021-05-24 13:39:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_202130_users`
--
ALTER TABLE `track_202130_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_202130_users`
--
ALTER TABLE `track_202130_users`
  MODIFY `id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
