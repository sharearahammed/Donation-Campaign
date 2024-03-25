import { useEffect, useState } from "react";
import { getStoredDonation } from "../Utilities/Utilities";

const useLocalStorage = () => {
    const [localData , setLocalData] = useState([]);

    useEffect(()=>{
        setLocalData(getStoredDonation());
    }, []);

    return { localData };


};

export default useLocalStorage;