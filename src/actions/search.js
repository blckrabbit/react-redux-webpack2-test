/**
 * Created by yongyuehuang on 2017/1/15.
 */
import { hotData } from 'data/search'

// action是一个纯对象，不要觉得它是一个函数，要看return回来的其实就是一个object
const receiveHotTag = (hotData) => ({
    type: 'RECEIVE_HOT_TAG',
    hotData
})

export const hotTag = () => async (dispatch, getState) => {
    try {
        let hot = hotData
        await dispatch(receiveHotTag(hot))
    } catch (error) {
        console.log('error: ', error)
    }
}