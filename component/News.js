import React, { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
 const[articles,setarticles]=useState([]);
 const[Loading,setLoading]=useState(true);
 const[page,setpage]=useState(1);
 const[totalResults,settotalResults]=useState(0);

  const cfl=(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
  }
  const UpdateNews= async()=> {
    document.title=`${cfl(props.category)}-NEWSMONKEY`;
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true );
    props.setProgress(20);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(50);
  setarticles(parsedData.articles);
  setLoading(false);
  settotalResults( parsedData.totalResults);

    props.setProgress(100);
  }
  useEffect(()=>{
    UpdateNews();
  },[])
  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json()
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setLoading(false);
};

  const handleprev = async () => {
    setpage(page - 1 );
    UpdateNews();
  };

 const handlenext = async () => {
    setpage(page + 1 );
    UpdateNews();
  };
  
    return (
      <>
        <center><h2 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NEWSMONKEY - TOP {cfl(props.category)} HEADLINES</h2></center>
        {Loading && <Spinner />}
        <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                
    > 
        <div className="container">

        <div className="row">
            {articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                    <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
            })}
        </div>
        </div> 
    </InfiniteScroll>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={page <= 1}
            className="btn btn-dark"
            onClick={handleprev}
          >
            {" "}
            &larr;Previous
          </button>
          <button
            type="button"
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            className="btn btn-dark"
            onClick={handlenext}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }

News.defaultProps = {
  country: "in",
  pageSize: "8",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
