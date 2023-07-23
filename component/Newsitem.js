import React from "react";

const Newsitem =(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
        <div style={{display:'flex',justifyContent: 'flex-end',position: 'absolute',right:'0'}}>
        <span className=" badge rounded-pill bg-danger">
                {" "}
                {source}{" "}
              </span></div>
          <img
            src={
              !imageUrl
                ? "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1024/https://pianalytix.com/wp-content/uploads/2020/12/How-To-Create-NEWS-API-1024x427.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
             
              {title}{" "} 
              
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small class="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem;
