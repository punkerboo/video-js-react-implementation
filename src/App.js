import logo from './logo.svg';
import './App.css';
import VideoViewer  from './videoPlayer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VideoViewer
        style={{  color: 'blue', lineHeight : 10, padding: 20 }}
        src= "testvideo1.mp4"
        />
      </header>
    </div>
  );
}

export default App;
