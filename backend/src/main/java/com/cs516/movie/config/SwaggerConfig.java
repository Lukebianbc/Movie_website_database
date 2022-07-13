package com.cs516.movie.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
public class SwaggerConfig {
  @Bean
  public Docket createRestApi() {
    return new Docket(DocumentationType.SWAGGER_2)
        .select()
        .apis(RequestHandlerSelectors.basePackage("/"))
        .paths(PathSelectors.any())
        .build().apiInfo(new ApiInfoBuilder()
            .title("SpringBoot integrates swagger")
            .description("SpringBoot integrates swagger")
            .version("9.0")
            .contact(new Contact("bl243@duke.edu", "bohan.li@duke.edu", null))
            .build());
  }
}