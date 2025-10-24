// Base de datos de productos Level-Up Gamer
// Simulación de base de datos local con operaciones CRUD

let productsDatabase = [
  {
    id: 1,
    name: "PlayStation 5 Digital Edition",
    category: "consolas",
    brand: "Sony",
    price: 499990,
    originalPrice: 549990,
    discount: 9,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&q=80",
    rating: 4.8,
    reviews: 1243,
    stock: 15,
    featured: true,
    isOffer: true,
    description: "Consola de última generación con experiencia 4K y carga ultra rápida con SSD.",
    specs: ["SSD 825GB", "4K HDR", "Ray Tracing", "Tempest 3D Audio"],
    tags: ["nueva generación", "sin disco", "4k"]
  },
  {
    id: 2,
    name: "Xbox Series X",
    category: "consolas",
    brand: "Microsoft",
    price: 549990,
    originalPrice: 599990,
    discount: 8,
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=500&q=80",
    rating: 4.7,
    reviews: 987,
    stock: 12,
    featured: true,
    isOffer: true,
    description: "La consola Xbox más potente. Juega miles de títulos en 4 generaciones de Xbox.",
    specs: ["1TB SSD", "4K 120fps", "12 TFLOPS", "Quick Resume"],
    tags: ["potente", "retrocompatible", "gamepass"]
  },
  {
    id: 3,
    name: "Nintendo Switch OLED",
    category: "consolas",
    brand: "Nintendo",
    price: 399990,
    originalPrice: 429990,
    discount: 7,
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500&q=80",
    rating: 4.9,
    reviews: 2156,
    stock: 25,
    featured: true,
    isOffer: true,
    description: "Pantalla OLED de 7 pulgadas para jugar en casa y en cualquier lugar.",
    specs: ["Pantalla OLED 7\"", "64GB almacenamiento", "Portátil/TV", "Joy-Cons"],
    tags: ["portátil", "oled", "familia"]
  },
  {
    id: 4,
    name: "The Last of Us Part II",
    category: "juegos",
    brand: "Naughty Dog",
    price: 39990,
    originalPrice: 59990,
    discount: 33,
    image: "/assets/images/lastofus.jpg",
    rating: 4.6,
    reviews: 3421,
    stock: 50,
    featured: false,
    isOffer: true,
    description: "Aventura épica de acción y supervivencia en un mundo post-apocalíptico.",
    specs: ["PS4/PS5", "Acción/Aventura", "Un jugador", "18+"],
    tags: ["aventura", "exclusivo ps", "historia"]
  },
  {
    id: 5,
    name: "God of War Ragnarök",
    category: "juegos",
    brand: "Santa Monica Studio",
    price: 59990,
    originalPrice: 69990,
    discount: 14,
    image: "/assets/images/gow.jpg",
    rating: 4.9,
    reviews: 4532,
    stock: 40,
    featured: true,
    isOffer: true,
    description: "Kratos y Atreus enfrentan el Ragnarök en esta épica aventura nórdica.",
    specs: ["PS4/PS5", "Acción/Aventura", "Un jugador", "18+"],
    tags: ["aventura", "exclusivo ps", "mitología"]
  },
  {
    id: 6,
    name: "Halo Infinite",
    category: "juegos",
    brand: "343 Industries",
    price: 49990,
    originalPrice: 69990,
    discount: 29,
    image: "/assets/images/halo.jpg",
    rating: 4.5,
    reviews: 2987,
    stock: 35,
    featured: false,
    isOffer: true,
    description: "El regreso del legendario Jefe Maestro en una nueva aventura épica.",
    specs: ["Xbox/PC", "FPS", "Multijugador", "16+"],
    tags: ["shooter", "multijugador", "ciencia ficción"]
  },
  {
    id: 7,
    name: "The Legend of Zelda: Tears of the Kingdom",
    category: "juegos",
    brand: "Nintendo",
    price: 69990,
    originalPrice: 69990,
    discount: 0,
    image: "/assets/images/link.jpg",
    rating: 5.0,
    reviews: 5678,
    stock: 30,
    featured: true,
    isOffer: false,
    description: "Una aventura épica que desafía las leyes de los cielos de Hyrule.",
    specs: ["Nintendo Switch", "Aventura", "Un jugador", "E10+"],
    tags: ["aventura", "mundo abierto", "exclusivo nintendo"]
  },
  {
    id: 8,
    name: "Auriculares HyperX Cloud II",
    category: "accesorios",
    brand: "HyperX",
    price: 89990,
    originalPrice: 119990,
    discount: 25,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80",
    rating: 4.7,
    reviews: 1876,
    stock: 45,
    featured: true,
    isOffer: true,
    description: "Auriculares gaming profesionales con sonido envolvente 7.1.",
    specs: ["7.1 Surround", "Micrófono extraíble", "Multiplataforma", "Cable trenzado"],
    tags: ["audio", "pro", "multiuso"]
  },
  {
    id: 9,
    name: "Teclado Mecánico Razer BlackWidow",
    category: "accesorios",
    brand: "Razer",
    price: 149990,
    originalPrice: 189990,
    discount: 21,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
    rating: 4.6,
    reviews: 1234,
    stock: 20,
    featured: false,
    isOffer: true,
    description: "Teclado mecánico con switches Razer Green y RGB Chroma.",
    specs: ["Switches mecánicos", "RGB Chroma", "Anti-ghosting", "Reposamuñecas"],
    tags: ["mecánico", "rgb", "profesional"]
  },
  {
    id: 10,
    name: "Mouse Logitech G502 HERO",
    category: "accesorios",
    brand: "Logitech",
    price: 69990,
    originalPrice: 89990,
    discount: 22,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80",
    rating: 4.8,
    reviews: 3456,
    stock: 60,
    featured: true,
    isOffer: true,
    description: "Mouse gaming de alta precisión con sensor HERO 25K.",
    specs: ["25,600 DPI", "11 botones programables", "RGB", "Pesas ajustables"],
    tags: ["precisión", "programable", "fps"]
  },
  {
    id: 11,
    name: "Monitor ASUS ROG Swift 27\" 144Hz",
    category: "accesorios",
    brand: "ASUS",
    price: 449990,
    originalPrice: 549990,
    discount: 18,
    image: "/assets/images/monitor.jpg",
    rating: 4.9,
    reviews: 876,
    stock: 8,
    featured: true,
    isOffer: true,
    description: "Monitor gaming QHD de 27\" con 144Hz y G-Sync.",
    specs: ["QHD 2560x1440", "144Hz", "1ms respuesta", "G-Sync", "IPS"],
    tags: ["monitor", "alta frecuencia", "profesional"]
  },
  {
    id: 12,
    name: "Silla Gamer DXRacer Formula",
    category: "accesorios",
    brand: "DXRacer",
    price: 299990,
    originalPrice: 399990,
    discount: 25,
    image: "/assets/images/silla.jpg",
    rating: 4.5,
    reviews: 654,
    stock: 12,
    featured: false,
    isOffer: true,
    description: "Silla ergonómica con soporte lumbar y cervical ajustable.",
    specs: ["Cuero PU", "Reclinable 135°", "Cojines ajustables", "Base aluminio"],
    tags: ["ergonómica", "profesional", "confort"]
  },
  {
    id: 13,
    name: "Webcam Logitech C920 HD Pro",
    category: "accesorios",
    brand: "Logitech",
    price: 79990,
    originalPrice: 99990,
    discount: 20,
    image: "/assets/images/cam.jpg",
    rating: 4.7,
    reviews: 2341,
    stock: 35,
    featured: false,
    isOffer: true,
    description: "Webcam Full HD 1080p ideal para streaming y videollamadas.",
    specs: ["Full HD 1080p", "30fps", "Micrófonos duales", "Enfoque automático"],
    tags: ["streaming", "video", "profesional"]
  },
  {
    id: 14,
    name: "Control DualSense PS5 - Cosmic Red",
    category: "accesorios",
    brand: "Sony",
    price: 69990,
    originalPrice: 74990,
    discount: 7,
    image: "/assets/images/control.jpg",
    rating: 4.8,
    reviews: 1987,
    stock: 40,
    featured: false,
    isOffer: false,
    description: "Control inalámbrico con retroalimentación háptica y gatillos adaptativos.",
    specs: ["Haptic feedback", "Gatillos adaptativos", "Batería recargable", "Micrófono integrado"],
    tags: ["control", "ps5", "inalámbrico"]
  },
  {
    id: 15,
    name: "Capturadora Elgato HD60 S+",
    category: "accesorios",
    brand: "Elgato",
    price: 199990,
    originalPrice: 249990,
    discount: 20,
    image: "/assets/images/gato.jpg",
    rating: 4.6,
    reviews: 543,
    stock: 15,
    featured: false,
    isOffer: true,
    description: "Captura y streaming en 1080p60 con latencia ultra baja.",
    specs: ["1080p60 HDR10", "USB 3.0", "Pass-through 4K60", "Instant Gameview"],
    tags: ["streaming", "captura", "pro"]
  },
  {
    id: 16,
    name: "FIFA 24",
    category: "juegos",
    brand: "EA Sports",
    price: 59990,
    originalPrice: 69990,
    discount: 14,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&q=80",
    rating: 4.3,
    reviews: 4321,
    stock: 100,
    featured: false,
    isOffer: true,
    description: "La experiencia de fútbol más realista con HyperMotionV y FC Ultimate Team.",
    specs: ["Multiplataforma", "Deportes", "Multijugador", "E"],
    tags: ["deportes", "fútbol", "multijugador"]
  },
  {
    id: 17,
    name: "Elden Ring",
    category: "juegos",
    brand: "FromSoftware",
    price: 49990,
    originalPrice: 69990,
    discount: 29,
    image: "/assets/images/elden.jpg",
    rating: 4.9,
    reviews: 6789,
    stock: 45,
    featured: true,
    isOffer: true,
    description: "RPG de acción de mundo abierto creado por FromSoftware y George R.R. Martin.",
    specs: ["Multiplataforma", "RPG/Acción", "Un jugador", "16+"],
    tags: ["rpg", "mundo abierto", "desafío"]
  },
  {
    id: 18,
    name: "Cyberpunk 2077 Ultimate Edition",
    category: "juegos",
    brand: "CD Projekt Red",
    price: 44990,
    originalPrice: 69990,
    discount: 36,
    image: "/assets/images/ciber.jpg",
    rating: 4.4,
    reviews: 3210,
    stock: 30,
    featured: false,
    isOffer: true,
    description: "RPG de acción en un mundo abierto futurista con la expansión Phantom Liberty.",
    specs: ["PC/Consolas", "RPG/Acción", "Un jugador", "18+"],
    tags: ["rpg", "ciencia ficción", "mundo abierto"]
  },
  {
    id: 19,
    name: "Resident Evil 4 Remake",
    category: "juegos",
    brand: "Capcom",
    price: 54990,
    originalPrice: 69990,
    discount: 21,
    image: "/assets/images/re.jpg",
    rating: 4.8,
    reviews: 2876,
    stock: 25,
    featured: true,
    isOffer: true,
    description: "El clásico del survival horror reimaginado con gráficos de última generación.",
    specs: ["Multiplataforma", "Survival Horror", "Un jugador", "18+"],
    tags: ["horror", "acción", "remake"]
  },
  {
    id: 20,
    name: "Starfield",
    category: "juegos",
    brand: "Bethesda",
    price: 64990,
    originalPrice: 69990,
    discount: 7,
    image: "/assets/images/star.jpg",
    rating: 4.2,
    reviews: 1987,
    stock: 40,
    featured: false,
    isOffer: false,
    description: "RPG espacial de Bethesda. Explora la última frontera de la humanidad.",
    specs: ["Xbox/PC", "RPG", "Un jugador", "16+"],
    tags: ["rpg", "espacio", "exploración"]
  }
];

