import React from "react";

import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// let le = document.getElementById('root');

const App = () => {
  var date = "Time Ago " + new Date().toLocaleTimeString();
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="sam"
          timeAgo={date}
          content="nice blog post"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <CommentDetail
        author="diki"
        timeAgo={date}
        content="wow your amazing"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="iqbal"
        timeAgo={date}
        content="nice blog bro!"
        avatar={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
