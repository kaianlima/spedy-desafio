package br.com.spedy.desafio.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import br.com.spedy.desafio.entity.Classificado;

@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource(path = "classificados", collectionResourceRel = "classificados")
public interface ClassificadoRepository extends JpaRepository<Classificado, Long> {

	List<Classificado> findAllByOrderByDataCadastroAsc();
}
