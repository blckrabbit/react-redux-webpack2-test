/**
 * Created by yongyuehuang on 2017/1/15.
 */
let initData = {
    hotData: []
}

export function search(state = initData, action) {
    switch (action.type) {
        case 'RECEIVE_HOT_TAG':
            return {
                ...state,
                hotData: action.hotData
            }

        default:
            return state;
    }
}