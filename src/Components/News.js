import React, { useEffect} from 'react'
import { useState } from 'react';
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
  
const [articles, setArticles] = useState([])

const [page, setpage] = useState(1)
const [ totalResults, settotalResults] = useState(1)

  useEffect(() => {
 update();
  
   
  }, [])
  
 
  const update = async () => {
  
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=249b3ccd1be84c9eae673e779aa251de&page=${page}&pagesize=${props.pagesize}`;
  
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    setArticles(parseddata.articles);
    settotalResults(parseddata.totalResults);
    
    
  }
  const fetchMoreData = async () =>{
    
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1);
    let data = await fetch(url);
    let parseddata = await data.json();
    setArticles(articles.concat(parseddata.articles));
    settotalResults(parseddata.totalResults);
   
    };
    

  
    return (
      <>
        <h1 className='text-center' style={{marginTop:'100px',}}>Top {props.category} Headlines </h1>
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
         
        >
          <div className='container'>
            <div className="row my-5">
              {articles.map((ele) => {
                return <div className="col-md-4" key={ele.url}>
                  <Newsitem title={ele.title?ele.title:" "} description={ele.description?ele.description:" "} urlToImage={ele.urlToImage} url={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name} />
                </div>

          })}
          </div>
          </div>
        </InfiniteScroll>


      </>


    )
  
}

export default News