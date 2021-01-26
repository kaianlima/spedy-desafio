package br.com.spedy.desafio;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.IOException;

import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.HttpClientBuilder;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

class ClassifcadoEndpointsTest {

	private static String url;
	
	@BeforeAll
	static void testURL() {
		url = "http://localhost:8080/classificados/";
	}

	// Listar todos classificados
	@Test
	public void testGetClassifcados() throws ClientProtocolException, IOException {
		HttpUriRequest request = new HttpGet(url);
		HttpResponse httpResponse = HttpClientBuilder.create().build().execute(request);
		
		assertEquals(HttpStatus.SC_OK, httpResponse.getStatusLine().getStatusCode());
	}

}
