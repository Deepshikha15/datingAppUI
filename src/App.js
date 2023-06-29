import './App.css';
import Header from './components/Header';
import DatingCards from './components/DatingCards';
import SwipeButton from './components/SwipeButton';

function App() {
  return (
    <div className="App">
      <Header/>
      <DatingCards/>
      <SwipeButton/>
    </div>
  );
}

export default App;
