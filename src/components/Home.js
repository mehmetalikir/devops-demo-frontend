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
                    <img src="https://marketplace.canva.com/EAE9wGnqUWM/1/0/1600w/canva-congratulations-%28card-%28landscape%29%29-1D77KxLljgM.jpg" alt="Generation Australia" width="800" height="300"/>
                </div>
            </li>


        );
    }
}
