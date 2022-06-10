// import React, { useState } from 'react'
// import SockJsClient from 'react-stomp';
// import Messages from './Message';
// import Input from './Input';
// import LoginForm from './LoginForm';
// import chatAPI from '../services/chatapi';
// import '../styles/chat.css'

// const SOCKET_URL = 'http://localhost:8080/chat/';
// const Chatcmp = () => {

//   const [messages, setMessages] = useState([])
//   const [user, setUser] = useState(null)

//   let onConnected = () => {
//     console.log("Connected!!")

//   }

//   let onMessageReceived = (msg) => {
//     console.log('New Message Received!!', msg);
//     setMessages(messages.concat(msg));
//   }

//   let onSendMessage = (msgText) => {
//     chatAPI.sendMessage(user.username, msgText).then(res => {
//       console.log('Sent', res);
//     }).catch(err => {
//       console.log('Error Occured while sending message to api');
//     })
//   }
//   let randomColor=() => {
//       return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
//   }

//   let handleLoginSubmit = (username) => {
//     console.log(username, " Logged in..");

//     setUser({
//       username: username,
//       color: randomColor()
//     })

//   }

//   return (
//     <div className="App1">
//       {!!user ?
//         (
//           <>
//             <SockJsClient
//               url={SOCKET_URL}
//               topics={['/topic/group']}
//               onConnect={onConnected}
//               onDisconnect={console.log("Disconnected!")}
//               onMessage={msg => onMessageReceived(msg)}
//               debug={false}
//             />
//             <Messages
//               messages={messages}
//               currentUser={user}
//             />
//             <Input onSendMessage={onSendMessage} />
//           </>
//         ) :
//         <LoginForm onSubmit={handleLoginSubmit} />
//       }
//     </div>
//   )
// }

// export default Chatcmp;