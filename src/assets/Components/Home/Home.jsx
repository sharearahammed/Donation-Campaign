import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import Hook from "../Hook/Hook";

const Home = () => {
    const {data} = Hook();
    const [value , setValue] = useState("");
    const [filteredData , setFilteredData] = useState([]);

    useEffect(()=>{
        setFilteredData(data)
    },[data])

    const handleSearch = ()=>{
        if(value.trim() != ""){
            const filtered = data.filter(item => item.category.toLowerCase().includes(value.toLowerCase()))
            setFilteredData(filtered)
        }
        else{
            setFilteredData(data)
        }
        
    }
    return (
        <div>
            <Banner setValue={setValue}
            handleSearch={handleSearch}></Banner>
            <CategoryList filteredData={filteredData}></CategoryList>
        </div>
    );
};

export default Home;