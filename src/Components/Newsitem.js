import React, { Component } from 'react'

const Newsitem =(props)=> {
 
    let { title, description, urlToImage, url, author, date, source } = props;
    return (

      <> <div className="card" key={url}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-dark" style={{ zIndex: "1", left: "90%" }}>{
          source
        }
          <span className="visually-hidden">unread messages</span>
        </span>
        <img src={urlToImage} className="card-img-top" alt="no image available" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
          <a href={url} target="_blank" className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
      </>
    )
  
}

export default Newsitem