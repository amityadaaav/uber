import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const CaptainProtected = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/loginUser");
    }
  }, [token, navigate]);

  if (!token) {
    return null; // or loader
  }

  return <>{children}</>;
};

export default CaptainProtected;
