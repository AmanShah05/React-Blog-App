import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./sidebar.css"

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () =>
        {
            const res = await axios.get("/categories/")
            setCats(res.data);
        };
        getCats();
    },[]);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                    className="sidebarImg"
                    src="https://media.swipepages.com/6157afd5ecabb50010553f24%2Fog%2FAman%20(1).png"
                    alt=""
                />
                <p>
                    Hey, My name is Aman! I am the creator of this blogging website. I created this website for technology enthusiasts like you who would like to share their ideas with the world and make a difference. 
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span> 
                <ul className="sidebarList">
                    {cats.map((c) => (
                    <Link to={`/?cat=${c.name}`} className = "link">
                        <li className="sidebarListItem">{c.name}</li>
                    </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
}
                                                            