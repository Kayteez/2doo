import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '~/pages/dashboard'
import Home from '~/pages/home'

export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])
