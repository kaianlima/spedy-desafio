package br.com.spedy.desafio.config;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.data.domain.AuditorAware;

public class CustomAuditorAware implements AuditorAware<LocalDateTime> {

    @Override
    public Optional<LocalDateTime> getCurrentAuditor() {
    	LocalDateTime date = LocalDateTime.now();
    	
    	return Optional.ofNullable(date);
    }

}
