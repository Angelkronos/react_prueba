import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar usuario desde localStorage al iniciar
  useEffect(() => {
    // Crear usuarios demo si no existen usuarios
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.length === 0) {
      const demoUsers = [
        {
          id: 1,
          name: 'Gamer Demo',
          email: 'demo@levelup.cl',
          password: 'demo123',
          avatar: '🎮',
          memberSince: '2024',
          points: 1250,
        },
        {
          id: 2,
          name: 'Estudiante DUOC',
          email: 'estudiante@duoc.cl',
          password: 'duoc123',
          avatar: '🎓',
          memberSince: '2025',
          points: 500,
        }
      ];
      localStorage.setItem('users', JSON.stringify(demoUsers));
    }

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (email, password) => {
    // Simulación de login - en producción esto sería una llamada a API
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      const { password, ...userWithoutPassword } = user;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return { success: true };
    }
    
    return { success: false, error: 'Credenciales incorrectas' };
  };

  const register = (userData) => {
    // Simulación de registro - en producción esto sería una llamada a API
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Verificar si el email ya existe
    if (users.some(u => u.email === userData.email)) {
      return { success: false, error: 'El email ya está registrado' };
    }

    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
      avatar: '🎮',
      memberSince: new Date().getFullYear().toString(),
      points: 0,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    const { password, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
