import BottomBar from './bottom-bar'
import IconBell from '~/assets/images/svg/bell.svg'
import IconBar from '~/assets/images/svg/bar.svg'
import IconSearch from '~/assets/images/svg/search.svg'

export default function Layout({ children, showAppbar = false }: { children: React.ReactNode; showAppbar?: boolean }) {
  return (
    <div className='h-screen relative'>
      {showAppbar && (
        <div className='flex bg-white items-center justify-between h-[80px] px-4 mb-6 shadow fixed top-0 left-0 w-full z-20'>
          <div className='flex gap-2'>
            <img src={IconBell} alt='' />
            <img src={IconSearch} alt='' />
          </div>
          <img src={IconBar} alt='' />
        </div>
      )}
      <div className={`relative h-full pb-[80px] z-10 px-4  ${showAppbar ? 'mt-[100px]' : 'mt-4'}`}>{children}</div>
      <div className='fixed bottom-0 w-full px-4 h-[80px] z-20 py-2 bg-white flex items-center shadow-md'>
        <div className='w-full bg-white'>
          <BottomBar />
        </div>
      </div>
    </div>
  )
}
