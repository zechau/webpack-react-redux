import * as types from './types';

let nextTodoId = 0;
export const addTodo = (text) => {
    return {
        type: types.ADD_TODO,
        id: nextTodoId++,
        text
    };
};

export const setVisibilityFilter = (filter) => {
    return {
        type: types.SET_VISIBILITY_FILTER,
        filter
    };
};

export const toggleTodo = (id) => {
    return {
        type: types.TOGGLE_TODO,
        id
    };
};
