package com.example.demo.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.JwtRequest;
import com.example.demo.Entity.JwtResponse;
import com.example.demo.Entity.Patient;
import com.example.demo.repository.PatientRepository;
import com.example.demo.util.JwtUtil;

@Service
public class JwtService implements UserDetailsService {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PatientRepository patientRepo;

    @Autowired
    private AuthenticationManager authenticationManager;

    public JwtResponse createJwtToken(JwtRequest jwtRequest) throws Exception {
        String patientName = jwtRequest.getPatientName();
        String patientPassword = jwtRequest.getPatientPassword();
        authenticate(patientName, patientPassword);

        UserDetails patientDetails = loadUserByUsername(patientName);
        String newGeneratedToken = jwtUtil.generateToken(patientDetails);

        Patient patient = patientRepo.findByName(patientName);
        return new JwtResponse(patient, newGeneratedToken);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Patient patient = patientRepo.findByName(username);

        if (patient != null) {
            return new org.springframework.security.core.userdetails.User(
                    patient.getName(),
                    patient.getPassword(),
                    getAuthority(patient)
            );
        } else {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
    }

    private Set<SimpleGrantedAuthority> getAuthority(Patient patient) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        patient.getRole().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getRoleName()));
        });
        return authorities;
    }

    private void authenticate(String patientName, String patientPassword) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(patientName, patientPassword));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
