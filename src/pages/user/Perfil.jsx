import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { PointsWidget, ShareButton } from '../../components/user';
import { ChatWidget } from '../../components/support';
import './Perfil.css';

const Perfil = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const [userProfile, setUserProfile] = useState({
    name: user?.name || 'Gamer Pro',
    email: user?.email || 'gamer@levelup.cl',
    avatar: user?.avatar || '🎮',
    avatarImage: user?.avatarImage || null,
    memberSince: user?.memberSince || '2024',
  });

  const [activeTab, setActiveTab] = useState('profile');

  // Leer el parámetro 'tab' de la URL al cargar el componente
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['profile', 'orders', 'reviews', 'points'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  // Manejar el cambio de imagen de perfil
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validar que sea una imagen
      if (!file.type.startsWith('image/')) {
        alert('Por favor selecciona un archivo de imagen válido');
        return;
      }
      
      // Validar tamaño (máximo 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('La imagen no debe superar los 5MB');
        return;
      }

      // Crear URL temporal para previsualización
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserProfile(prev => ({
          ...prev,
          avatarImage: reader.result
        }));
        // Aquí podrías guardar en localStorage o enviar al backend
        localStorage.setItem('userAvatarImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Cargar imagen guardada del localStorage al montar
  useEffect(() => {
    const savedAvatar = localStorage.getItem('userAvatarImage');
    if (savedAvatar) {
      setUserProfile(prev => ({
        ...prev,
        avatarImage: savedAvatar
      }));
    }
  }, []);

  const [orders] = useState([
    {
      id: 1,
      date: '2025-10-15',
      status: 'Entregado',
      total: 149990,
      items: 3,
    },
    {
      id: 2,
      date: '2025-10-10',
      status: 'En camino',
      total: 89990,
      items: 2,
    },
    {
      id: 3,
      date: '2025-10-05',
      status: 'Procesando',
      total: 249990,
      items: 4,
    },
  ]);

  const [reviews] = useState([
    {
      id: 1,
      productName: 'PlayStation 5',
      rating: 5,
      comment: '¡Increíble consola! Muy rápida y los gráficos son espectaculares.',
      date: '2025-10-12',
    },
    {
      id: 2,
      productName: 'God of War Ragnarök',
      rating: 5,
      comment: 'Obra maestra. La historia te atrapa desde el inicio.',
      date: '2025-10-08',
    },
  ]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Entregado':
        return '#00ff88';
      case 'En camino':
        return '#00d4ff';
      case 'Procesando':
        return '#ffa500';
      default:
        return 'white';
    }
  };

  const demoProduct = {
    id: 1,
    name: 'PlayStation 5 Digital Edition',
    price: 499990,
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="perfil-page">
      <div className="perfil-header">
        <div className="profile-avatar">
          {userProfile.avatarImage ? (
            <img 
              src={userProfile.avatarImage} 
              alt="Avatar" 
              className="avatar-image"
            />
          ) : (
            <span className="avatar-icon">{userProfile.avatar}</span>
          )}
          <label htmlFor="avatar-upload" className="avatar-upload-btn">
            📷
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              style={{ display: 'none' }}
            />
          </label>
        </div>
        <div className="profile-info">
          <h1>{userProfile.name}</h1>
          <p>{userProfile.email}</p>
          <span className="member-badge">Miembro desde {userProfile.memberSince}</span>
        </div>
        <div className="header-actions">
          <ShareButton product={demoProduct} />
          <button className="btn-logout" onClick={handleLogout}>
            🚪 Cerrar Sesión
          </button>
        </div>
      </div>

      <div className="perfil-tabs">
        <button
          className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          👤 Mi Perfil
        </button>
        <button
          className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => setActiveTab('orders')}
        >
          📦 Mis Pedidos
        </button>
        <button
          className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          ⭐ Mis Reseñas
        </button>
        <button
          className={`tab-btn ${activeTab === 'points' ? 'active' : ''}`}
          onClick={() => setActiveTab('points')}
        >
          🎁 Puntos y Recompensas
        </button>
      </div>

      <div className="perfil-content">
        {activeTab === 'profile' && (
          <div className="profile-tab">
            <div className="profile-section">
              <h2>Información Personal</h2>
              <div className="profile-form">
                <div className="form-group">
                  <label>Nombre completo</label>
                  <input type="text" value={userProfile.name} readOnly />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" value={userProfile.email} readOnly />
                </div>
                <div className="form-group">
                  <label>Teléfono</label>
                  <input type="tel" placeholder="+56 9 1234 5678" />
                </div>
                <div className="form-group">
                  <label>Dirección</label>
                  <input type="text" placeholder="Calle, número, depto" />
                </div>
                <button className="btn-save">💾 Guardar Cambios</button>
              </div>
            </div>

            <div className="profile-section">
              <h2>Preferencias de Notificaciones</h2>
              <div className="preferences-list">
                <label className="preference-item">
                  <input type="checkbox" defaultChecked />
                  <span>Recibir ofertas y promociones</span>
                </label>
                <label className="preference-item">
                  <input type="checkbox" defaultChecked />
                  <span>Notificaciones de nuevos productos</span>
                </label>
                <label className="preference-item">
                  <input type="checkbox" />
                  <span>Newsletter semanal</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="orders-tab">
            <h2>Historial de Pedidos</h2>
            <div className="orders-list">
              {orders.map(order => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <div>
                      <h3>Pedido #{order.id}</h3>
                      <p className="order-date">{order.date}</p>
                    </div>
                    <span
                      className="order-status"
                      style={{ color: getStatusColor(order.status) }}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="order-details">
                    <div className="order-info-item">
                      <span className="label">Total:</span>
                      <span className="value">{formatPrice(order.total)}</span>
                    </div>
                    <div className="order-info-item">
                      <span className="label">Productos:</span>
                      <span className="value">{order.items} items</span>
                    </div>
                  </div>
                  <button className="btn-view-order">Ver Detalle</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="reviews-tab">
            <h2>Mis Reseñas y Calificaciones</h2>
            <div className="reviews-list">
              {reviews.map(review => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <h3>{review.productName}</h3>
                    <div className="review-rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < review.rating ? 'star filled' : 'star'}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                  <span className="review-date">{review.date}</span>
                </div>
              ))}
            </div>
            <button className="btn-add-review">✍️ Escribir una Reseña</button>
          </div>
        )}

        {activeTab === 'points' && (
          <div className="points-tab">
            <PointsWidget />
            
            <div className="rewards-section">
              <h2>🎁 Canjea tus Puntos</h2>
              <div className="rewards-grid">
                <div className="reward-card">
                  <span className="reward-icon">💵</span>
                  <h4>$5.000 Descuento</h4>
                  <p className="reward-cost">500 puntos</p>
                  <button className="btn-redeem">Canjear</button>
                </div>
                <div className="reward-card">
                  <span className="reward-icon">💰</span>
                  <h4>$10.000 Descuento</h4>
                  <p className="reward-cost">900 puntos</p>
                  <button className="btn-redeem">Canjear</button>
                </div>
                <div className="reward-card">
                  <span className="reward-icon">🎮</span>
                  <h4>Accesorio Gratis</h4>
                  <p className="reward-cost">1500 puntos</p>
                  <button className="btn-redeem">Canjear</button>
                </div>
                <div className="reward-card">
                  <span className="reward-icon">🚚</span>
                  <h4>Envío Gratis 3x</h4>
                  <p className="reward-cost">800 puntos</p>
                  <button className="btn-redeem">Canjear</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <ChatWidget />
    </div>
  );
};

export default Perfil;
