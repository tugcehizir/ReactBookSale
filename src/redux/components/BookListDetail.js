import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter, Link, useHistory } from 'react-router-dom'

const BookListDetail = ({ location }) => {
    const bookList = useSelector(state => state.app.books);
    const dispatch = useDispatch();
    const history = useHistory();

    const selectedBook = bookList.filter(item => {
        if (item.id === location.state.bookId) {
            return true;
        }
        return false;
    });

    if (selectedBook.length <= 0) {
        return <Link to="/">Anasayfaya dön!</Link>
    }
    const _onClick = id => {
        dispatch({ type: 'fav', data: id })
        history.push({ pathname: '/fav' });
    }
    return (
        <div>
            <img src={selectedBook[0].volumeInfo.imageLinks.smallThumbnail} width="130px" height="200px" alt="foto"></img>
            <br />
            <span>Kitap ismi:{selectedBook[0].volumeInfo.title}</span>
            <br />
            <span>Yazar ismi:{selectedBook[0].volumeInfo.authors[0]}</span>
            <br />
            <span>Kategori: {selectedBook[0].volumeInfo.categories}</span>
            <br />
            <button onClick={() => _onClick(selectedBook[0].volumeInfo)}>Favorilere ekle!</button>
        </div>
    );
}

export default withRouter(BookListDetail);