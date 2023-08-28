import { useState } from 'react';

function useAuth(): { jwt: string | null; role: string | null; userId: string | null; saveAuthData: (jwtToken: string, userRole: string, userIdReceived: string) => void; clearAuthData: () => void; } {
  
  const [jwt, setJwt] = useState(localStorage.getItem('jwt') || null);
  const [role, setRole] = useState(localStorage.getItem('role') || null);
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null);

  const saveAuthData = (jwtToken: string, userRole: string, userIdReceived: string) => {
    setJwt(jwtToken);
    setRole(userRole);
    setUserId(userIdReceived);

    localStorage.setItem('jwt', jwtToken);
    localStorage.setItem('role', userRole);
    localStorage.setItem('userId', userIdReceived);
  };

  const clearAuthData = () => {
    setJwt(null);
    setRole(null);
    setUserId(null);

    localStorage.removeItem('jwt');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
  };

  return { jwt, role, userId, saveAuthData, clearAuthData };
}

export default useAuth;
