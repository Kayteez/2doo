import { PropsWithChildren } from 'react'
import BottomBar from './bottom-bar'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='h-screen relative'>
      {children}
      <div className='absolute bottom-2 w-full px-4'>
        <BottomBar />
      </div>
    </div>
  )
}
