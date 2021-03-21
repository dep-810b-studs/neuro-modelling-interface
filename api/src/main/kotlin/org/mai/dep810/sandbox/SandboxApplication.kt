package org.mai.dep810.sandbox

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import springfox.documentation.builders.PathSelectors
import springfox.documentation.builders.RequestHandlerSelectors
import springfox.documentation.service.ApiInfo
import springfox.documentation.service.Contact
import springfox.documentation.spi.DocumentationType
import springfox.documentation.spring.web.plugins.Docket
import springfox.documentation.swagger2.annotations.EnableSwagger2
import java.util.*

@Configuration
@EnableSwagger2
class SwaggerConfig {
	@Bean
	fun api(): Docket {
		return Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.any())
				.paths(PathSelectors.any())
				.build()
				.apiInfo(getApiInfo())
	}

	private fun getApiInfo() : ApiInfo =
			ApiInfo(
					"Neuromorphic Systems API",
					"API that allow work with Neuromorphic Systems",
					"v.1.0.0",
					"term",
					Contact("Vasily Scherbakov", "www.example.com", "basil-scherbakov@ya.ru"),
					"License of API",
					"API license URL",
					 Collections.emptyList())
}

@SpringBootApplication
class NeuroModellingApi

fun main(args: Array<String>) {
	runApplication<NeuroModellingApi>(*args)
}
