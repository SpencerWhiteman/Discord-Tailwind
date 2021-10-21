import ChannelBar from './Channelbar';
import ContentContainer from './ContentContainer';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <div className="flex">
        <Sidebar />
        <ChannelBar/>
        <ContentContainer/>
    </div>
  );
}


export default App;
