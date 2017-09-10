package springApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import entities.Ad;
import repositories.AdRepository;

@SpringBootApplication
@ComponentScan(basePackageClasses = {AdRepository.class})
@EntityScan(basePackageClasses = {Ad.class})
@EnableJpaRepositories(basePackageClasses = {AdRepository.class})
@PropertySource("application.properties")
public class Application {

	/*
	@RequestMapping("/")
    @ResponseBody
    String home() {
        return "Hello World!";
    }
	*/

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Application.class, args);
        //AdService as = new AdService();
        //System.out.println(as.createAndInitDB());
    }

}
