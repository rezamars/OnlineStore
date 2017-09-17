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
      //ad1.setId(0);
      ad1.setPubDate("2017-08-30");
      ad1.setPubTime("10:30");
      ad1.setSellerName("Wang");
      ad1.setEmail("wang@gmail.com");
      ad1.setPhoneNumber("0700-111111");
      ad1.setHeadline("Iphone 5");
      ad1.setPrice(2000);
      ad1.setDescription("Old Iphone 5 in good shape. Without scrathes. Good price.");
      
      File file1 = new File("C:/Users/Reza/Desktop/OS-images/iphone5.png");
      byte[] picInBytes1 = new byte[(int) file1.length()];
      FileInputStream fileInputStream1 = new FileInputStream(file1);
      fileInputStream1.read(picInBytes1);
      fileInputStream1.close();
      ad1.setImage(picInBytes1);
      
      Ad ad2 = new Ad();
      //ad2.setId(1);
      ad2.setPubDate("2017-09-14");
      ad2.setPubTime("05:18");
      ad2.setSellerName("Olle");
      ad2.setEmail("olle@gmail.com");
      ad2.setPhoneNumber("0700-222222");
      ad2.setHeadline("Samsung Galaxy S7");
      ad2.setPrice(2500);
      ad2.setDescription("Samsung S7 in good shape. Without scrathes.");
      
      File file2 = new File("C:/Users/Reza/Desktop/OS-images/Samsung-galaxy-s7.jpg");
      byte[] picInBytes2 = new byte[(int) file2.length()];
      FileInputStream fileInputStream2 = new FileInputStream(file2);
      fileInputStream2.read(picInBytes2);
      fileInputStream2.close();
      ad2.setImage(picInBytes2);
      
      
      entitymanager.persist(ad1);
      entitymanager.persist(ad2);
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
