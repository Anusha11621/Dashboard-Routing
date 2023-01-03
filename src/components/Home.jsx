import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <h5>
        🚀 Welcome to Homepage! 
        </h5>
        <Link to='/article' className='articlelink'>
            <h3 className='homecard'>Articles Page</h3>
        </Link>
      </div>
    )
  }
}
