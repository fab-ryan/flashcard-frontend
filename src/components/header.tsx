import "./style.css";
import logo from "../assets/mine_logo.png";
import Select from "react-select"
export const Header = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    return (
        <header className=" h-13 backdrop-blur-md">
            <div className="header-logo ">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="header-title w-100 search rounded-xl">
                <Select options={options} isClearable isLoading isSearchable className=" rounded-xl backdrop-blur-3xl"/>
            </div>
            <div className="px-6 backdrop-blur">
                <button className="font-bold py-2 px-4 rounded button " >Login</button>
                <button className="font-bold py-2 px-4 rounded button ml-4">Register</button>
            </div>
        </header>
    );
};
