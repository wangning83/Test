import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };

function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  //提取组件
  function Avatar(props) {
    return (
      <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }
  
  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    );
  }
  

  function Comment(props) {
    return (
      <div className="Comment">
          {/* 
          被提取的组件
          <div className="UserInfo">
            <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
            />
            <div className="UserInfo-name">
            {props.author.name}
            </div>
      </div> */}
        <UserInfo user={props.author} />
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  ReactDOM.render(
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />,
    document.getElementById('root')
  );
  