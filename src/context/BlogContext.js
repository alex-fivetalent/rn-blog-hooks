import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    const {type, payload} = action
    switch(type) {
        case 'add_blogpost':
            return [...state, {id: Math.floor(Math.random() * 99999 ), title: payload.title, content: payload.content}];
        case 'delete_blogpost':
            return state.filter( item => item.id !== payload)
        case 'update_blogpost':
            return state.map(item => {
                if (item.id === payload.id){
                    return payload
                }
                return item
            })
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return (title, content, callBack) => {
        dispatch({ type: 'add_blogpost', payload: {title, content}});
        if (callBack) callBack();
    }
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    }
}

const updateBlogPost = dispatch => {
    return (id, title, content, callBack) => {
        dispatch({ type: 'update_blogpost', payload: {id, title, content}});
        if (callBack) callBack();
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, updateBlogPost }, [{id: 1, title: "Test Post", content: "test post content"}] );