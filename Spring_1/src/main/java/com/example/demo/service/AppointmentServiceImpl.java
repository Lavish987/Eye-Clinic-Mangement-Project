package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Appointment;
import com.example.demo.repository.AppointmentRepository;

@Service
public class AppointmentServiceImpl implements AppointmentService {

	@Autowired
	private AppointmentRepository appointmentRepository;

	@Override
	public List<Appointment> findAll() {

		return appointmentRepository.findAll();
	}

	@Override
	public void save(Appointment theAppointment) {

		appointmentRepository.save(theAppointment);

	}

}
