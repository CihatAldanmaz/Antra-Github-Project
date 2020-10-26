import React, { Component } from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom";


export default class Header extends Component {

    state={
        searchInput:""
    }

    inputReset = () => {
        document.getElementById("search__Form").reset()
    }


    render() {
        return (
            <div className="header">
                    <Link to="/">
            <button className="router-button">Home</button>
                </Link>
                <Link to="/followers">
            <button className="router-button">Followers</button>
                </Link>
            <form className="search__Form" onSubmit={(e)=>{this.props.searchUser(e,this.state.searchInput)}}>
                    <input type="text" placeholder="Search User..." onChange={(e)=>{this.setState({searchInput:e.target.value})}}/>
                    <button id="search__button" onClick={(e)=>{this.props.searchUser(e,this.state.searchInput)}}>
                        <SearchIcon className="search__icon"/>
                    </button>
                    </form>
        </div>
        )
    }
}
