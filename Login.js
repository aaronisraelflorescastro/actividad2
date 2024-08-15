// src/components/Login.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { auth, provider, signInWithPopup } from '../firebase';

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2>Iniciar Sesión</h2>
          <Button onClick={handleGoogleLogin} variant="danger">
            Iniciar con Google
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
