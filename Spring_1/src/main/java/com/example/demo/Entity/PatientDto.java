package com.example.demo.Entity;
import java.util.Set;

public class PatientDto {

	private int id;
	private String name;
	private String email;
	private String gender;
	private Set<Role> role;
	private int age;
	private String occupation;
	private long height;
	private long weight;
	private String mobile;
	private String address;
    public PatientDto() {
    	
    }
public PatientDto(Patient p) {
    	this.name=p.getName();
    	this.email=p.getEmail();
    	this.address=p.getAddress();
    	this.mobile=p.getMobile();
    	this.weight=p.getWeight();
    	this.height=p.getHeight();
    	this.gender=p.getGender();
    	this.role=p.getRole();
    	this.age=p.getAge();
    	this.occupation=p.getOccupation();
    
    	
    }
    
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Set<Role> getRole() {
		return role;
	}
	public void setRole(Set<Role> role) {
		this.role = role;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	public long getHeight() {
		return height;
	}
	public void setHeight(long height) {
		this.height = height;
	}
	public long getWeight() {
		return weight;
	}
	public void setWeight(long weight) {
		this.weight = weight;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}



	}

