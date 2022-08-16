CREATE DATABASE IF NOT EXISTS portfolio;
use portfolio;

create table userAccount (
userID int primary key not null auto_increment,
email varchar (50),
userName varchar (50),
userPassword varchar(50));


create table TradeHistoryID (
TradeHistoryID int primary key not null auto_increment,
purchasedPrice double,
purchasedTime varchar (50),
purchasedQuantities int,
userID int,
stockID int,
FOREIGN KEY (userID) REFERENCES userAccount(userID)
);