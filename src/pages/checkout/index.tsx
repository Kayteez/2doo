import { useNavigate } from 'react-router-dom'
import QRCode from '../../assets/images/png/qr-code.png'

export default function Checkout() {
  const navigate = useNavigate()
  return (
    <div className='bg-ocean h-screen bg-cover bg-no-repeat'>
      <div className='flex flex-col items-center justify-end h-full gap-5'>
        <img src={QRCode} alt='QR-code' width={250} />
        <div className='relative p-4 mx-4 mb-20'>
          <div className='relative z-50'>
            <div className='flex z-50 relative justify-center items-center gap-2'>
              <div className='p-4 bg-white flex flex-col justify-center items-center rounded-lg'>
                <p className='text-2doo-pink uppercase'>1 tháng</p>
                <p className='font-bold text-2doo-blue uppercase'>89.000VND</p>
              </div>
              <div className='p-4 bg-white flex flex-col justify-center items-center rounded-lg'>
                <p className='text-2doo-pink uppercase'>3 tháng</p>
                <p className='font-bold text-2doo-blue uppercase'>240.300VND</p>
              </div>
              <div className='p-4 bg-white flex flex-col justify-center items-center rounded-lg'>
                <p className='text-2doo-pink uppercase'>6 tháng</p>
                <p className='font-bold text-2doo-blue uppercase'>453.900VND</p>
              </div>
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
              <button className='uppercase text-starbucks-white bg-2doo-pink w-full rounded-full p-2'>
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
  )
}
