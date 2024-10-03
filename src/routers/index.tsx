import { RouterProvider } from 'react-router-dom'
import { Routes } from './RouterConfig'
import Layout from '~/components/layout'

export default function AppRoute() {
  return (
    <Layout>
      <RouterProvider router={Routes} />
    </Layout>
  )
}