// ================== EXPORTACIÓN DE DATOS ==================
export const productsData = productsDatabase;

// ================== CATEGORÍAS DISPONIBLES ==================
export const categories = [
  { id: 'consolas', name: 'Consolas', icon: '🎮' },
  { id: 'juegos', name: 'Juegos', icon: '🎯' },
  { id: 'accesorios', name: 'Accesorios', icon: '🎧' }
];

// ================== OPERACIONES CRUD ==================

// **CREATE** - Agregar nuevo producto
export const createProduct = (productData) => {
  const newProduct = {
    id: productsDatabase.length > 0 
      ? Math.max(...productsDatabase.map(p => p.id)) + 1 
      : 1,
    ...productData,
    rating: productData.rating || 0,
    reviews: productData.reviews || 0,
    featured: productData.featured || false,
    isOffer: productData.isOffer || false,
    discount: productData.discount || 0,
    stock: productData.stock || 0
  };
  
  productsDatabase.push(newProduct);
  return newProduct;
};

// **READ** - Obtener todos los productos
export const getAllProducts = () => {
  return [...productsDatabase];
};

// **READ** - Obtener producto por ID
export const getProductById = (id) => {
  return productsDatabase.find(product => product.id === parseInt(id));
};

// **UPDATE** - Actualizar producto existente
export const updateProduct = (id, updatedData) => {
  const index = productsDatabase.findIndex(product => product.id === parseInt(id));
  
  if (index === -1) {
    throw new Error(`Producto con ID ${id} no encontrado`);
  }
  
  productsDatabase[index] = {
    ...productsDatabase[index],
    ...updatedData,
    id: productsDatabase[index].id // Preservar ID original
  };
  
  return productsDatabase[index];
};

