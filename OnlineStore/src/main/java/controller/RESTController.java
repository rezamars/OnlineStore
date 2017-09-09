package controller;
/*
import java.util.Collection;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import entities.Ad;
import repositories.AdRepository;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE, value = "/ads")
public class RESTController {
	
	private AdRepository adRepo;
	//private final AtomicLong counter = new AtomicLong();
	
	@RequestMapping(method=RequestMethod.GET)
    public Iterable<Ad> getAds() {
        return this.adRepo.findAll();
    }
	
	@Autowired
	public RESTController(AdRepository adRepo) {
		this.adRepo = adRepo;
	}
	/*
	@RequestMapping("/ads")
	Iterable<Ad> readAds() {
		
		return this.adRepo.findAll();
	}
	
	@RequestMapping(value="/folders", method=RequestMethod.GET, produces="application/json", consumes="application/json")
    @ResponseBody
    public  Iterable<Ad> getAds(Iterable<Integer> id) {
        return this.adRepo.findAll(id);
    }
	*/
	
//}
