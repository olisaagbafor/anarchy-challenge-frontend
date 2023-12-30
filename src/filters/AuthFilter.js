import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthProvider";

const AuthFilter = ({ children }) => {
  const auth = useAuth();
  const { user, getUser } = auth;

  if (!user) {
    getUser();
  }

  return children;
};

export default AuthFilter;
