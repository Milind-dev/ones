import {useState,useEffect} from "react"
function App() {
  const [name, setName] = useState([]);

 useEffect( ()=> {
  names();
},[])

const names = () => {
  const data = fetch("https://ones-seven.vercel.app/")
              .then(response => response.json())
              .then(response => {setName(name);console.log(response)})
}

  return (
    <div className="App">
      {name.map((item,index)=>{
        return(
          <>
          <p>he</p>
            <p key={index}>{item.message}</p>
          </>
        )
      })}
    </div>
  );
}

export default App;




// https://ones-seven.vercel.app/