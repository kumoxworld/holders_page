import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a href={window.location.href+"bibi/?book=storybook1.epub"} data-bibi="embed" data-bibi-style="[[ CSS for embeded Bibi frame, as you like ]]"> Kumo x World </a><script src="https://localhost:3000/bibi/and/jo.js"></script>
      </header>
    </div>
  );
}

export default App;
