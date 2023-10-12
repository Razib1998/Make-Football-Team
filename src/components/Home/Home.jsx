import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const Home = () => {
 const [players,setPlayers] = useState([]) ;
 const [selectedPlayers, setSelectedPlayers] = useState([]);
 const [remaining,setRemaining] = useState(0)
 const [total, setTotal] = useState(0);
    
    
  useEffect(()=>{
    fetch("data.json")
    .then(res=> res.json())
    .then(data => setPlayers(data))
  },[]); 
  
  const handelSelectPlayer = (player) =>{
    let count = player.purchase_price;
    if(selectedPlayers.includes(player)){
   toast.error("This player is already selected")
    }
   else{

    selectedPlayers.forEach(item =>{
        count = count + item.purchase_price;
    })
  
    const RemainingBudget = 300 - count;
    
    if(count > 300){
        toast.error("You cannot buy more Players because of your budget")
    }
     else{
          setTotal(count);
          setRemaining(RemainingBudget)
          const newSelectedPlayers = [...selectedPlayers, player];
          setSelectedPlayers(newSelectedPlayers);

     }
   }
  }
   console.log(players)



    return (
      <div>
        <div className="flex">
          <div className=" mt-6 ml-4 flex flex-wrap gap-4 ">
            {players.map((player) => (
              // eslint-disable-next-line react/jsx-key
              <div
                key={player.id}
                className="card w-[250px] bg-base-100 shadow-xl"
              >
                <figure className="w-[100px] rounded-full ml-20">
                  <img src={player.image_url} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    <span className="">Name:</span> {player.name}
                  </h2>
                  <p>
                    <span className="font-bold">Age:</span> {player.age}
                  </p>
                  <p>
                    <span className="font-bold">Position:</span>{" "}
                    {player.position}
                  </p>
                  <p>
                    <span className="font-bold">Country:</span> {player.country}
                  </p>
                  <p>
                    <span className="font-bold">Purchase-Price:</span>
                    $ {player.purchase_price} million
                  </p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => handelSelectPlayer(player)}
                      className="btn btn-primary w-full"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Cart
            selectedPlayers={selectedPlayers}
            remaining = {remaining}
            total = {total}
            ></Cart>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    );
};

export default Home;