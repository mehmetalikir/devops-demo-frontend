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
            <div>
                <h1> Welcome to Home Page 00 </h1>
                <h3> This is That </h3>
                <h5> That is This </h5>
                <div className="container">
                <div><img src="https://img.freepik.com/premium-vector/cartoon-boy-black-gown-holding-diploma_43633-12257.jpg?w=740" /></div>
                <div><img src="https://img.freepik.com/premium-vector/cartoon-little-girl-graduation-costume-holding-diploma_353337-1076.jpg?w=740" /></div>
                <div><img src="https://img.freepik.com/premium-vector/cartoon-boy-graduation-celebration-white-background_353337-1078.jpg?w=740" /></div>
                <div><img src="https://img.freepik.com/premium-vector/cartoon-little-girl-graduation-costume_353337-1077.jpg?w=740" /></div>
                <div><img src="https://img.freepik.com/premium-vector/cartoon-little-girl-graduation-costume-holding-diploma_353337-1075.jpg?w=740" /></div>
                <div><img src="https://img.freepik.com/free-vector/congratulations-card-template-with-graduation-cap_1308-5753.jpg?w=740&t=st=1662483221~exp=1662483821~hmac=74f430ffeaff7fe2daeae12405c76ec7708ca2b28e469fd331ada408c9723e0e" /></div>
                <div><img src="https://img.freepik.com/premium-vector/cartoon-little-boy-graduation-costume-holding-diploma_353337-1074.jpg?w=740" /></div>
                <div><img src="https://img.freepik.com/premium-vector/beautiful-girl-graduation-day-with-diploma-illustration_43633-12251.jpg?w=740" /></div>
            </div>
            </div>
        );
    }
}
