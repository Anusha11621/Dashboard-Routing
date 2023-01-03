import React, { Component } from 'react'
import data from '../data.json'
import {Link} from 'react-router-dom'
export default class Articles extends Component {
    constructor(props){
        super(props)
        this.state={
            value:'',
            articledata:data
        }
    }
    onsearch = (e)=>{
        let search = e.target.value
        let update = data.filter((element)=>{
            return element.title.toLowerCase().includes(search.toLowerCase())
        })
        this.setState({
            value:search,
            articledata:update
        })

    }
  render() {
    return (
      <div className='articlecontainer'>
        <input className='input' type={'search'} onChange={this.onsearch}></input>
        { 
            this.state.articledata.map((article)=>{
                return (
                    <article className='article'>
                        <Link className='articletitle' to={`/article/${article.slug}`}>{article.title}</Link>
                        <p>{article.author}</p>
                    </article>
                )
            })
        }
      </div>
    )
  }
}
