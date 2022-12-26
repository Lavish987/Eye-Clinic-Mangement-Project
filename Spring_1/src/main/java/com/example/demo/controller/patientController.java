package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.JwtRequest;
import com.example.demo.Entity.JwtResponse;
import com.example.demo.Entity.Patient;
import com.example.demo.repository.PatientRepository;
import com.example.demo.service.JwtService;
import com.example.demo.service.PatientService;

import ch.qos.logback.classic.net.SyslogAppender;

@RestController
@RequestMapping("patient/")
@CrossOrigin(origins = "*")
public class patientController {
	@Autowired
	PatientRepository repo;
	@Autowired
	JwtService jwtService;
	@Autowired
	PatientService patientService;
	
	
	@GetMapping("doget")
	public List<Patient> getPatients(@RequestHeader("Secret") String secret){
		if(secret.equals("LAVISH")) {
			System.out.println("Hello");
		   	return this.repo.findAll();
		}
		return null;
	}
	
	@GetMapping("get")
	public List<Patient> getPatients1(){
		return this.repo.findAll();
	}
	@PostMapping("register")
	public Patient persist(@RequestBody final Patient p){
		return patientService.registerNewPatient(p);
	}
	@PostMapping("auth")
	public JwtResponse authenticate(@RequestBody JwtRequest jwtRequest) {
		try {
		
			JwtResponse jwtResponse = jwtService.createJwtToken(jwtRequest);
			String t=jwtResponse.getJwtToken();
			String t1="Token is - "+t;
			System.out.println(t1);
			return jwtResponse;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		
		
	}
//	@PutMapping("update")
//	public Patient Update(@RequestBody  Patient pR )throws Exception {
//		String email=pR.getEmail();
//		Optional<Patient > pR1=repo.findBy(email);
//		if (!pR1.isPresent()) {
//			throw new Exception("This User is Invalid");
//		}
//		repo.save(pR1.get());
//		
//		return pR1.get();
//		
//	}
//	
            
	
}
