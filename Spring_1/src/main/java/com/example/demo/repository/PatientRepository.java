package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {
   Patient findByName(String name);
   @Query("Select email from Patient p")
   List <String> getEmails();
   Patient findByEmail(String email); 
   @Query("Select p from Patient p where email=:email ")
   Optional<Patient> findByEmailid(String email); 
   @Query("Select password from Patient p where email=:email")
   String findByPassword(String email);

}
