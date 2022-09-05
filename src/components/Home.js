import React, { Component } from "react";

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
              <h1> Welcome to Home Page 02 </h1>
                <h2> This is That </h2>
                    <h3> That is This </h3>
                <div>
                    <img src="https://res.cloudinary.com/generation/image/upload/w_1150,q_auto,f_auto/australia/2019/04/25k-Announcement-1556x874-tiny.jpg" alt="Generation Australia" width="400" height="600"/>
                </div>
            </li>

        );
    }
}
