import { useNavigate } from 'react-router-dom'
import QRCode from '../../assets/images/png/qr-code.png'
import { useState } from 'react'
import { Modal } from 'antd'

export default function Checkout() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('-1')
  const listPrices = [
    {
      key: '1',
      title: '1 tháng',
      price: '89.000VND'
    },
    {
      key: '2',
      title: '3 tháng',
      price: '240.300VND'
    },
    {
      key: '3',
      title: '6 tháng',
      price: '453.900VND'
    }
  ]
  return (
    <>
      <div className='bg-ocean h-screen bg-cover bg-no-repeat'>
        <div className='flex flex-col items-center justify-end h-full gap-5'>
          <div className='relative p-4 mx-4 mb-40'>
            <div className='relative z-50'>
              <div className='flex z-50 relative justify-center items-center gap-2'>
                {listPrices.map((item) => (
                  <div
                    className={`p-4 bg-white flex flex-col justify-center items-center rounded-lg border border-2 ${active === item.key ? 'border-2doo-pink' : 'border-white'}`}
                    onClick={() => {
                      setActive(item.key)
                      setOpen(true)
                    }}
                  >
                    <p className='text-2doo-pink uppercase'>{item.title}</p>
                    <p className='font-bold text-2doo-blue uppercase'>{item.price}</p>
                  </div>
                ))}
              </div>
              <div className='p-2 relative z-50 mt-5 font-bold text-starbucks-white flex flex-col gap-2'>
                <p>MỞ KHOÁ ĐẠI DƯƠNG 2DOO SẶC SỠ</p>
                <div>
                  <p>CHIẾN PLAN LÀNH, TRÁI TIM XANH</p>
                  <p>Hoàn thành task gây quỹ cho đại dương</p>
                </div>
                <p>NHẬN ĐỦ BÁO CÁO CHO TUẦN VÀ THÁNG</p>
                <p>ĐỔI XU ĐỒNG HÀNH CÙNG ĐẠI DƯƠNG XANH</p>
              </div>
              <div className='flex flex-col gap-4 mt-5'>
                <button
                  className='uppercase text-starbucks-white bg-2doo-pink w-full rounded-full p-2'
                  onClick={() => navigate('/ocean')}
                >
                  upgrade plan
                </button>
                <button
                  className='uppercase bg-white text-2doo-pink w-full rounded-full p-2'
                  onClick={() => navigate('/today')}
                >
                  not now
                </button>
              </div>
            </div>
            <div className='absolute top-0 left-0 bg-black opacity-20 w-full h-full rounded-xl'></div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        className='flex justify-center items-center'
        footer={false}
        onCancel={() => {
          setOpen(false)
        }}
      >
        <img className='mx-5' src={QRCode} alt='QR-code' width={250} />
      </Modal>
    </>
  )
}
