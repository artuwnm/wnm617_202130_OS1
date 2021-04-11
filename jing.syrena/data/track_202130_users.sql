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
(1,'Marquita Noel','user1','user1@gmail.com',md5("pass"),'https://via.placeholder.com/400/737/fff/?text=user1','2019-12-10T02:36:17 +08:00'),
(2,'Chambers Patrick','user2','user2@gmail.com',md5("pass"),'https://via.placeholder.com/400/737/fff/?text=user2','2018-08-03T02:50:05 +07:00'),
(3,'Marcy Mccall','user3','user3@gmail.com',md5("pass"),'https://via.placeholder.com/400/812/fff/?text=user3','2018-01-28T05:42:34 +08:00'),
(4,'Julie Ramsey','user4','user4@gmail.com',md5("pass"),'https://via.placeholder.com/400/972/fff/?text=user4','2020-11-08T08:32:52 +08:00'),
(5,'Buckley Hubbard','user5','user5@gmail.com',md5("pass"),'https://via.placeholder.com/400/804/fff/?text=user5','2014-12-20T07:19:02 +08:00'),
(6,'Penelope Richmond','user6','user6@gmail.com',md5("pass"),'https://via.placeholder.com/400/965/fff/?text=user6','2020-07-06T08:30:14 +07:00'),
(7,'Saunders Oneil','user7','user7@gmail.com',md5("pass"),'https://via.placeholder.com/400/789/fff/?text=user7','2019-02-04T07:38:40 +08:00'),
(8,'Gloria Fry','user8','user8@gmail.com',md5("pass"),'https://via.placeholder.com/400/887/fff/?text=user8','2018-06-07T10:41:30 +07:00'),
(9,'Woodward Reese','user9','user9@gmail.com',md5("pass"),'https://via.placeholder.com/400/843/fff/?text=user9','2018-02-23T05:17:27 +08:00'),
(10,'Estelle Whitley','user10','user10@gmail.com',md5("pass"),'https://via.placeholder.com/400/926/fff/?text=user10','2014-03-26T08:41:56 +07:00');