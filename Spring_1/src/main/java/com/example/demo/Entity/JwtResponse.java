package com.example.demo.Entity;

public class JwtResponse {

    private PatientDto patientDto;
    private String jwtToken;

    public JwtResponse(PatientDto patientDto, String jwtToken) {
        this.patientDto = patientDto;
        this.jwtToken = jwtToken;
    }

    public PatientDto getPatientDto() {
        return patientDto;
    }

    public void setPatientDto(PatientDto patientDto) {
        this.patientDto = patientDto;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }
  }