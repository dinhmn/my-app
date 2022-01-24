import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className="youtube">
      <div className="youtube-image">
        <img src={props.image} alt="" width="200px" />
      </div>
      <div className="youtube-footer">
        <div className="youtube-avatar">
          <img src={props.avatar} alt="" />
        </div>
        <div className="youtube-title">
          <div className="youtube-heading">
            <p>{props.title}</p>
          </div>
          <div className="youtube-author">
            <p>{props.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
