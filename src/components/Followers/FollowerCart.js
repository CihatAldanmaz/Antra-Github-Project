import React, { Component } from 'react'
import "./Follower.css"

export default class FollowerCart extends Component {
    render() {
        console.log(this.props.follower)
        return (
            <div>
                <li>
                <img src={this.props.follower.avatar_url} alt="Avatar" class="avatar" />
        <p>{this.props.follower.login}</p>
                </li>
            </div>
        )
    }
}
