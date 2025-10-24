import { createBrowserRouter } from 'react-router'
import Root from './pages/root'
import { Home } from './pages/home'
import { Productos } from './pages/products'
import { Perfil } from './pages/user'
import { Login, Register } from './pages/auth'
import { Carrito } from './pages/cart'
import { Ayuda } from './pages/support'
import Error404 from './pages/Error404'
import { productsLoader } from './loaders/products'
import { homeLoader } from './loaders/home'
import { NewProduct } from './pages/products'
import ProtectedRoute from './components/ProtectedRoute'

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true, 
        Component: Home,
        loader: homeLoader,
      },
      {
        path: "productos",
        children: [
          {
            index: true,
            Component: Productos,
            loader: productsLoader,
          },
          {
            path: "nuevo",
            Component: NewProduct,
          },
          {
            path: ":id",
            Component: null,
            loader: null,
          }
        ]
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "registro",
        Component: Register,
      },
      {
        path: "perfil",
        element: (
          <ProtectedRoute>
            <Perfil />
          </ProtectedRoute>
        ),
      },
      {
        path: "carrito",
        Component: Carrito,
      },
      {
        path: "ayuda",
        Component: Ayuda,
      },
      {
        path: "*",
        Component: Error404,
      }
    ]
  }
])
