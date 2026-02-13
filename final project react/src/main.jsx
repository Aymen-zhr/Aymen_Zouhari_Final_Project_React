import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/home/index'
import Shop from './pages/shop/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
