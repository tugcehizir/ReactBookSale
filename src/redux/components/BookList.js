import React from 'react'
import { connect } from 'react-redux';

const BookList = ({ booksThis }) => {

    return (
        <div className="div">
            {booksThis.map(item => (
                <div key={item.id} className="content">
                    <img src={item.volumeInfo.imageLinks.smallThumbnail} width="130px" height="200px"></img>
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


export default connect(mapStateToProps)(BookList);
