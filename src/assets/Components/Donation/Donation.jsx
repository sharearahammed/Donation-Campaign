import { useEffect, useState } from "react";
import DonationCart from "./DonationCart";
import { getStoredDonation } from "../Utilities/Utilities";
import { useLoaderData } from "react-router-dom";

const Donation = () => {
    const datas = useLoaderData();
  const [viewDonation , setDonation] = useState([]);
  const[length , setLength] = useState(false);
  const handleClick = () =>{
    setLength(!length)
  }
//   console.log(localData);

useEffect(()=>{
    const storedDonation = getStoredDonation();
    if(datas.length > 0){
        const newCart = [];
        for(const id of storedDonation){
            const DonateCarts = datas.find(data=> data.id === id);
            newCart.push(DonateCarts)
        }
        setDonation(newCart);
    }
},[datas])

if(viewDonation.length == 0){
    return <p>No data found</p>
}
 
  return (
    <>
    <div className="mt-[80px] grid grid-cols-2 gap-5">
        {
            viewDonation.slice(0 , length ? viewDonation.length :4).map((cart)=> <DonationCart key={cart.id} cart={cart}></DonationCart>)
        }
    </div>

    {viewDonation.length > 4 ? <div className="mt-20 flex justify-center">
    <button onClick={handleClick} className="btn bg-cyan-300">{!length ? 'Show All' : 'Show Less'}</button>
    </div> : null}

    </>
    
  );
};

export default Donation;
