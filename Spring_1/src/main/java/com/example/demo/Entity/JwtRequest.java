package com.example.demo.Entity;

public class JwtRequest {

    private String patientName;
    private String patientPassword;

    public String getPatientName() {
    	System.out.println(patientName);
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getPatientPassword() {
        return patientPassword;
    }

    public void setPatientPassword(String patientPassword) {
    	System.out.println(patientPassword);
        this.patientPassword = patientPassword;
    }
}