import './App.css';
import {useState,useEffect} from "react"
function App() {
  const [name, setName] = useState([]);

 useEffect( ()=> {
  names();
},[])

const names = async() => {
  const res = await fetch("https://ones-seven.vercel.app/");
  setName(res);
  }
  return (
    <div className="App">
      {name.map((item,index)=>{
        return(
          <>
            <p id="index">{item}</p>
          </>
        )
      })}
    </div>
  );
}

export default App;




// https://ones-seven.vercel.app/