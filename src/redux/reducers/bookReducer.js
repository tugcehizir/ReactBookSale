
const initialState = {
    books: [],
    request: false,
    favoriteList: [{ title: "", img: "" }]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'book/request':
            return { ...state };
        case 'book/success':
            return { ...state, books: action.data };
        case 'fav':
            const { favoriteList } = state;
            favoriteList.push({ title: action.data.title, img: action.data.imageLinks.smallThumbnail })
            return { ...state, favoriteList };
        default:
            return state;
    }
}