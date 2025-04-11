package com.example.cis4900.spring.template.unemploymentdata.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class UnemploymentData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cityID;

    private String city;

    private Integer unemploymentRate;

    public UnemploymentData() {

    }

    public UnemploymentData(Integer id, String city, Integer rate) {
        this.cityID = id;
        this.city = city;
        this.unemploymentRate = rate;
    }

    public Integer getId() {
        return cityID;
    }

    public void setId(Integer id) {
        this.cityID = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getUnemploymentRate() {
        return unemploymentRate;
    }

    public void setUnemploymentRate(Integer rate) {
        this.unemploymentRate = rate;
    }
}