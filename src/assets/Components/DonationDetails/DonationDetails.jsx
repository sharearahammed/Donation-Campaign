import { useParams } from "react-router-dom";
import Hook from "../Hook/Hook";
import { useEffect, useState } from "react";
import { saveJobApplication } from "../Utilities/Utilities";

const DonationDetails = () => {
  const { id } = useParams();
  const intId = parseInt(id);
  console.log(id);
  const { data, loading } = Hook();
  const [singleData, setSingleData] = useState({});

  const handleDonateButton = () =>{
    saveJobApplication(intId);
    console.log('click')
  }


  // console.log(data)
  useEffect(() => {
    const singleData = data.find((item) => item.id === intId);
    console.log(singleData);
    setSingleData(singleData);
  }, [data, intId]);

  const { picture, price, category, description,button_background_color } = singleData || {};
  return (
    <div className="mt-[80px]">
      <div className="relative mb-[56px]">
        <img className="h-[700px] w-[1320px]" src={picture} />
        <div className="absolute flex flex-col justify-center bottom-0 bg-opacity-40 bg-black w-full h-[130px] pl-[32px]">
        <button onClick={handleDonateButton} style={{backgroundColor:button_background_color}} className="h-[56px] w-[179px] text-white font-bold rounded-lg">Donate {price}</button>
        </div>
      </div>
      <div>
        <h1 className="mb-[23px] text-[40px] font-bold">{category}</h1>
        <p className="text-[16px] text-[#0B0B0BB3]">{description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
