package springApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import entities.Ad;
import repositories.AdRepository;

@RestController
@RequestMapping("/")
public class RESTController {
	
	/*
	@RequestMapping("/")
	public Ad ad(@RequestParam(value="id", defaultValue="0") int id){
		return new Ad(id);
	}*/
	/*
	@Autowired
    private AdRepository repository;
	
	@RequestMapping(method = RequestMethod.GET, value = { "${url.mapping}" })
    public ResponseEntity<Ad> getAdWithId(@PathVariable Long id) {
        return new ResponseEntity<>(repository.findOne(id),HttpStatus.OK);
    }
	*/
}
