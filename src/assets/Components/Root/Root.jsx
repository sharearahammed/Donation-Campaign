import { Outlet } from "react-router-dom";
import NavBar from "../Sheared/NavBar/NavBar";

const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
        </div>
    );
};

export default Root;