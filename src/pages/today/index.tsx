import ImagePlanToday from '~/assets/images/svg/nay-chien-plan-gi.svg'
import ScheduleSVG from '~/components/icons/schedule'
import PrioritySVG from '~/components/icons/priority'
import LocationSVG from '~/components/icons/location'
import RemindSVG from '~/components/icons/remind'
import TagSVG from '~/components/icons/tag'
import FlagSVG from '~/components/icons/flag'
import ArrowDown from '~/assets/images/svg/arrow-down.svg'
import NewTask from '~/assets/images/svg/new-task.svg'
import { Checkbox, Dropdown, Menu, MenuProps, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const fakeTasks = [
  { title: 'Một ly nước sáng, sảng khoái x2', icons: ['remind'] },
  { title: 'Đem giày đi giặt', icons: ['location', 'remind'] },
  { title: 'Mini test 30%', icons: ['remind'] },
  { title: 'Online meeting 14:30', icons: ['priority', 'flag'] },
  { title: 'Gửi proposal cho sponsor', icons: ['remind'] },
  { title: 'Hủy gói cước', icons: ['priority', 'flag'] }
]

const Today = () => {
  const navigate = useNavigate()
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [tasks, setTasks] = useState<{ title: string; icons: string[] }[]>(fakeTasks)
  const [inputValue, setInputValue] = useState('')

  const getIcon = (name: string) => {
    switch (name) {
      case 'schedule':
        return <ScheduleSVG />
      case 'priority':
        return <PrioritySVG />
      case 'location':
        return <LocationSVG />
      case 'remind':
        return <RemindSVG />
      case 'tag':
        return <TagSVG />
      case 'flag':
        return <FlagSVG />
      default:
        return <></>
    }
  }

  const sortByItems: MenuProps['items'] = [
    {
      key: '1',
      label: <p>Tên</p>
    },
    {
      key: '2',
      label: <p>Thời gian nhập</p>
    },
    {
      key: '3',
      label: <p>Độ ưu tiên</p>
    },
    {
      key: '4',
      label: <p>Thời hạn</p>
    }
  ]

  const displayItems = [
    {
      key: '1',
      label: <p>Bình thường</p>
    },
    {
      key: '2',
      label: <p>Độ ưu tiên</p>
    },
    {
      key: '3',
      label: <p>Thời hạn</p>
    },
    {
      key: '4',
      label: <p>Địa điểm</p>
    },
    {
      key: '5',
      label: <p>Nhắc nhở</p>
    },
    {
      key: '6',
      label: <p>Gắn thẻ</p>
    }
  ]

  const onChange = (checkedValues: any) => {
    setSelectedOptions(checkedValues)
  }

  const menu = (
    <Menu>
      <Checkbox.Group onChange={onChange} value={selectedOptions} className='block'>
        {displayItems.map((item) => (
          <Menu.Item key={item.key}>
            <Checkbox value={item.key}>{item.label}</Checkbox>
          </Menu.Item>
        ))}
      </Checkbox.Group>
    </Menu>
  )

  return (
    <div className='py-10 h-full'>
      <img src={ImagePlanToday} />

      <div className='mt-10 p-4'>
        <div className='flex justify-between items-center mb-4'>
          <Dropdown menu={{ items: sortByItems, selectable: true }}>
            <Space size='small'>
              <img src={ArrowDown} />
              <p className='font-medium text-gray-500'>Sắp xếp theo</p>
            </Space>
          </Dropdown>
          <Dropdown overlay={menu} trigger={['click']}>
            <Space size='small'>
              <p className='font-medium text-gray-500'>Chọn hiển thị</p>
              <img src={ArrowDown} />
            </Space>
          </Dropdown>
        </div>
        <div className='space-y-2'>
          {tasks.map((task, index) => (
            <div key={index} className='flex items-center p-2 bg-white rounded-lg'>
              <label className='flex items-center cursor-pointer w-full'>
                <input type='checkbox' className='hidden peer' />
                <div className='w-6 h-6 mr-3 border-2 border-2doo-blue rounded flex items-center justify-center peer-checked:bg-2doo-blue'>
                  <svg
                    className='w-5 h-5 text-white peer-checked:block'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='M5 13l4 4L19 7' />
                  </svg>
                </div>
                <span className='flex-1 font-semibold text-lg'>{task.title}</span>
                <span className='ml-2 text-xl flex gap-1 items-center'>
                  {task.icons.map((icon) => {
                    return <span key={icon}>{getIcon(icon)}</span>
                  })}
                </span>
              </label>
            </div>
          ))}
          <div className='flex items-center p-2 bg-white rounded-lg'>
            <label className='flex items-center cursor-pointer'>
              <input disabled type='checkbox' className='hidden peer' />
              <div className='w-6 h-6 mr-3 border-2 border-2doo-blue rounded peer-checked:bg-2doo-blue flex items-center justify-center'>
                <svg
                  className='w-5 h-5 text-white peer-checked:block'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='M5 13l4 4L19 7' />
                </svg>
              </div>
            </label>
            <input
              type='text'
              onKeyDown={(e) => {
                // hit enter to add new task
                if (e.key === 'Enter') {
                  setTasks((prev) => [...prev, { title: e.currentTarget.value, icons: [] }])
                  setInputValue('')
                }
              }}
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              placeholder='Nhập thêm...'
              className='flex-1 border-none outline-none text-lg'
            />
          </div>
        </div>
      </div>

      <div className='absolute right-5 bottom-40 cursor-pointer'>
        <img
          src={NewTask}
          onClick={() => {
            navigate('/make-a-plan')
          }}
        />
      </div>
    </div>
  )
}

export default Today
