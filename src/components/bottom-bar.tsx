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
      url: '/'
    },
    {
      icon: <WeekSVG />,
      text: 'Trong tuần',
      url: '/plan-in-week'
    },
    {
      icon: <MonthSVG />,
      text: 'Trong tháng',
      url: '/'
    },
    {
      icon: <OceanSVG />,
      text: 'Đại dương',
      url: '/'
    },
    {
      icon: <AccountSVG />,
      text: 'Tài khoản',
      url: '/'
    }
  ]
  return (
    <div className='flex justify-around bg-2doo-blue rounded-full'>
      {items.map((item) => {
        return (
          <div
            key={item.text}
            onClick={() => {
              setActive(item.text)
              navigate(item.url)
            }}
            className='flex justify-center items-center p-2 cursor-pointer gap-2'
          >
            <p className={`${active === item.text ? 'bg-2doo-pink' : ''} text-starbucks-white rounded-full p-1`}>
              {item.icon}
            </p>
            <p className={`text-starbucks-white ${active !== item.text ? 'hidden' : ''} text-lg`}>{item.text}</p>
          </div>
        )
      })}
    </div>
  )
}
