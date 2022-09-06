import React, { Component } from "react";
import "./Home.css";
import python from "https://img.freepik.com/premium-vector/cartoon-little-boy-graduation-costume-holding-diploma_353337-1074.jpg?w=740";
import java from "https://img.freepik.com/premium-vector/beautiful-girl-graduation-day-with-diploma-illustration_43633-12251.jpg?w=740";

export default class AddTutorial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            test0: null,
            test1: "",
            test2: false
        };
    }

    render() {
        return (

            <li className="test">
              <h1> Welcome to Home Page 03 </h1>
                <h6> This is That </h6>
                    <h10> That is This </h10>
                <div>
                    <img src={python} alt="python" height="50" />
                    <img src={java} alt="java" height="70" />
                </div>

            </li>



        );
    }
}
