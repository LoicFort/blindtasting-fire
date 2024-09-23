package com.project.blindTasting.mapper;

import com.project.blindTasting.model.User;
import com.project.blindTasting.model.WineEntryDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = WineMapper.class)
public interface UserMapper {

    // Mapper UserDTO vers User
    @Mapping(source = "wine", target = "wine")
    @Mapping(source = "user.role", target ="role")
    @Mapping(source = "user.username", target ="username")
    @Mapping(source = "user.sessionId", target ="sessionId")
    User mapToUser(WineEntryDTO wineEntry);

}

