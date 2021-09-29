import Index from './pages/Index';
import ImageBanner from './components/ImageBanner';
import './App.css';
import Featured from './components/Featured';

function App() {
  return (
    <div className="App">
      <Index/>
      <ImageBanner/>
      <Featured/>
    </div>
  );
}

export default App;
