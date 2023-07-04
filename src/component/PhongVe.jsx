import React from 'react';
import '../assets/style/BaiTapBookingTicket.css';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PHONG_VE } from '../redux/reducer/types/PhongVeType';

export default function PhongVe() {
    const dispatch =useDispatch();
    const { danhSachPhongVe,danhSachGheDuocChon,thongTinNguoiDung,thongTinPhim} = useSelector(state => state.PhongVeReducer);
    console.log("danhSachPhongVe",danhSachPhongVe);
    const renderSeats = () => {
        return danhSachPhongVe.map((hangGhe,index)=> {
            return ( 
                <div key={index}>
                    <span className='rowNumber'>{hangGhe.hang}</span>
                    {hangGhe.danhSachGhe.map((ghe,index) => {
                        let classDaDat = ghe.daDat === true ? 'gheDuocChon' : '';
                        let classDangChon = '';
                        let indexGheDangChon = danhSachGheDuocChon.findIndex( seat => seat.soGhe === ghe.soGhe );
                        if (indexGheDangChon !== -1) {
                            classDangChon = 'gheDangChon'
                        }
                        return (<button onClick={() => {
                            dispatch({
                                type: SET_PHONG_VE,
                                gheChon: ghe
                            })
                        }} disabled={ghe.daDat === true ? true : false} key={index} className={`text-black ghe ${classDaDat} ${classDangChon} ticketAction`}>{ghe.soGhe}</button>)
                    })}
                </div>
            )
        })
    }


    return (
        <div className='min-h-screen p-0'>
            <div className='grid grid-cols-12'>
                <div className='col-span-9 col-start-1'>
                    <div className='mt-5 w-full'>
                        <div className='screen w-full'>
                        <div className='text-center text-red-700'>MÀN HÌNH</div>
                        </div>
                        
                        {/* <div className='bg-black' style={{ height: "8px", width: "98%" }}>

                        </div>
                        <div className={`hinh_thang text-center`}>
                            <h3 className='text-red-700'>Màn Hình</h3>
                        </div>
                        <div className='container'>
                            
                        </div> */}
                        <div className='w-full'>
                            {renderSeats()}
                        </div>
                    </div>
                </div>
                <div className='col-span-3 mt-20'>
                    <hr />
                    <h3 className='text-2xl text-center text-red-600 py-2'>{thongTinPhim.tenPhim}</h3>
                    <p className='p-2'>Tên Rạp : {thongTinPhim.tenRap}</p>
                    <p className='p-2'>Địa chỉ : {thongTinPhim.diaChi}</p>
                    <p className='p-2'>Ngày chiếu : {thongTinPhim.ngayChieu}</p>
                    <p className='p-2'>Giờ Chiếu {thongTinPhim.gioChieu}</p>
                    <hr />
                    <div className='w-full py-2'>
                        <div className='flex flex-wrap'>
                            <span className='text-red-600 pt-4'>Ghế : </span>
                            {danhSachGheDuocChon.map((ghe,i) => {
                                return <span key={i} className='ghe gheDangChon flex justify-center items-center ticketAction'>{ghe.soGhe}</span>
                            })}
                        </div>
                    </div>
                    <hr />
                    <div className='text-left py-2'>
                        <span className='text-red-600 mr-2'>Tổng Tiền : {danhSachGheDuocChon.reduce((sum,ghe,i) => {
                            return sum += ghe.gia
                        },0).toLocaleString("vi-VN", { style: "currency", currency: "VND" }) }</span>
                        <span className='text-lg text-green-500'></span>
                    </div>
                    <hr />
                    <div className='my-4'>Email:  {thongTinNguoiDung.email}</div>
                    <div className='my-4'>SDT:  +84{thongTinNguoiDung.phoneNumber}</div>
                    <hr />
                    <div className='flex flex-col justify-end mb-5 items-center'>
                        <button className='text-white w-full py-2 rounded-lg buttonAction mr-10' >
                            ĐẶT VÉ
                        </button>
                    </div>
                    <hr />
                    <div className='grid grid-cols-3'>
                        <div>
                            <p className='ghe gheDuocChon '></p>
                            <p className='font-thin text-left text-xs'>Ghế Được Chọn</p>
                        </div>
                        <div>
                            <p className='ghe gheDangChon' style={{backgroundColor:"white"}}></p>
                            <p className='font-thin text-left text-xs'>Ghế Đang Chọn</p>
                        </div>
                        <div>
                            <p className='ghe' style={{height:"35px"}}></p>
                            <p className='font-thin text-left text-xs'>Ghế Chưa Chọn</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
