package org.mai.dep810.sandbox.controller

import org.mai.dep810.sandbox.service.PlayerService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import springfox.documentation.builders.PathSelectors
import springfox.documentation.builders.RequestHandlerSelectors
import springfox.documentation.spi.DocumentationType
import springfox.documentation.spring.web.plugins.Docket
import springfox.documentation.swagger2.annotations.EnableSwagger2
import kotlin.streams.toList

@RestController
class LeadersController {
    @Autowired
    lateinit var playerService: PlayerService

    @CrossOrigin(origins = ["http://localhost:4000"])
    @GetMapping("/leaders")
    fun getLeaders(): List<String> =
            playerService.leaders()
                         .stream()
                         .map { it.handle }
                         .toList()
}

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
    }
}

