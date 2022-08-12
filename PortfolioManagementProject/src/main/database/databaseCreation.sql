CREATE DATABASE IF NOT EXISTS portfolio;
use portfolio;
create table userAccount (
email varchar (50) primary key not null,
userName varchar (50),
userPassword varchar(50));


create table stock (
stockID int primary key not null,
stockName varchar (50)
);



create table TradeHistoryID (
TradeHistoryID int primary key not null,
purchasedPrice double,
purchasedTime DATETIME,
purchasedQuantities int,
email varchar (50),
stockID int,
FOREIGN KEY (email) REFERENCES userAccount(email),
FOREIGN KEY (stockID) REFERENCES stock(stockID)
);
