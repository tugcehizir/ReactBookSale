import React from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
const FavListDetail = ({ favorite }) => {
    const state = [];
    for (let i = 1; i < favorite.length; i++) {
        state.push({ title: favorite[i].title, img: favorite[i].img })
    }
    return (
        <div>
            <div>
                {state.map(value => (
                    <li>{value.title}
                        <br />
                        <img src={value.img} alt="foto" />
                    </li>
                ))}
            </div>
            <br />
            <Link to="/">Anasayfaya dön!</Link>
        </div>)
}


const mapStateToProps = (state) => {
    return {
        favorite: state.app.favoriteList
    };
}
export default connect(mapStateToProps)(FavListDetail);