package com.project.blindTasting.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {
    // Méthode qui gère la réception des propositions
    @MessageMapping("/submitGuess")
    @SendTo("/topic/results")
    public String submitGuess(String guess, SimpMessageHeaderAccessor headerAccessor) throws Exception {
        // Logique pour traiter la soumission de la réponse, ex : stocker en DB

        // Retourne la réponse traitée à tous les clients connectés à /topic/results
        return "coucou frérot";
    }
}
