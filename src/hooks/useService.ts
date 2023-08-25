import { useState } from 'react';

function useAuth(): { jwt: string | null; role: string | null; saveAuthData: (jwtToken: string, userRole: string) => void; clearAuthData: () => void; } {
  
  const [jwt, setJwt] = useState(localStorage.getItem('jwt') || null);
  const [role, setRole] = useState(localStorage.getItem('role') || null);

  const saveAuthData = (jwtToken: string, userRole: string) => {
    setJwt(jwtToken);
    setRole(userRole);

    localStorage.setItem('jwt', jwtToken);
    localStorage.setItem('role', userRole);
  };

  const clearAuthData = () => {
    setJwt(null);
    setRole(null);

    localStorage.removeItem('jwt');
    localStorage.removeItem('role');
  };

  return { jwt, role, saveAuthData, clearAuthData };
}

export default useAuth;
