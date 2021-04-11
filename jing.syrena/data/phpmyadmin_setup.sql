-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- 主机： localhost:3306
-- 生成日期： 2021-04-10 18:42:16
-- 服务器版本： 5.6.49-cll-lve
-- PHP 版本： 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- 数据库： `SyrenaProduct`
--

-- --------------------------------------------------------

--
-- 表的结构 `track_202130_cats`
--

CREATE TABLE `track_202130_cats` (
  `id` int(13) NOT NULL,
  `user_id` int(64) NOT NULL,
  `name` varchar(64) NOT NULL,
  `type` varchar(16) NOT NULL,
  `gender` varchar(64) NOT NULL,
  `eyeColor` varchar(64) NOT NULL,
  `bodyColor` varchar(64) NOT NULL,
  `description` text NOT NULL,
  `img` varchar(156) NOT NULL,
  `date_create` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `track_202130_locations`
--

CREATE TABLE `track_202130_locations` (
  `id` int(13) NOT NULL,
  `animal_id` int(64) NOT NULL,
  `lat` decimal(10,8) NOT NULL,
  `lng` decimal(11,8) NOT NULL,
  `description` text NOT NULL,
  `photo` varchar(256) NOT NULL,
  `icon` varchar(256) NOT NULL,
  `date_create` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `track_202130_users`
--

CREATE TABLE `track_202130_users` (
  `id` int(13) NOT NULL,
  `name` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(32) NOT NULL,
  `img` varchar(256) NOT NULL,
  `date_create` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转储表的索引
--

--
-- 表的索引 `track_202130_cats`
--
ALTER TABLE `track_202130_cats`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `track_202130_locations`
--
ALTER TABLE `track_202130_locations`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `track_202130_users`
--
ALTER TABLE `track_202130_users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `track_202130_cats`
--
ALTER TABLE `track_202130_cats`
  MODIFY `id` int(13) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `track_202130_locations`
--
ALTER TABLE `track_202130_locations`
  MODIFY `id` int(13) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `track_202130_users`
--
ALTER TABLE `track_202130_users`
  MODIFY `id` int(13) NOT NULL AUTO_INCREMENT;
COMMIT;
