import Hook from "../Hook/Hook";
import Category from "./Category";

const CategoryList = () => {
    const {data , loading} = Hook();
    // console.log(data,loading)
    return (
        <div className="mt-[100px] grid grid-cols-4 gap-8">
            {
                data.map(item=> <Category key={item.id}
                    item={item}></Category>)
            }
        </div>
    );
};

export default CategoryList;