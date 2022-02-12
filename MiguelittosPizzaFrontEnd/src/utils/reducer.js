export default function reducer(state, action) {
    switch(action.type) {
        case 'setCart': {
            return {
                ...state,
                cart: action.data
            }
        }
        default: return state
    }

}