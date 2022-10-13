import React from 'react';
import Message from './Message';
import AlternativeMessage from './AlternativeMessage';

const messageData = {
  avatar:
    'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
  name: 'Artur',
  message: 'Hello',
  time: '22:00',
};
const alternativeMessage = {
  avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
  name: 'Vasia',
  message: 'Hi',
  time: '22:12',
};

function HW1() {
  return (
    <div>
      <hr />
      homeworks 1{/*should work (должно работать)*/}
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <hr />
      <AlternativeMessage
        avatar={alternativeMessage.avatar}
        name={alternativeMessage.name}
        message={alternativeMessage.message}
        time={alternativeMessage.time}
      />
      <hr />
    </div>
  );
}

export default HW1;
