package com.example.cis4900.spring.template.unemploymentdata.dao;

import com.example.cis4900.spring.template.unemploymentdata.models.UnemploymentData;

import org.springframework.data.repository.CrudRepository;

public interface UnemploymentDataDao extends CrudRepository<UnemploymentData, Integer> {


}