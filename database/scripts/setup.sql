use template_db;

create table if not exists City_Employment
(
    CityID int auto_increment comment 'Primary Key' primary key,
    CityName varchar(255) null,
    Employed INT,
    Unemployed INT,
    UnemploymentRate NUMERIC(6, 3) AS (
        (Unemployed / NULLIF((Employed + Unemployed), 0)) * 100
    ) STORED
);

create table if not exists unemployment_data (
    ID INT auto_increment comment 'Primary Key' primary key,
    city INT,
    labour_status INT,
    surv_month INT,
    employment_sector INT NULL
);

create table if not exists housing_data (
    ID INT auto_increment comment 'Primary Key' primary key,
    city INT,
    age INT,
    surv_month INT
);

