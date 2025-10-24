import { useState, useEffect } from 'react';
import './PointsWidget.css';

const PointsWidget = () => {
  const [userData, setUserData] = useState({
    points: 0,
    level: 1,
    nextLevelPoints: 1000,
    referralCode: '',
    referredFriends: 0,
  });

  useEffect(() => {
    // Cargar datos del usuario desde localStorage
    const savedData = localStorage.getItem('levelup-user');
    if (savedData) {
      setUserData(JSON.parse(savedData));
    } else {
      // Generar código de referido aleatorio
      const code = 'LEVELUP' + Math.random().toString(36).substr(2, 6).toUpperCase();
      const initialData = {
        points: 250,
        level: 1,
        nextLevelPoints: 1000,
        referralCode: code,
        referredFriends: 0,
      };
      setUserData(initialData);
      localStorage.setItem('levelup-user', JSON.stringify(initialData));
    }
  }, []);

  const getLevelInfo = (level) => {
    const levels = [
      { level: 1, name: 'Novato', icon: '🎮', color: '#00d4ff' },
      { level: 2, name: 'Jugador', icon: '🎯', color: '#00ff88' },
      { level: 3, name: 'Pro', icon: '⭐', color: '#ffd700' },
      { level: 4, name: 'Experto', icon: '💎', color: '#8a2be2' },
      { level: 5, name: 'Maestro', icon: '👑', color: '#ff0080' },
      { level: 6, name: 'Leyenda', icon: '🏆', color: '#ff8c00' },
    ];
    return levels[Math.min(level - 1, 5)];
  };

  const levelInfo = getLevelInfo(userData.level);
  const progress = (userData.points / userData.nextLevelPoints) * 100;

  const copyReferralCode = () => {
    navigator.clipboard.writeText(userData.referralCode);
    alert('¡Código copiado al portapapeles!');
  };

  const addPoints = (points) => {
    const newData = { ...userData };
    newData.points += points;
    
    // Verificar si sube de nivel
    if (newData.points >= newData.nextLevelPoints) {
      newData.level += 1;
      newData.points -= newData.nextLevelPoints;
      newData.nextLevelPoints = Math.floor(newData.nextLevelPoints * 1.5);
    }
    
    setUserData(newData);
    localStorage.setItem('levelup-user', JSON.stringify(newData));
  };

  return (
    <div className="points-widget">
      <div className="level-header">
        <div className="level-badge" style={{ borderColor: levelInfo.color }}>
          <span className="level-icon">{levelInfo.icon}</span>
          <div className="level-info">
            <span className="level-number">Nivel {userData.level}</span>
            <span className="level-name" style={{ color: levelInfo.color }}>{levelInfo.name}</span>
          </div>
        </div>
        <div className="points-display">
          <span className="points-value">{userData.points}</span>
          <span className="points-label">puntos</span>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ 
              width: `${Math.min(progress, 100)}%`,
              background: `linear-gradient(90deg, ${levelInfo.color}, var(--accent-color, #00d4ff))`
            }}
          ></div>
        </div>
        <p className="progress-text">
          {userData.nextLevelPoints - userData.points} puntos para nivel {userData.level + 1}
        </p>
      </div>

      <div className="benefits-section">
        <h3>🎁 Beneficios de Puntos</h3>
        <ul className="benefits-list">
          <li>✓ Compras: 1 punto por cada $100</li>
          <li>✓ Reseñas: 50 puntos por reseña</li>
          <li>✓ Referidos: 200 puntos por amigo</li>
          <li>✓ Descuentos exclusivos por nivel</li>
        </ul>
      </div>

      <div className="referral-section">
        <h3>👥 Código de Referido</h3>
        <div className="referral-code-box">
          <code className="referral-code">{userData.referralCode}</code>
          <button className="btn-copy-code" onClick={copyReferralCode}>
            📋 Copiar
          </button>
        </div>
        <p className="referral-stats">
          Has referido a <strong>{userData.referredFriends}</strong> amigos
        </p>
        <p className="referral-info">
          💰 Comparte tu código y gana 200 puntos por cada amigo que haga su primera compra
        </p>
      </div>

      {/* Botones de prueba (remover en producción) */}
      <div className="test-buttons">
        <button onClick={() => addPoints(100)} className="btn-test">+ 100 pts</button>
        <button onClick={() => addPoints(500)} className="btn-test">+ 500 pts</button>
      </div>
    </div>
  );
};

export default PointsWidget;
