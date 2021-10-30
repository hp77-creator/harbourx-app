
-- use pushpendrahpx;


-- CREATE TABLE users(
--     id int not null primary key IDENTITY(1,1),
--     username varchar(30) not null, 
--     firstname varchar(30),
--     lastname varchar(30),
--     email varchar(50) not null unique,
--     phone_number varchar(20),
--     profileimage varchar(512),
--     joinedat date,
--     owes decimal,
--     owed decimal
-- );


-- exec sp_columns users;



-- CREATE TABLE groups (
--     id int not null primary key IDENTITY(1,1),
--     groupname varchar(30) not null, 
--     groupimage varchar(512),
--     category varchar(30),
--     splittype char,
--     totalmembers int,
--     expenses int, 
--     createdat date
-- );


-- CREATE TABLE joins (
--     userid int not null,
--     groupid int not null,
--     joinedat date,
--     CONSTRAINT PK_JOINS PRIMARY KEY(userid,groupid),
--     CONSTRAINT FK_USER_JOINS FOREIGN KEY (userid) REFERENCES users(id),
--     CONSTRAINT FK_GROUP_JOINS FOREIGN KEY (groupid) REFERENCES groups(id)
-- );

-- DROP TABLE splitmembers;
-- DROP TABLE splits
-- DROP TABLE joins;
-- DROP TABLE groups;
-- DROP TABLE users;


-- CREATE TABLE splitmembers (
--     splitid int not null,
--     userid int not null, 
--     groupid int not null, 
--     individualsplitamount int not null,
--     individualsharecount int not null,
--     CONSTRAINT PK_SPLIT_MEMBERS PRIMARY KEY(splitid,userid),
--     CONSTRAINT FK_SPLIT_SPLITMEMBERS FOREIGN KEY (splitid) REFERENCES splits(id),
--     CONSTRAINT FK_USER_SPLITMEMBERS FOREIGN KEY (userid) REFERENCES users(id),
--     CONSTRAINT FK_GROUP_SPLITMEMBERS FOREIGN KEY (groupid) REFERENCES groups(id)
-- );

-- exec sp_columns splitmembers;


        -- INSERT INTO users (
        --         username,
        --         firstname,
        --         lastname,
        --         email,
        --         password,
        --         phone_number,
        --         profileimage,
        --         joinedat,
        --         owes,
        --         owed
        --     ) values (
        --         'pushpendrahpx',
        --         'Pshosdf',
        --         'sdfuhsiofdjnms',
        --         'uhdfjnouijd@gmail.com',
        --         'U2FsdGVkX1+ueIwM6/aCuOv79gHsMVeYcbMnDryEY+Vwl7M57/y3/1Z+sx59CtWT',
        --         'uysgdzfihsuhdfn;ujll',
        --         'https://avatars.githubusercontent.com/u/48829314?s=400&v=4',
        --         'Sun Oct 31 2021 03:31:33 GMT+0530 (India Standard Time)',
        --         0,
        --         0
        --     );
SELECT * FROM users;
