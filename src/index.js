import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApproveCard from "./ApproveCard";

const App = function () {
  return (
    <div className="ui container comments">
      <ApproveCard>
        <div>
          <h2>Warning!</h2>
          Are you sure you want to approve?
        </div>
      </ApproveCard>
      {/** We can reuse and make a component dynamic by passing Another component as child and accessing through props.children
       * You can either pass single or multiple as components or plain text or JSX as children
       * Your core Component remains same, wherein you pass different components as required
       * Here you can see
       *    Above we are passing JSX as a confirmation message
       *    Below we are displaying a Component
       */}
      <ApproveCard>
        <CommentDetail
          author="Steve"
          timeAgo="Today at 6:30PM"
          comment="Nice Blog post!"
          avatar={faker.image.image()}
        />
        {/** FAKER is an API package used to randomly generate fake data */}
      </ApproveCard>
      <ApproveCard>
        <CommentDetail
          author="Jobs"
          timeAgo="Yesterday at 2:00AM"
          comment="Attention to details is must"
          avatar={faker.image.image()}
        />
      </ApproveCard>
      <ApproveCard>
        <CommentDetail
          author="Zen"
          timeAgo="10/10/2021 at 1:00PM"
          comment="Being ZEN always changes the view towards world around you."
          avatar={faker.image.image()}
        />
      </ApproveCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
