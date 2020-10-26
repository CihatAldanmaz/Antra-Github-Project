import React, { Component } from 'react'
import "./Home.css"

export default class Home extends Component {
    render() {
        return (
            <div className="usercart">
              <img
                src={this.props.user.avatar_url}
                alt=""
                srcset=""
              />
        
            <div className="usercart__info">
                <h4>{this.props.user.login}</h4>
                <p>Github User</p>
                <hr />
                <p>
            {this.props.user.followers} followers
                </p>
            </div>
          </div>
        )
    }
}
