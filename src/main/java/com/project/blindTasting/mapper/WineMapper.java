package com.project.blindTasting.mapper;

import com.project.blindTasting.model.Wine;
import com.project.blindTasting.model.WineDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface WineMapper {

    // Mapper pour convertir WineDTO en Wine
    Wine mapToWine(WineDTO wineDTO);

    // Mapper pour convertir Wine en WineDTO
    @Mapping(source = "domain", target = "domain")
    @Mapping(source = "bottleName", target = "bottleName")
    @Mapping(source = "vintage", target = "vintage")
    @Mapping(source = "grape", target = "grape")
    WineDTO mapToWineDTO(Wine wine);





}

