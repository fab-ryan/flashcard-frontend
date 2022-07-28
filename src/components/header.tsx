import "./style.css";
import logo from "../assets/mine_logo.png";
import Select from "react-select"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useQuery, gql } from '@apollo/client';
import { categoryArray } from "../@types/auth";
export const Header = () => {
    const [category, setCategory] = useState("")
    const Category_QUERY = gql`
        { 
          allCategories{
            categoryName
            categoryDescription
            id
            user{
              userName
            }
          }
        }
      `;
    const { data } = useQuery(Category_QUERY)
    useEffect(() => {
        setCategory(data?.allCategories)

    }, [category]);
    let options;
    if (Array.isArray(category)) {
        options = (Object.keys(category)).map((item: categoryArray) => {
            return {
                value: category[item].id,
                label: category[item].categoryName
            }
        });
    }
    // const options = 
    return (
        <header className=" h-13 backdrop-blur-md">
            <Link to="/">
                <div className="header-logo ">
                    <img src={logo} alt="logo" className="logo" />
                </div>
            </Link>
            <div className="header-title w-100 search rounded-xl z-50">
                <Select options={options} isClearable isSearchable className=" rounded-xl z-50 backdrop-blur-3xl" />
            </div>
            <div className="px-6 backdrop-blur">
                <Link to="/login">
                    <button className="font-bold py-2 px-4 rounded button" >Login</button>
                </Link>
                <Link to="/signup">
                    <button className="font-bold py-2 px-4 rounded button ml-4">Register</button>
                </Link>
            </div>
        </header>
    );
};
