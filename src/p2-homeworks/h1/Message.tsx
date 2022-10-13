import React from 'react';
import message from './Message.module.css';

export type MessagePropsType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: MessagePropsType) {
  return (
    <div className={message.message}>
      <img src={props.avatar} className={message.avatar} alt={'avatar'} />
      <div className={message['message__container']}>
        <p className={message['message__name']}>{props.name}</p>
        <p className={message['message__text']}>{props.message}</p>
        <p className={message['message__time']}>{props.time}</p>
      </div>
    </div>
  );
}

export default Message;
