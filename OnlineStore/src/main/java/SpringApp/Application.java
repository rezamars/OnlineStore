package SpringApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Configuration
@EnableAutoConfiguration
@ComponentScan
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
    }

}
