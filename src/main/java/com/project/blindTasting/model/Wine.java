package com.project.blindTasting.model;

import jakarta.persistence.*;


import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "wine")
public class Wine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String domain;

    @Column(name = "bottle_name")
    private String bottleName;

    @Column
    private String vintage;


    private String grape;

    public String getDomain() {
        return domain;
    }

    public String getBottleName() {
        return bottleName;
    }



    public String getVintage() {
        return vintage;
    }

    public String getGrape() {
        return grape;
    }


    public void setDomain(String domain) {
        this.domain = domain;
    }

    public void setBottleName(String bottleName) {
        this.bottleName = bottleName;
    }



    public void setVintage(String vintage) {
        this.vintage = vintage;
    }

    public void setGrape(String grape) {
        this.grape = grape;
    }
}