// **DELETE** - Eliminar producto
export const deleteProduct = (id) => {
  const index = productsDatabase.findIndex(product => product.id === parseInt(id));
  
  if (index === -1) {
    throw new Error(`Producto con ID ${id} no encontrado`);
  }
  
  const deletedProduct = productsDatabase.splice(index, 1)[0];
  return deletedProduct;
};

// **STOCK** - Actualizar stock de producto
export const updateStock = (id, quantity) => {
  const product = getProductById(id);
  
  if (!product) {
    throw new Error(`Producto con ID ${id} no encontrado`);
  }
  
  const newStock = product.stock + quantity;
  
  if (newStock < 0) {
    throw new Error('Stock insuficiente');
  }
  
  return updateProduct(id, { stock: newStock });
};

// **STOCK** - Verificar disponibilidad
export const checkAvailability = (id, quantity = 1) => {
  const product = getProductById(id);
  
  if (!product) {
    return { available: false, message: 'Producto no encontrado' };
  }
  
  if (product.stock < quantity) {
    return { 
      available: false, 
      message: `Stock insuficiente. Disponible: ${product.stock}`,
      stock: product.stock
    };
  }
  
  return { available: true, stock: product.stock };
};

// ================== FUNCIONES DE CONSULTA ==================

// Función para obtener productos destacados
export const getFeaturedProducts = () => {
  return productsDatabase.filter(product => product.featured);
};

