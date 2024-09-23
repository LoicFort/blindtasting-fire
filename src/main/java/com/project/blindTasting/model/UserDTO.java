package com.project.blindTasting.model;

public record UserDTO(Role role,
                      String username,
                      Long sessionId) {
}
