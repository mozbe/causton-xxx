import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSigninCheck } from 'reactfire';

export function withAuth(Component: React.ComponentType) {
  return function requireAuth(props: any) {
    const { data: signInCheck, status } = useSigninCheck();
    let location = useLocation();

    if (status === 'loading') {
      return null;
    }

    if (!signInCheck.signedIn) {
      return <Navigate to="/login" state={{ from: location }} />;
    }

    return <Component {...props} />;
  };
}
