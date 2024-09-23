package com.project.blindTasting.controller;

import com.project.blindTasting.model.User;
import com.project.blindTasting.model.UserDTO;
import com.project.blindTasting.model.WineDTO;
import com.project.blindTasting.model.WineEntryDTO;
import com.project.blindTasting.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {


    @Autowired
    private UserService userService;

    @PostMapping("/createWine")
    public ResponseEntity<User> createWineToGuess(@RequestBody WineEntryDTO wineEntry) {
        User user =  userService.createWine(wineEntry);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping("/wineToGuess/{sessionId}")
    public ResponseEntity<User> getWineToGuess(@PathVariable Long sessionId) {
        User user =  userService.getWine(sessionId);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping("/users")
    public String getUsers() {
        return "coucou";
    }

}
