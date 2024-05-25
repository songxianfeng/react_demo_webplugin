import React, { Component } from "react";
import { IoHome } from "react-icons/io5";
import { IoAlarm,IoAirplane } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import "./navcss.css"

export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav-wrapper">
                <div className="contdis">
                        <div><IoHome className="nav-icons" /><a href='/'>Home</a></div>
                        <div><IoAlarm className="nav-icons" /><a href='/about'>About</a></div>
                        <div><IoAirplane className="nav-icons" /><a href='/contact'>Contact</a></div>
                       <div><AiOutlineUser className="nav-icons" /><a href='/showai'>ShowAI</a></div>
                </div>
            </nav>
        )
    }
}
