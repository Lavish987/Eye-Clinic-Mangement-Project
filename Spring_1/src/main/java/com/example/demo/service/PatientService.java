package com.example.demo.service;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Patient;
import com.example.demo.Entity.Role;
import com.example.demo.repository.PatientRepository;
import com.example.demo.repository.RoleRepo;

@Service
public class PatientService {

    @Autowired
    private  PatientRepository patientRepo;

    @Autowired
    private RoleRepo roleRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    
    
    public Patient registerNewPatient(Patient patient) {
        Role role = roleRepo.findByRoleName("Patient");
        List <String> emails=patientRepo.getEmails();
        for(String s:emails ) {
        	if (patient.getEmail().equals(s)) {
        		return null;
        	}
        	
        }
        Set<Role> userRoles = new HashSet<>();
        try {
        	if(patient.getEmail()!=null && patient.getPassword()!=null && patient.getName()!=null) {
        		 userRoles.add(role);
        	        patient.setRole(userRoles);
        	        patient.setPassword(getEncodedPassword(patient.getPassword()));
        	        return patientRepo.save(patient);
        	}
        }catch(Exception e){
               e.printStackTrace();
        }
        return patient;
      }
    

    public String getEncodedPassword(String password) {
    	String encodingPassword=null;
    	try {
    		encodingPassword=passwordEncoder.encode(password);
    		return encodingPassword;
    	}
    	catch(Exception e) {
    		e.printStackTrace();
    	}
    	return encodingPassword;
        
    }
    public Patient getByName(String patientName) {
    	return patientRepo.findByName(patientName);
    }
}