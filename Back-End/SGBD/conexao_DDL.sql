---- Início CREATES ----
CREATE DATABASE Conexao;

USE Conexao;

DROP TABLE Relacao


CREATE TABLE  Salas
(
	idSala			INT PRIMARY KEY IDENTITY
	,nome			VARCHAR(200)  NOT NULL
	,andar			VARCHAR(200)  NOT NULL
	,metragem		VARCHAR(200)  NOT NULL
);

CREATE TABLE  Equipamentos
(
	idEquipamento	INT PRIMARY KEY IDENTITY
	,idSala			INT FOREIGN KEY REFERENCES Salas(IdSala)
	,numPatrimonio	INT UNIQUE NOT NULL
	,numSerie		INT UNIQUE NOT NULL
	,marca			VARCHAR(200) NOT NULL
	,tipo			VARCHAR(200) NOT NULL
	,descricao		VARCHAR(200) NOT NULL
	,status			BIT DEFAULT (1)
);

CREATE TABLE  Usuarios
(
	idUsuario		INT PRIMARY KEY IDENTITY
	,nome			VARCHAR(200) NOT NULL
	,email			VARCHAR(200) UNIQUE NOT NULL
	,senha			VARCHAR(200) NOT NULL
);


CREATE TABLE Relacao
(	
	idRelacao		INT PRIMARY KEY IDENTITY
	,idSala			INT FOREIGN KEY REFERENCES Salas(IdSala)
	,idUsuario		INT FOREIGN KEY REFERENCES Usuarios(IdUsuario)
	,idEquipamento	INT FOREIGN KEY REFERENCES Equipamentos(IdEquipamento)
	,entrada		DATETIME	NOT NULL
	,saida			DATETIME	NOT NULL
);


