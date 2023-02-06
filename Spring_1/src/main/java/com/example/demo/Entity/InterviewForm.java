package com.example.demo.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class InterviewForm {
	@Id
	@Column(name="FORM_ID")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String email;
	private String ques1;
	private String ques2;
	private String ques3;
	private String ques4;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getQues1() {
		return ques1;
	}
	public void setQues1(String ques1) {
		this.ques1 = ques1;
	}
	public String getQues2() {
		return ques2;
	}
	public void setQues2(String ques2) {
		this.ques2 = ques2;
	}
	public String getQues3() {
		return ques3;
	}
	public void setQues3(String ques3) {
		this.ques3 = ques3;
	}
	public String getQues4() {
		return ques4;
	}
	public void setQues4(String ques4) {
		this.ques4 = ques4;
	}
		public InterviewForm() {
		
	}
	public InterviewForm(String email, String ques1, String ques2, String ques3, String ques4) {
		super();
		this.email = email;
		this.ques1 = ques1;
		this.ques2 = ques2;
		this.ques3 = ques3;
		this.ques4 = ques4;

	}
		
	

}
