import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.image()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {faker.name.firstName("female" | "male")}
        </a>
        <div className="metadata">
          <span className="date">{faker.date.month()}</span>
        </div>
        <div className="text">Nice Blog</div>
      </div>
    </div>
  );
};

export default CommentDetail;
