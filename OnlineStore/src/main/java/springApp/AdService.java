package springApp;

import java.io.File;
import java.io.FileInputStream;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import entities.Ad;


public class AdService {
	
private String message = "ERROR!";
	
	public String createAndInitDB(){
		
	try{
		
		
      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
      EntityManager entitymanager = emfactory.createEntityManager( );
      entitymanager.getTransaction( ).begin( );
      
      Ad ad1 = new Ad();
      ad1.setId(0);
      ad1.setPubDate("2017-08-30");
      ad1.setPubTime("10:30");
      ad1.setSellerName("Wang");
      ad1.setEmail("wang@gmail.com");
      ad1.setPhoneNumber("0700-111111");
      ad1.setHeadline("Iphone 5");
      ad1.setPrice(2000);
      ad1.setDescription("Old Iphone 5 in good shape. Without scrathes. Good price.");
      //Image
      
      File file = new File("C:/Users/Reza/Desktop/OS-images/iphone5.png");
      byte[] picInBytes = new byte[(int) file.length()];
      FileInputStream fileInputStream = new FileInputStream(file);
      fileInputStream.read(picInBytes);
      fileInputStream.close();
      ad1.setImage(picInBytes);
      
      
      entitymanager.persist(ad1);
      entitymanager.getTransaction().commit();
      entitymanager.close();
      emfactory.close();
      
      
      
      
      message = "Create and initialization of DB succesful!";
      
	}
	catch(Exception e){
		System.out.print("ERROR-message: " + e.getMessage());
		message = "ERROR!";
	}
      
      
      
     return message;
}

}
