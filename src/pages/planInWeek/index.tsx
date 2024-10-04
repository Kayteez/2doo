import { DatePicker, DatePickerProps } from 'antd'
import { useEffect, useRef, useState } from 'react'
import ImagePlanInWeek from '~/assets/images/png/banner-plan-week.svg'
import dayjs, { Dayjs } from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale'
import { DownCircleFilled } from '@ant-design/icons'

dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
  weekStart: 1
})
import './style.css'

const title: Record<number, string> = {
  0: 'Thứ hai',
  1: 'Thứ ba',
  2: 'Thứ tư',
  3: 'Thứ năm',
  4: 'Thứ sáu',
  5: 'Thứ bảy',
  6: 'Chủ nhật'
}

const content = [
  {
    time: '10:00',
    job: 'Mini test 30%'
  },
  {
    time: '14:30',
    job: 'Online Meeting'
  },
  {
    time: '17:00 - 18:00',
    job: 'Vệ sinh laptop'
  },
  {
    time: '21:00 - 22:00',
    job: 'Vệ sinh laptop'
  }
]

const PlanInWeekItem = ({ index, item }: { index: number; item: string }) => {
  const rightContentRef = useRef<HTMLDivElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const [line, setLine] = useState({
    top: 0,
    height: 0
  })

  useEffect(() => {
    if (!rightContentRef?.current || !leftContentRef?.current) return
    const right = rightContentRef?.current
    const left = leftContentRef?.current
    let height = left?.clientHeight / 2 - 20
    if (right.clientHeight > left?.clientHeight) {
      height = right?.clientHeight - left?.clientHeight
    }
    setLine({
      top: Number(left?.clientHeight ?? 0) + 16,
      height: Number(height ?? 0)
    })
  }, [rightContentRef, leftContentRef])

  return (
    <div className='flex gap-4 flex-wrap mb-12 items-start relative'>
      {index !== 6 && (
        <div
          className='w-[2px] absolute bg-black left-7 line-custom'
          style={{
            height: line.height,
            top: line.top
          }}
        ></div>
      )}
      <div className='w-[64px] text-center' ref={leftContentRef}>
        <p
          className={`text-2xl leading-[30px] uppercase font-bold ${
            index % 2 === 0 ? 'text-2doo-blue' : 'text-2doo-pink'
          }`}
        >
          {title[index]}
        </p>
        <p className='text-xs font-semibold mt-2'>{item}</p>
      </div>
      <div className='w-[calc(100%_-_80px)]' ref={rightContentRef}>
        {content?.map((item, childIndex) => {
          const color = index === 0 ? '2doo-blue' : '2doo-pink'
          return (
            <div
              className={`flex gap-1 rounded-md p-2 w-full mb-2 ${
                childIndex % 2 === 0 ? `bg-${color} text-white` : `border border-${color}`
              }`}
            >
              <b>{item?.time}</b> <span>|</span>
              <span>{item?.job}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const PlanInWeek = () => {
  const [datesInWeek, setDatesInWeek] = useState<string[]>([])

  const onChange: DatePickerProps['onChange'] = (date: Dayjs | null) => {
    if (date) {
      const startOfWeek = date.startOf('week')
      const daysInWeek = []
      for (let i = 0; i < 7; i++) {
        daysInWeek.push(startOfWeek.add(i, 'day').format('DD/MM/YYYY'))
      }
      setDatesInWeek(daysInWeek)
    }
  }

  return (
    <div>
      <div className='text-center my-3'>
        <img src={ImagePlanInWeek} alt='' className='m-auto' />
      </div>
      <div className='flex gap-2 items-center'>
        <b>Tuần: </b>
        <div className='relative flex items-center gap-1'>
          <div className={`${datesInWeek?.length === 7 ? 'text-black' : 'text-gray-40'}`}>
            {datesInWeek?.length === 7 ? `${datesInWeek[0]} - ${datesInWeek[6]}` : 'DD/MM/YYYY - DD/MM/YYYY'}
          </div>
          <DownCircleFilled className='text-blue-500' />
          <DatePicker className='date-week opacity-0 absolute w-full top-0 left-0' onChange={onChange} picker='week' />
        </div>
      </div>
      <div className='mt-8'>
        {datesInWeek?.map((item, index) => {
          return <PlanInWeekItem item={item} index={index} key={item} />
        })}
      </div>
    </div>
  )
}

export default PlanInWeek
