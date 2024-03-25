/* eslint-disable react/prop-types */
// import Hook from "../Hook/Hook";
import Category from "./Category";

const CategoryList = ({filteredData}) => {
    
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