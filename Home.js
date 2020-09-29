import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";


function Home() {
    return (
        <div className="home">
            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home_headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
                
            </div>

            <div className="home_body">
                <h1 className="pageTitle">ネコちゃん検索</h1>
                <img src="https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_1280.jpg" alt=""/>

                <div className="home_inputContainer">
                    <Search />
                </div>
                <div className="pageDiscription">ネコちゃんに関連する検索結果のみ表示します。</div>


            </div>


        </div>
        )
}

export default Home