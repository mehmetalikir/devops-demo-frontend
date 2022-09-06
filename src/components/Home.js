import React, { Component } from "react";
import "./Home.css";

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
                    <img src="https://img.freepik.com/premium-vector/cartoon-little-boy-graduation-costume-holding-diploma_353337-1074.jpg?w=740" alt="Example image"/>
                    <img src="https://img.freepik.com/premium-vector/beautiful-girl-graduation-day-with-diploma-illustration_43633-12251.jpg?w=740" alt="Example image"/>
                    <img src="https://img.freepik.com/premium-vector/cartoon-boy-black-gown-holding-diploma_43633-12257.jpg?w=740" alt="Example image"/>
                    <img src="https://img.freepik.com/premium-vector/cartoon-little-girl-graduation-costume_353337-1077.jpg" alt="Example image"/>
                    <img src="https://img.freepik.com/premium-vector/cartoon-little-girl-graduation-costume-holding-diploma_353337-1075.jpg" alt="Example image"/>
                    <img src="https://img.freepik.com/premium-vector/cartoon-little-girl-graduation-costume-holding-diploma_353337-1076.jpg" alt="Example image"/>
                    <img src="https://img.freepik.com/premium-vector/cartoon-boy-graduation-celebration-white-background_353337-1078.jpg" alt="Example image"/>
                    <img src="" alt="Example image"/>
                    <img src="" alt="Example image"/>
                </div>
            </li>


        );
    }
}
