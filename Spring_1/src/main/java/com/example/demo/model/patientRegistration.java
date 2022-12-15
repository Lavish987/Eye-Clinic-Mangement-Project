package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="patientregistration")
public class patientRegistration {
@Column(name="name1")
private String Name;
@Id
@Column(name="email")
private String Email;
@Column(name="password1")
private String Password;
@Column(name="age")
private int Age;
@Column(name="occupation")
private String Occupation;
@Column(name="height")
private long Height;
@Column(name="weight")
private long Weight;
@Column(name="mobile")
private String Mobile;
@Column(name="address")
private String Address;
public patientRegistration() {
	
}
public patientRegistration(String name, String email, String password, int age, String occupation, long height,
		long weight, String mobile, String address) {
	super();
	Name = name;
	Email = email;
	Password = password;
	Age = age;
	Occupation = occupation;
	Height = height;
	Weight = weight;
	Mobile = mobile;
	Address = address;
}
public String getName() {
	return Name;
}
public void setName(String name) {
	Name = name;
}
public String getEmail() {
	return Email;
}
public void setEmail(String email) {
	Email = email;
}
public String getPassword() {
	return Password;
}
public void setPassword(String password) {
	Password = password;
}
public int getAge() {
	return Age;
}
public void setAge(int age) {
	Age = age;
}
public String getOccupation() {
	return Occupation;
}
public void setOccupation(String occupation) {
	Occupation = occupation;
}
public long getHeight() {
	return Height;
}
public void setHeight(long height) {
	Height = height;
}
public long getWeight() {
	return Weight;
}
public void setWeight(long weight) {
	Weight = weight;
}
public String getMobile() {
	return Mobile;
}
public void setMobile(String mobile) {
	Mobile = mobile;
}
public String getAddress() {
	return Address;
}
public void setAddress(String address) {
	Address = address;
}


}
