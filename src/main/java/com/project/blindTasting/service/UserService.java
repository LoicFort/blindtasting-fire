package com.project.blindTasting.service;

import com.project.blindTasting.mapper.UserMapper;
import com.project.blindTasting.model.*;
import com.project.blindTasting.repository.UserRepository;
import com.project.blindTasting.repository.WineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    protected UserMapper userMapper;


    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;

    }

    public void deleteUser(final Long id) {
        userRepository.deleteById(id);
    }

    public User getWine(final Long sessionId) {
        return userRepository.findBySessionId(sessionId).orElse(new User());
    }

    public User createWine(WineEntryDTO wineEntry) {
        User user = userMapper.mapToUser(wineEntry);
        return userRepository.save(user);
    }


    }
