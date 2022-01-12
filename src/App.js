import {ChatEngine} from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/chatFeed';
import LoginForm from './components/LoginForm';

const App = ()=> {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div className="App">
     <ChatEngine height="100vh"
     projectID="1eac67e3-a848-42b8-9e24-fdfde8c908d7" 
     userName={localStorage.getItem('username')}
     userSecret={localStorage.getItem('password')}
     renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
     
     onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
     />
    </div>
  );
}

export default App;
