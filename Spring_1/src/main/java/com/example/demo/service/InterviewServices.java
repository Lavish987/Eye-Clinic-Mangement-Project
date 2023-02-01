package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.InterviewForm;
import com.example.demo.repository.InterviewRepository;
@Service
public class InterviewServices {
@Autowired 
InterviewRepository interviewRepo;

public InterviewForm registerForm(InterviewForm iForm) {
	try {
	if(iForm.getEmail()!=null) {
		interviewRepo.save(iForm);
	}
	}catch(Exception e) {
		e.printStackTrace();
	}
	return iForm;
	
}

}
