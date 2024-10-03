import { DatePicker, DatePickerProps, message, Select } from 'antd'
import ImgIntroduce from '~/assets/images/png/img-introduce.png'
import './style.css'
import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { setLocalStorage } from '~/utils'
import { useNavigate } from 'react-router-dom'

const reasonList = [
  {
    key: 'personal',
    label: 'Cá nhân'
  },
  {
    key: 'work',
    label: 'Làm việc'
  },
  {
    key: 'study',
    label: 'Học tập'
  }
]

interface IForm {
  name: string
  gender?: string
  birthday?: string
  reason: string
}

const Introduce = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState<IForm>({
    name: '',
    gender: 'male',
    birthday: '',
    reason: ''
  })

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
    setForm({
      ...form,
      birthday: (dateString as string) ?? ''
    })
  }

  const onSubmit = () => {
    if (!form.birthday || !form.gender || !form.name || !form.reason) {
      message.warning('Vui lòng nhập đầy đủ thông tin!')
      return
    }
    setLocalStorage('user', form)
    navigate('/')
  }

  const disabledDate = (current: Dayjs | null): boolean => {
    return !!current && current > dayjs().endOf('day')
  }

  return (
    <div className='p-6'>
      <div className='flex items-center gap-8 mt-12'>
        <img className='sm:w-full w-[35%]' src={ImgIntroduce} alt='' />
        <textarea
          onChange={(e) => {
            setForm({
              ...form,
              name: e.target.value
            })
          }}
          name=''
          id=''
          placeholder='Tên của bạn là gì'
          className='w-full text-3xl sm:text-4xl outline-none'
        ></textarea>
      </div>

      <div className='mt-8 flex items-start justify-between'>
        <div className='max-w-[100px]'>
          <span className='uppercase text-xs font-semibold block text-center mb-1'>Giới tính</span>
          <Select
            className='uppercase w-[100px] introduce-custom'
            size='middle'
            defaultValue='male'
            onChange={(data) => {
              setForm({
                ...form,
                gender: data
              })
            }}
            options={[
              {
                value: 'male',
                label: 'Nam'
              },
              {
                value: 'female',
                label: 'Nữ'
              }
            ]}
          />
        </div>

        <div className='max-w-[130px]'>
          <span className='uppercase text-xs font-semibold block text-center mb-1'>Ngày sinh</span>
          <DatePicker
            disabledDate={disabledDate}
            className='introduce-custom-date'
            onChange={onChange}
            placeholder='Chọn ngày'
            format={'DD/MM/YYYY'}
          />
        </div>
      </div>

      <div className='mt-12'>
        <h4 className='text-center text-2xl font-semibold uppercase'>Nhu cầu sử dụng cho</h4>
        <div className='mt-6'>
          {reasonList?.map((item) => {
            return (
              <div
                onClick={() => {
                  setForm({
                    ...form,
                    reason: item.key
                  })
                }}
                className={`uppercase rounded-3xl my-4 border border-2doo-blue font-semibold w-full text-xl p-4 text-center ${
                  form.reason === item.key ? 'bg-2doo-blue text-white' : 'bg-white text-black'
                }`}
                key={item.key}
              >
                {item.label}
              </div>
            )
          })}
        </div>
      </div>

      <div className='text-center mt-10'>
        <button onClick={onSubmit} className='custom-button'>
          Vào thôi
        </button>
      </div>
    </div>
  )
}

export default Introduce
