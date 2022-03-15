import './App.css';
import CreateUser from './Components/CreateUser';

const fechAPI = async () => {
  const fetchapi = await fetch('http://15.228.185.140:3333/person/people')
  const fetchjson = await fetchapi.json()
  console.log(fetchjson)
}
fechAPI()

function App() {
  return (
    <div className="App">
     <CreateUser />
    </div>
  );
}

export default App;
