import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '~/pages/dashboard'
import Home from '~/pages/home'
import Introduce from '~/pages/introduce'

export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/introduce',
    element: <Introduce />
  }
])
