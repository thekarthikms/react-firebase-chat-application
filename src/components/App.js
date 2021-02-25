import '../styles/App.css';
// import Navbar from './Navbar/Navbar'
import Chatsection from './Chatsection/Chatsection'
import Sidesection from './Sidesection/Sidesection'

function App() {
  return (
    <div className="App">
      <div className="container">
          {/* <Navbar/> */}
          <div className="content">
            <Sidesection/>
            <Chatsection/>
          </div>
      </div>
    </div>
  );
}

export default App;
