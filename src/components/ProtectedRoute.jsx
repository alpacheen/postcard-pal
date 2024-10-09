import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  console.log('ProtectedRoute - User:', user, 'Loading:', loading);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    console.log('User not authenticated, redirecting to login');
    return <Navigate to="/login" replace />;
  }

  console.log('User authenticated, rendering protected content');
  return children;
}

export default ProtectedRoute;
