use pushpendrahpx;


CREATE TABLE users(
    id int not null primary key IDENTITY(1,1),
    username varchar(30) not null, 
    firstname varchar(30),
    lastname varchar(30),
    email varchar(50) not null unique,
    userpassword varchar(1024) not null,
    phone_number varchar(20),
    profileimage varchar(512),
    joinedat varchar(100),
    owes decimal,
    owed decimal
);


CREATE TABLE groups (
    id int not null primary key IDENTITY(1,1),
    groupname varchar(30) not null, 
    groupimage varchar(512),
    category varchar(30),
    splittype char,
    totalmembers int,
    expenses int, 
    createdat varchar(100)
);


CREATE TABLE joins (
    userid int not null,
    groupid int not null,
    joinedat varchar(100),
    CONSTRAINT PK_JOINS PRIMARY KEY(userid,groupid),
    CONSTRAINT FK_USER_JOINS FOREIGN KEY (userid) REFERENCES users(id),
    CONSTRAINT FK_GROUP_JOINS FOREIGN KEY (groupid) REFERENCES groups(id)
);

CREATE TABLE splits (
    id int not null primary key IDENTITY(1,1),
    splitamount decimal not null,
    createdat varchar(100)
)

CREATE TABLE splitmembers (
    splitid int not null,
    userid int not null, 
    groupid int not null, 
    individualsplitamount int not null,
    individualsharecount int not null,
    CONSTRAINT PK_SPLIT_MEMBERS PRIMARY KEY(splitid,userid),
    CONSTRAINT FK_SPLIT_SPLITMEMBERS FOREIGN KEY (splitid) REFERENCES splits(id),
    CONSTRAINT FK_USER_SPLITMEMBERS FOREIGN KEY (userid) REFERENCES users(id),
    CONSTRAINT FK_GROUP_SPLITMEMBERS FOREIGN KEY (groupid) REFERENCES groups(id)
);
