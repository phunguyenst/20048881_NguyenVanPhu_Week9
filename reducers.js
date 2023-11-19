const initialState = {
    todos: [
        {id:1, name: 'Learn React Native', isComplete: true},
        {id:2, name: 'Learn Redux', isComplete: true},
    ],
}

const rootReducer = (state = initialState, action) => {

    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
            }
        case 'SEARCH_TODO':
            return{
                ...state,
                search: action.payload,
            }
        default:
            return state;

    }
};
export default rootReducer;