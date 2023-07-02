import {SET_PHONG_VE} from './types/PhongVeType';
import data from './../data/danhSachGhe.json';
const stateDefauft = {
    thongTinNguoiDung: {
        email: 'thailehoangbao@gmail.com',
        username: 'ThaiBao1994',
        phoneNumber: 901307303
    },
    thongTinPhim : {
        tenPhim : 'Avenger Cuộc Chiến Vô Cực',
        tenRap: 'CGV Đồng Khởi',
        diaChi: 'Đồng Khởi , Quận 1 , TPHCM',
        ngayChieu: '20/06/2023',
        gioChieu: '23h00:00'
    },
    danhSachPhongVe : data,
    danhSachGheDuocChon: []
}

export const PhongVeReducer = ( state = stateDefauft , action ) => {
    switch (action.type) {
        case SET_PHONG_VE: {
            let danhSachGheClone = [...state.danhSachGheDuocChon];
            const index = danhSachGheClone.findIndex(gheDD => gheDD.soGhe === action.gheChon.soGhe);
            if (index !== -1) {
                danhSachGheClone.splice(index, 1);

            } else {
                danhSachGheClone.push(action.gheChon);
            };

            state.danhSachGheDuocChon = danhSachGheClone;
            console.log(danhSachGheClone,'danhSachGheDuocChon');
            return {...state};
        };
            
            
    
        default: return {...state};

    }
}