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
(1,'Adrienne Anderson','user1','user1@gmail.com',md5("pass"),'https://via.placeholder.com/400/811/fff/?text=user1','2020-10-02 12:34:27'),
(2,'Ruthie Mooney','user2','user2@gmail.com',md5("pass"),'https://via.placeholder.com/400/975/fff/?text=user2','2020-06-29 03:04:06'),
(3,'Enid Berg','user3','user3@gmail.com',md5("pass"),'https://via.placeholder.com/400/832/fff/?text=user3','2021-02-16 08:58:41'),
(4,'Sampson Bauer','user4','user4@gmail.com',md5("pass"),'https://via.placeholder.com/400/981/fff/?text=user4','2020-02-26 11:57:14'),
(5,'Brewer Webster','user5','user5@gmail.com',md5("pass"),'https://via.placeholder.com/400/721/fff/?text=user5','2020-11-20 05:18:24'),
(6,'Maura Duffy','user6','user6@gmail.com',md5("pass"),'https://via.placeholder.com/400/895/fff/?text=user6','2020-05-04 07:52:06'),
(7,'Vera Bell','user7','user7@gmail.com',md5("pass"),'https://via.placeholder.com/400/857/fff/?text=user7','2021-02-17 06:17:12'),
(8,'Austin Mccarty','user8','user8@gmail.com',md5("pass"),'https://via.placeholder.com/400/855/fff/?text=user8','2020-03-30 03:45:52'),
(9,'Head Horton','user9','user9@gmail.com',md5("pass"),'https://via.placeholder.com/400/706/fff/?text=user9','2020-07-10 04:28:21'),
(10,'Le Osborn','user10','user10@gmail.com',md5("pass"),'https://via.placeholder.com/400/937/fff/?text=user10','2020-09-18 12:51:44');