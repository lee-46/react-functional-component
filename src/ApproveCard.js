import React from "react";

const ApproveCard = (props) => {
  return (
    <div className="ui card">
      {/** Using props.children are accessing content wrapped inside this Component
       * -> It can be a Component or multiple components or plain text or JSX
       */}
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApproveCard;
