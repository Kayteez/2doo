import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TodaySVG from './icons/today'
import WeekSVG from './icons/week'
import MonthSVG from './icons/month'
import OceanSVG from './icons/ocean'
import AccountSVG from './icons/account'

export default function BottomBar() {
  const [active, setActive] = useState('Hôm nay')
  const navigate = useNavigate()
  const items = [
    {
      icon: <TodaySVG />,
      text: 'Hôm nay',
      url: '/today'
    },
    {
      icon: <WeekSVG />,
      text: 'Trong tuần',
      url: '/plan-in-week'
    },
    {
      icon: <MonthSVG />,
      text: 'Trong tháng',
      url: '/plan-in-month'
    },
    {
      icon: <OceanSVG />,
      text: 'Đại dương',
      url: '/ocean'
    },
    {
      icon: <AccountSVG />,
      text: 'Tài khoản',
      url: '/account'
    }
  ]

  console.log('active', active)

  return (
    <div className='flex justify-around bg-2doo-blue rounded-full'>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className='flex justify-center items-center p-2 cursor-pointer gap-2'
            onClick={() => {
              setActive(item.text)
              navigate(item.url)
            }}
          >
            <p className={`${active === item.text ? 'bg-2doo-pink' : ''} text-starbucks-white rounded-full p-1`}>
              {item.icon}
            </p>
            <p
              className={`${
                active !== item.text ? 'absolute' : ''
              } text-starbucks-white text-lg transition-all duration-300 ease-in-out transform cursor-not-allowed ${
                active === item.text ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              {item.text}
            </p>
          </div>
        )
      })}
    </div>
  )
}
