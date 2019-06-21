CREATE DATABASE bridgeTheGapDB;
USE bridgeTheGapDB;

-- AGENCY TABLES
CREATE TABLE agencyInformationDB(
    id int NOT NULL, 
    fullName varchar, 
    accountType varchar, 
    email varchar, 
    phoneNumber int, 
    streetName varchar, 
    city varchar, 
    zipCode int, 
    stateName varchar, 
    username varchar,
    userPassword varchar
);

CREATE agencyInventoryManagementDB(
    id int NOT NULL, 
    fullName varchar, 
    agencyActionId int NOT NULL AUTO_INCREMENT, 
    requestOrSupply varchar, 
    catagory varchar, 
    originalQuantityPlaced int, 
    currentQuantity int, 
    actionZipCode int, 
    personAssignedID int, 
    personAssignedQuantity int,
    PRIMARY KEY (agencyActionId)
);

-- HOMELESS TABLES
CREATE TABLE homelessInformationDB(
    id int NOT NULL, 
    fullName varchar, 
    accountType varchar, 
    email varchar, 
    phoneNumber int, 
    zipCode int, 
    stateName varchar, 
    username varchar,
    userPassword varchar
);

CREATE homelessInventoryManagementDB(
    id int NOT NULL, 
    fullName varchar, 
    requestOrSupply varchar,
    accountType varchar,  
    catagory varchar, 
    agencyActionId int,
    personAssignedQuantity int
);

-- VOLUNTEER TABLES
CREATE TABLE volunteerInformationDB(
    id int NOT NULL, 
    fullName varchar, 
    accountType varchar, 
    email varchar, 
    phoneNumber int, 
    streetName varchar, 
    city varchar, 
    zipCode int, 
    stateName varchar, 
    username varchar,
    userPassword varchar
);

CREATE volunteerInventoryManagementDB(
    id int NOT NULL, 
    fullName varchar, 
    requestOrSupply varchar,
    accountType varchar,  
    catagory varchar, 
    agencyActionId int,
    personAssignedQuantity int
);

