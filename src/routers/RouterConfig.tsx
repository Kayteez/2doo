import { createBrowserRouter } from 'react-router-dom'
import Layout from '~/components/layout'
import Dashboard from '~/pages/dashboard'
import Login from '~/pages/login'
import PlanInWeek from '~/pages/planInWeek'
import Today from '~/pages/today'

export const Routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Today />
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
