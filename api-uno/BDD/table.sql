DROP TABLE IF EXISTS Cartes;

CREATE TABLE Cartes (
    id INT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    color INT,
    numCarte INT,
    valeur INT,
    rarete INT
);