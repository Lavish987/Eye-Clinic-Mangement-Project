package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.patientRegistration;

@Repository
public interface PatientRepository extends JpaRepository<patientRegistration, String> {

}
