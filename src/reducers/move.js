import { UP, DOWN, LEFT, RIGHT, RESET } from '../actions'

const initialState = { x: 0, y: 0}

export default (state = initialState, action) => {
    switch(action.type){
        case UP:
            return {x: state.x, y: state.y + 1}
        case DOWN:
            return {x: state.x, y: state.y - 1}
        case LEFT:
            return {x: state.x - 1, y: state.y}
        case RIGHT:
            return {x: state.x + 1, y: state.y}
        case RESET:
            return initialState
        default:
            return state
    }
}