package repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import entities.Ad;

@RepositoryRestResource(collectionResourceRel = "ads", path = "ads")
public interface AdRepository extends PagingAndSortingRepository<Ad,Long>{
	
	List<Ad> findByHeadLine(@Param("headline") String headline);

}
