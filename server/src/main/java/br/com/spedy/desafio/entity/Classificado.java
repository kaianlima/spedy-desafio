package br.com.spedy.desafio.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "classificado")
@EntityListeners(AuditingEntityListener.class)
public class Classificado {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "titulo")
	private String titulo;

	@Column(name = "descricao")
	private String descricao;

	@CreatedDate
	@Column(name = "data_cadastro")
	private LocalDateTime dataCadastro;
	
	public Classificado(String titulo, String descricao, LocalDateTime dataCadastro) {
		this.titulo = titulo;
		this.descricao = descricao;
		this.dataCadastro = dataCadastro;
	}
	
	public Classificado(String titulo, String descricao) {
		this.titulo = titulo;
		this.descricao = descricao;
	}

}
