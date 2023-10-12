import { useEffect, useState } from "react";



const Home = () => {
 const [players,setPlayers] = useState([]) 
    
    
  useEffect(()=>{
    fetch("data.json")
    .then(res=> res.json())
    .then(data => setPlayers(data))
  },[]);  
  console.log(players)



    return (
      <div className="mt-6 mr-44 flex flex-wrap gap-6">
        {players.map((player) => (
          // eslint-disable-next-line react/jsx-key
          <div key={player.id} className="card w-[300px] bg-base-100 shadow-xl">
            <figure className="w-[100px] rounded-full ml-20">
              <img
                src= {player.image_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {player.name}</h2>
              <p>Age: {player.age}</p>
              <p>Position: {player.position}</p>
              <p>Country: {player.country}</p>
              <p>Purchase-Price: {player.purchase_price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary w-full">Select</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Home;