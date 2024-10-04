import React from 'react'
import { Navigate } from 'react-router-dom'
import { getLocalStorage } from '~/utils'

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = getLocalStorage('user')
  if (!user) {
    return <Navigate replace to='/login' />
  }

  return children
}
