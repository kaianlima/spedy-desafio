package br.com.spedy.desafio;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDateTime;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import br.com.spedy.desafio.dao.ClassificadoRepository;
import br.com.spedy.desafio.entity.Classificado;

@DataJpaTest
@AutoConfigureTestDatabase(replace=Replace.NONE)
class ClassificadoRepositoryTest {

	@Autowired
    private TestEntityManager entityManager;
	
	@Autowired
	private ClassificadoRepository classificadoRepository;
	
	private static Classificado classificado = null;

	@BeforeAll
	static void testCreatePessoa() {
		String titulo = "Ad 1";
		String descricao = "Lorem ipsum";
		LocalDateTime dataCadastro = LocalDateTime.now();

		classificado = new Classificado(titulo, descricao, dataCadastro);
	}
	
	@Test
	void injectedComponentsNotNull() {
		assertNotNull(entityManager);
		assertNotNull(classificadoRepository);
	}
	
	@Test
	void testSave() {
		assertNotNull(classificadoRepository.save(classificado));
	}
	
	@Test
	void testFindAll() {
		classificado = classificadoRepository.save(classificado);
		
		assertTrue(classificadoRepository.count() > 0);
	}
	
}
