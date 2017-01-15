/**
 * Created by yongyuehuang on 2017/1/15.
 */
const initState = {
    navMain: [],
    bookDetails: []
}

export const home = (state = initState, action) => {
    switch (action.type) {
        case 'RECEIVE_NAV':
            console.log("RECEIVE_NAV： ", action.navMain)
            return {
                ...state,   //三个点是展开符
                navMain: action.navMain
            }
        case 'RECEIVE_BOOK':
            return {
                ...state,
                bookDetails: action.bookDetails
            }
        default:
            return state;
    }
}