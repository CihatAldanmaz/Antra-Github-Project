import React, { Component } from 'react'
import axios from "axios"
import Home from './Home/Home';
import Header from './Header/Header';
import "./Dashboard.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Followers from './Followers/Followers';
export default class Dashboard extends Component {


    state={
        user:{},
        followers:[],
        followersIndex:0
      
    }

    searchUser = (e,user) => {
        e.preventDefault()
        axios.get(`https://api.github.com/users/${user}`, {
            auth: {
             username: `CihatAldanmaz`,
            },
           }).then(resp=>{this.setState({
               user:resp.data,
           });this.getFollowers()});


          

    }

    getFollowers = () => {
        
            axios.get(`https://api.github.com/users/${this.state.user.login}/followers`, {
                auth: {
                 username: `CihatAldanmaz`,
                },
               }).then(resp => {this.setState({
                   followers:resp.data.slice(this.state.followersIndex,this.state.followersIndex+10)
               })
            }
               )
               


               this.setState({
                   followersIndex:this.state.followersIndex+10
               })

    }


    
    
    render() {
        return (
            <div>
            <div>
                <Header searchUser={this.searchUser}/>
            </div>
            
            <div className="main__area">
            <Switch>
                    <Route exact path="/">
                <Home user={this.state.user}/>
                </Route>
                <Route exact path="/followers">
                <Followers followers={this.state.followers} getFollowers={this.getFollowers}/>
                </Route>
                </Switch>
            </div>
            </div>
        )
    }
}
