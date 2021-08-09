USE Conexao
---- Início CREATES ----
CREATE DATABASE Conexao;

USE Conexao;



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



---- INSERTS ----

-- Salas --
INSERT INTO Salas(nome, andar, metragem)
VALUES					('Laboratório', '1', '3,15m x 4,90m' )
						,('Informática', '2', '6,15m x 4,65m')
						,('Blibioteca', '1', '4,50m x 3,80m');


-- Equipamentos --
INSERT INTO Equipamentos(idSala, numPatrimonio, numSerie, descricao, marca, tipo, status)
VALUES					  (1,'8767', '45', 'Mesa flex', 'Mobly', 'Mobiliário', 1 )
						,(2, '9642', '98', 'Notebook', 'Acer', 'Eletrônico', 0 )
						,(1,'7564', '87', 'Microfone', 'LG', 'Eletrônico', 1 );


INSERT INTO Usuarios(nome, email, senha)
VALUES					  ('Amanda Silva', 'amandasilva@conexao.com', 'amanda@123')
						,('Júlio Farias', 'juliofarias@conexao.com', 'julio@123')
						,('Gabriel Santos', 'gabrielsantos@conexao.com', 'gabriel@123');



INSERT INTO Relacao(idEquipamento, idSala, idUsuario, entrada, saida)
VALUES					  (2, 2, 3, GETDATE(), '')
						,(1, 1, 2, GETDATE(), '')
						,(3, 1, 1, GETDATE(), '')
						





---- SELECTS ----

USE Conexao;


SELECT * FROM Salas

SELECT * FROM Equipamentos

SELECT * FROM Relacao

SELECT * FROM Usuarios
