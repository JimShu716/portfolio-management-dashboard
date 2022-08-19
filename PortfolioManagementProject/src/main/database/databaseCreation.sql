CREATE DATABASE IF NOT EXISTS portfolio;
use portfolio;

create table userAccount (
userID int primary key not null auto_increment,
balance double,
email varchar (50) unique,
userName varchar (50),
userPassword varchar(50));


create table TradeHistory (
TradeHistoryID int primary key not null auto_increment,
property varchar (50), ----buy or sell-
purchasedPrice double,
purchasedTime varchar (50),
purchasedQuantities int,
userID int,
stockSymbol varchar (50),
FOREIGN KEY (userID) REFERENCES userAccount(userID)
);