
const initialState = {
    books: [],
    loading: false,
    request: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'book/request':
            return { ...state, loading: true };
        case 'book/success':
            return { ...state, books: action.data, loading: false };
        default:
            return state;
    }
}