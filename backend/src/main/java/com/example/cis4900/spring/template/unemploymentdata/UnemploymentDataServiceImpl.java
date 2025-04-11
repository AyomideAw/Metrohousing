package com.example.cis4900.spring.template.unemploymentdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.cis4900.spring.template.unemploymentdata.dao.UnemploymentDataDao;
import com.example.cis4900.spring.template.unemploymentdata.models.UnemploymentData;

@Service
public class UnemploymentDataServiceImpl implements UnemploymentDataService {
    
    private UnemploymentDataDao unemploymentDataDao;

    @Override
    public Iterable<UnemploymentData> allUnemploymentData() {
        return unemploymentDataDao.findAll();
    }

}
