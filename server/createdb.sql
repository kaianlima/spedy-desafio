DROP SCHEMA IF EXISTS `spedy_desafio`;
CREATE SCHEMA `spedy_desafio`;
USE `spedy_desafio`;

SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `classificado`;
CREATE TABLE `classificado` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  `descricao` varchar(200) NOT NULL,
  `data_cadastro` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

-- Dados para testar --
INSERT INTO `classificado` VALUES
(1, "Vende-se Fiat Uno", "1.0, Ano 2014/2014, Cor Branca, Km 82506, Flex", NOW()),
(2, "Vende-se casa", "Casa de esquina, 2 quartos, 1 banheiro, 1 garagem. Tratar com proprietário", NOW()),
(3, "Casa de praia para alugar", "Casa a 2 quadras da praia, 3 quartos, sendo 1 suite, 1 banheiro, varanda, com tudo mobiliado.", NOW());

SET FOREIGN_KEY_CHECKS=1;