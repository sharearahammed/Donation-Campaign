/* eslint-disable react/prop-types */
// import Hook from "../Hook/Hook";
import CustomSpinner from "../CustomSpinner/CustomSpinner";
import Category from "./Category";

const CategoryList = ({loading,filteredData}) => {

    if(loading){
        return <CustomSpinner></CustomSpinner>;
    }
    
    // console.log(data,loading)
    return (
        <div className="mt-[100px] grid grid-cols-4 gap-8">
            {
                filteredData.map(item=> <Category key={item.id}
                    item={item}></Category>)
            }
        </div>
    );
};

export default CategoryList;