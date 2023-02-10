package com.example.demo.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



 
@Entity
@Table(name="appointments")
public class Appointment {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="first_Name")
	private String firstName;
	
	@Column(name="last_Name")
	private String lastName;
	
	@Column(name="email")

	private String email;
	
	@Column(name="date")
	private String date;
	
	@Column(name="timing")
	private String timing;
	
	public Appointment()
	{
		
	}

	public Appointment(String firstName, String lastName, String email, String date, String timing) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.date = date;
		this.timing = timing;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTiming() {
		return timing;
	}

	public void setTiming(String timing) {
		this.timing = timing;
	}

	@Override
	public String toString() {
		return "Appointment [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", date=" + date + ", timing=" + timing + "]";
	}
	
	
	
}




