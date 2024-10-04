import { createBrowserRouter } from 'react-router-dom'
import Layout from '~/components/layout'
import Dashboard from '~/pages/dashboard'
import Home from '~/pages/home'
import Login from '~/pages/login'
import PlanInWeek from '~/pages/planInWeek'

export const Routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  },
  {
    path: '/dashboard',
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    )
  },
  {
    path: '/plan-in-week',
    element: (
      <Layout showAppbar={true}>
        <PlanInWeek />
      </Layout>
    )
  },
  {
    path: '/login',
    element: <Login />
  }
])
