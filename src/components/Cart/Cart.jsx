/* eslint-disable react/prop-types */



const Cart = ({ selectedPlayers,remaining, total }) => {
  console.log(selectedPlayers);
  return (
    <div className=" mt-6 mr-12 p-4 bg-zinc-100 w-[200px]">
      <h5> Total-Players: {selectedPlayers.length}</h5>
      <h2>
        Total-Cost: <span className="font-bold">{total}$</span>
      </h2>
      <h2>
        Remaining-Budget: <span className="font-bold">{remaining}$</span>
      </h2>
      {selectedPlayers.map((player) => (
        <li key={player.id}>{player.name}</li>
      ))}
    </div>
  );
};

export default Cart;