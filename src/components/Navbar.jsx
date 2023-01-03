import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
     <>
      <nav className='navcontainer'>
        <NavLink className='links ' style={({isActive})=>{return {backgroundColor: isActive ? 'rgb(207, 202, 202)':'transparent'}}} to='/'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16" style={{backgroundColor:'transparent'}}>
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
        </svg>
            Home</NavLink>
        <NavLink className='links 'style={({isActive})=>{return {backgroundColor: isActive ? 'rgb(207, 202, 202)':'transparent'}}} to='/article'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M253.5 51.7C248.6 39.8 236.9 32 224 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L125.3 384H322.7l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM296 320H152l72-172.8L296 320z"/></svg>
        Article</NavLink>
        <NavLink className='links ' style={({isActive})=>{return {backgroundColor: isActive ? 'rgb(207, 202, 202)':'transparent'}}} to='/help'>👨‍🔧 Help & Support</NavLink>
      </nav>
     </>
    )
  }
}
