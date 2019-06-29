CREATE DATABASE bridgeTheGapDB;
USE bridgeTheGapDB;

-- AGENCY TABLES
CREATE TABLE agencyInformationDB(
    id int NOT NULL, 
    fullName varchar (60), 
    accountType varchar(15), 
    email varchar(100), 
    phoneNumber varchar (100), 
    streetName varchar(100), 
    city varchar(100), 
    zipCode varchar (100), 
    stateName varchar(100), 
    username varchar(160),
    userPassword varchar(100)
);

CREATE  TABLE agencyInventoryManagementDB(
    id int NOT NULL, 
    fullName varchar (90), 
    agencyActionId int NOT NULL AUTO_INCREMENT, 
    actionCreatedAt datetime NOT NULL default CURRENT_TIMESTAMP, 
    requestOrSupply varchar (15), 
    category varchar (20), 
    descriptionOfItem varchar (3000),
    originalQuantityPlaced int (10), 
    currentQuantity int (10), 
    actionZipCode varchar (50), 
    personAssignedID int (100), 
    personAssignedQuantity int (10),
    personAssignedTimeOfAction datetime,
    PRIMARY KEY (agencyActionId)
);

-- HOMELESS TABLES
CREATE TABLE homelessInformationDB(
    id int NOT NULL, 
    fullName varchar (90), 
    accountType varchar (15), 
    email varchar (100), 
    phoneNumber varchar (100), 
    zipCode varchar (100), 
    stateName varchar (100), 
    username varchar (100),
    userPassword varchar (100)
);

-- VOLUNTEER TABLES
CREATE TABLE volunteerInformationDB(
    id int NOT NULL, 
    fullName varchar (90), 
    accountType varchar (15), 
    email varchar (100), 
    phoneNumber varchar (100), 
    streetName varchar (200), 
    city varchar (100), 
    zipCode varchar (100), 
    stateName varchar (50), 
    username varchar (100),
    userPassword varchar (90)
);
