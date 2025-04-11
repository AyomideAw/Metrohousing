package com.example.cis4900.spring.template.controllers;

import com.example.cis4900.spring.template.unemploymentdata.UnemploymentDataService;
import com.example.cis4900.spring.template.unemploymentdata.models.UnemploymentData;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/data")
public class unemploymentDataController {
    private UnemploymentDataService unemploymentDataService;

    @Autowired
    unemploymentDataController(UnemploymentDataService unemploymentDataService) {
        this.unemploymentDataService = unemploymentDataService;
    }

    @GetMapping("/all")
    public Iterable<UnemploymentData> allData() {
        return unemploymentDataService.allUnemploymentData();
    }
}
