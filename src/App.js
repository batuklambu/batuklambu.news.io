import './App.css';
import Buttons from './components/Buttons';
import SearchForm from './components/SearchForm';
import Stories from './components/Stories';
import logo from './google.png';

function App() {
  return (
    <>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <SearchForm />
      <Stories />
      <Buttons />
    </>
  );
}

export default App;
