/**
 * Created by yongyuehuang on 2017/1/15.
 */
import { getData, postData } from 'utils/fetchData'
import { nav, book } from 'data/home'

//这个叫做action，用于更新reduer中的state
const receiveNav = (response) => ({
    type: 'RECEIVE_NAV',
    navMain: response
})

//获取服务器的参数，并且返回一个异步的dispatch，dispatch的对象是自己定义的action
export const getNav = () => async (dispatch, getState) => {
    try {
        let response = await getData(`/book/navigation`)
        await dispatch(receiveNav(response.data))
    } catch (error) {
        await dispatch(receiveNav(nav))
        console.log('error: ', error)
    }
}

const receiveBook = (response) => ({
    type: 'RECEIVE_BOOK',
    bookDetails: response
})

export const getBook = () => async (dispatch, getState) => {
    try {
        let response = await getData(`/book/list`)
        await dispatch(receiveBook(response.data))
    } catch (error) {
        await dispatch(receiveBook(book))
        console.log('error: ', error)
    }
}