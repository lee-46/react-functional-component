import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = function() {
    return (
      <div className="ui container comments">
          <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.image()}/>
            </a>
            <div className="content">
                <a className="author" href="/">
                    Steve
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:30PM</span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>
          </div>
      </div>  
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));