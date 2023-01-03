import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Dashboard extends Component {
  render() {
    return (
      <div className='dash'>
        <Link className='dashboard' to='/'>Dashboard</Link>
      </div>
    )
  }
}
