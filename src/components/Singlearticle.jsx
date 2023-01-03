import React from 'react'

import data from '../data.json'
import {NavLink,useParams} from 'react-router-dom'
// export default class Singlearticle extends Component {
//   constructor(props){
//     super(props)
    
//   }
//   render() {
//     const params = Params()
//     const article = data.find((art)=>{
//      return  art.slug === params.id
//     })
//     const {title,author}=article
    
//     return (
//       <div>
//         <NavLink to='/article'>👈 Go back to articles</NavLink>
//         <h3>{title}</h3>
//         <p>{author}</p>
//       </div>
//     )
//   }
// }

export default function Singlearticle() {
    const params = useParams()
    console.log(params)
    const article = data.find((art)=>{
      return art.slug === params.id
    })
    
  return (
    <div className='singlearticle'>
      <NavLink className='navlink' to='/article'>👈 Go back to articles</NavLink>
      
         <h5>The slug of the article is::: {article.slug}</h5>
    </div>
  )
}

