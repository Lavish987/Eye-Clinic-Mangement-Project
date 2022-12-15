package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.patientRegistration;
import com.example.demo.repository.PatientRepository;

@RestController
@RequestMapping("patient/")
@CrossOrigin(origins = "http://localhost:3000/")
public class patientController {
	@Autowired
	PatientRepository repo;
	
	@GetMapping("get")
	public List<patientRegistration> getPatients(){
		return this.repo.findAll();
	}
	@PostMapping("register")
	public List<patientRegistration> persist(@RequestBody final patientRegistration pR){
		repo.save(pR);
		return repo.findAll();
	}
	

}