// Función para obtener ofertas
export const getOffers = () => {
  return productsDatabase.filter(product => product.isOffer && product.discount > 0)
    .sort((a, b) => b.discount - a.discount); // Ordenar por descuento
};

// Función para obtener productos por categoría
export const getProductsByCategory = (category) => {
  return productsDatabase.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

// Función para buscar productos
export const searchProducts = (query) => {
  const lowerQuery = query.toLowerCase();
  return productsDatabase.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.brand.toLowerCase().includes(lowerQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

// **FILTROS AVANZADOS** - Filtrar por múltiples criterios
export const filterProducts = (filters = {}) => {
  let results = [...productsDatabase];
  
  // Filtrar por categoría
  if (filters.category) {
    results = results.filter(p => 
      p.category.toLowerCase() === filters.category.toLowerCase()
    );
  }
  
  // Filtrar por marca
  if (filters.brand) {
    results = results.filter(p => 
      p.brand.toLowerCase() === filters.brand.toLowerCase()
    );
  }
  
  // Filtrar por rango de precio
  if (filters.minPrice !== undefined) {
    results = results.filter(p => p.price >= filters.minPrice);
  }
  
  if (filters.maxPrice !== undefined) {
    results = results.filter(p => p.price <= filters.maxPrice);
  }
  
  // Filtrar solo ofertas
  if (filters.onlyOffers) {
    results = results.filter(p => p.isOffer && p.discount > 0);
  }
  
  // Filtrar solo destacados
  if (filters.onlyFeatured) {
    results = results.filter(p => p.featured);
  }
  
  // Filtrar por disponibilidad
  if (filters.inStock) {
    results = results.filter(p => p.stock > 0);
  }
  
  // Filtrar por rating mínimo
  if (filters.minRating) {
    results = results.filter(p => p.rating >= filters.minRating);
  }
  
  // Ordenar resultados
  if (filters.sortBy) {
    results = sortProducts(results, filters.sortBy, filters.sortOrder);
  }
  
  return results;
};

// **ORDENAMIENTO** - Ordenar productos
export const sortProducts = (products, sortBy = 'name', order = 'asc') => {
  const sorted = [...products];
  
  sorted.sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'price':
        comparison = a.price - b.price;
        break;
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'rating':
        comparison = b.rating - a.rating; // Mayor rating primero por defecto
        break;
      case 'discount':
        comparison = b.discount - a.discount; // Mayor descuento primero
        break;
      case 'newest':
        comparison = b.id - a.id; // Productos más nuevos primero
        break;
      default:
        comparison = 0;
    }
    
    return order === 'desc' ? -comparison : comparison;
  });
  
  return sorted;
};

// **ESTADÍSTICAS** - Obtener información general
export const getStatistics = () => {
  return {
    totalProducts: productsDatabase.length,
    totalStock: productsDatabase.reduce((sum, p) => sum + p.stock, 0),
    productsInStock: productsDatabase.filter(p => p.stock > 0).length,
    productsOutOfStock: productsDatabase.filter(p => p.stock === 0).length,
    totalOffers: productsDatabase.filter(p => p.isOffer).length,
    totalFeatured: productsDatabase.filter(p => p.featured).length,
    averagePrice: productsDatabase.reduce((sum, p) => sum + p.price, 0) / productsDatabase.length,
    categoriesCount: {
      consolas: productsDatabase.filter(p => p.category === 'consolas').length,
      juegos: productsDatabase.filter(p => p.category === 'juegos').length,
      accesorios: productsDatabase.filter(p => p.category === 'accesorios').length
    }
  };
};

// **MARCAS** - Obtener todas las marcas únicas
export const getAllBrands = () => {
  const brands = [...new Set(productsDatabase.map(p => p.brand))];
  return brands.sort();
};

// **PRECIO** - Obtener rango de precios
export const getPriceRange = () => {
  const prices = productsDatabase.map(p => p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};
