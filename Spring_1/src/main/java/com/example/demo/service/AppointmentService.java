package com.example.demo.service;

import java.util.List;

import com.example.demo.Entity.Appointment;

public interface AppointmentService {

	public List<Appointment> findAll();

	public void save(Appointment theAppointment);
}
