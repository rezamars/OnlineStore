package repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import entities.Ad;

//@RepositoryRestResource(path = "ads")
@RepositoryRestResource
public interface AdRepository extends CrudRepository<Ad,Integer>{
	
	//List<Ad> findByHeadLine(@Param("headline") String headline);

}
