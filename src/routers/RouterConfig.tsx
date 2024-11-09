import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from '~/components/layout'
import Checkout from '~/pages/checkout'
import Login from '~/pages/login'
import MakePlan from '~/pages/make-a-plan'
import PlanInWeek from '~/pages/planInWeek'
import Today from '~/pages/today'

export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='today' replace />
  },
  {
    path: '/today',
    element: (
      <Layout>
        <Today />
      </Layout>
    )
  },
  {
    path: 'make-a-plan',
    element: (
      <Layout>
        <MakePlan />
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
    path: '/plan-in-month',
    element: <Layout showAppbar={true}>Plan in month</Layout>
  },
  {
    path: '/ocean',
    element: <Checkout />
  },
  {
    path: '/account',
    element: <Layout>account</Layout>
  },
  {
    path: '/login',
    element: <Login />
  }
])
