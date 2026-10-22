CREATE DATABASE players_db;
USE players_db;

CREATE TABLE players(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    matches INT,
    runs BIGINT,
    fities INT,
    hundreds INT,
    Team VARCHAR(50)
);

INSERT INTO players(name,matches,runs,fities,hundreds,Team) VALUES 
('Virat Kohli', 292, 13848, 72, 50, 'India'),
('Steve Smith', 155, 5322, 32, 12, 'Australia'),
('Kane Williamson', 161, 6555, 42, 13, 'New Zealand');