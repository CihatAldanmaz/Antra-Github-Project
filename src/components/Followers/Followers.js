import React, { Component } from 'react'
import FollowerCart from './FollowerCart'
import "./Follower.css"

export default class Followers extends Component {

    followersMapping = () => {
      return  this.props.followers.map(follower=>{
       return <FollowerCart follower={follower}/>
        })
    }


    
    render() {
        return (
            <div>
                <button onClick={this.props.getFollowers}>More Followers!</button>
                <ul>
            {this.followersMapping()}
                </ul>
            </div>
        )
    }
}
