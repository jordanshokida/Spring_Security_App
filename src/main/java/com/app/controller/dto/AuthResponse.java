package com.app.controller.dto;


import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder({"userName","message","jwt",""})
public record AuthResponse(String userName,String message, String jwt,boolean status) {


}
