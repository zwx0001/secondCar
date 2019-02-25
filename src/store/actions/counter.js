import { createAction } from 'redux-actions'
import { GET_DATA, UP_DATA } from '../types/counter'
export const getdata = createAction(GET_DATA, (state, p = 1) => {
    let data = {
        page_size: 10,
        p: p
    }
    let params = {...state, ...data };
    return new Promise(resolve => {
        wx.request({
            url: 'https://car.yccapp.com/Wxapp/Question/index',
            data: params,
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                resolve(res.data.data);
            }
        })
    })
})
export const updata = createAction(UP_DATA)