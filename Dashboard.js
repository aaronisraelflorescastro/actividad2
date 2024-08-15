// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { auth, signOut } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = '/';
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2>Dashboard</h2>
          {user ? (
            <div>
              <h3>Welcome, {user.displayName}</h3>
              <Button onClick={handleLogout} variant="danger">
                Logout
              </Button>
            </div>
          ) : (
            <h3>Loading...</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
