package com.portfolio.management;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@Import(com.portfolio.management.SwaggerConfig.class)
public class AppConfig {
    public static void main(String[] args) {
        SpringApplication.run(AppConfig.class);
    }

}

