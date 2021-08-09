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
