package com.example.demo.Entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Table;

@Entity
public class Patient {
@Id
@Column(name="PATIENT_ID")
@GeneratedValue(strategy=GenerationType.AUTO)
private int id;
private String name;
private String email;
private String gender;
private String password;
@javax.persistence.ManyToMany(fetch=FetchType.EAGER,cascade=CascadeType.ALL)
@JoinTable(name="PATIENT_ROLE",
    joinColumns= {
    		@JoinColumn(name="PATIENT_ID")
    },
    inverseJoinColumns= {
    		@JoinColumn(name="ROLE_ID")
    })
private Set<Role> role;
private int age;
private String occupation;
private long height;
private long weight;
private String mobile;
private String address;
public Patient() {
	
}

public Patient(String name, String email, String gender, String password, Set<Role> role, int age, String occupation,
		long height, long weight, String mobile, String address) {
	super();
	this.name = name;
	this.email = email;
	this.gender = gender;
	this.password = password;
	this.role = role;
	this.age = age;
	this.occupation = occupation;
	this.height = height;
	this.weight = weight;
	this.mobile = mobile;
	this.address = address;
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
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
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
