import React from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';

const BookList = ({ booksThis }) => {
    const history = useHistory();
    const _onClick = id => {
        history.push({ pathname: '/detail', state: { bookId: id } });
    };
    return (
        <div>
            {booksThis.map(item => (
                <div key={item.id} className="content" onClick={() => _onClick(item.id)}>
                    <img src={item.volumeInfo.imageLinks.smallThumbnail} width="130px" height="200px" alt="foto"></img>
                    <p>Kitap ismi:{item.volumeInfo.title}</p>
                    <p>Yazar ismi:{item.volumeInfo.authors[0]}</p>
                    <p>Kategori: {item.volumeInfo.categories}</p>
                    {item.saleInfo.saleability === "NOT_FOR_SALE" && (<p>Satılık değil</p>)}
                    {item.saleInfo.saleability === "FOR_SALE" && (<p className="sale">Fiyat {item.saleInfo.listPrice.amount}{item.saleInfo.listPrice.currencyCode}</p>)}
                </div>))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        booksThis: state.app.books
    };
}


export default withRouter(connect(mapStateToProps)(BookList));
