CREATE TABLE IF NOT EXISTS `track_202130_users` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL
);

INSERT INTO track_202130_users VALUES
(1,'Leblanc Shaffer','user1','user1@gmail.com',md5("pass"),'https://via.placeholder.com/400/797/fff/?text=user1','2020-04-05 11:52:35'),
(2,'Noemi Rios','user2','user2@gmail.com',md5("pass"),'https://via.placeholder.com/400/742/fff/?text=user2','2020-02-22 07:39:18'),
(3,'Minerva Jensen','user3','user3@gmail.com',md5("pass"),'https://via.placeholder.com/400/877/fff/?text=user3','2020-04-30 03:43:43'),
(4,'Tammie Carroll','user4','user4@gmail.com',md5("pass"),'https://via.placeholder.com/400/890/fff/?text=user4','2020-12-30 08:54:21'),
(5,'Buchanan Faulkner','user5','user5@gmail.com',md5("pass"),'https://via.placeholder.com/400/821/fff/?text=user5','2020-10-18 05:23:04'),
(6,'Earlene Charles','user6','user6@gmail.com',md5("pass"),'https://via.placeholder.com/400/731/fff/?text=user6','2020-08-03 12:23:52'),
(7,'Williams Roth','user7','user7@gmail.com',md5("pass"),'https://via.placeholder.com/400/939/fff/?text=user7','2020-01-19 07:33:47'),
(8,'Craft Flores','user8','user8@gmail.com',md5("pass"),'https://via.placeholder.com/400/709/fff/?text=user8','2020-09-28 03:57:43'),
(9,'Holly Gates','user9','user9@gmail.com',md5("pass"),'https://via.placeholder.com/400/978/fff/?text=user9','2020-01-05 07:48:54'),
(10,'Sadie Vaughan','user10','user10@gmail.com',md5("pass"),'https://via.placeholder.com/400/972/fff/?text=user10','2020-01-22 09:38:04');