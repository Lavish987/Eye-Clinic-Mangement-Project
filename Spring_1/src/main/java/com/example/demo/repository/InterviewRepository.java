package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.InterviewForm;
@Repository
public interface InterviewRepository extends JpaRepository<InterviewForm, Integer>{

}
