import React from 'react';

import alternative from './AlternativeMessage.module.css';

export type AlternativeMessageType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function AlternativeMessage(props: AlternativeMessageType) {
  return (
    <div className={alternative.message}>
      <img src={props.avatar} className={alternative.avatar} alt={'avatar'} />
      <div className={alternative['message__container']}>
        <p className={alternative['message__name']}>{props.name}</p>
        <p className={alternative['message__text']}>{props.message}</p>
        <p className={alternative['message__time']}>{props.time}</p>
      </div>
    </div>
  );
}

export default AlternativeMessage;
