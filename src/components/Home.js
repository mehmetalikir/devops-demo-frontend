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

            <div className="row">
                <div className="column">  <img src="https://img.freepik.com/premium-vector/cartoon-little-boy-graduation-costume-holding-diploma_353337-1074.jpg?" /></div>
                <div className="column">  <img src="https://img.freepik.com/premium-vector/cartoon-little-boy-graduation-costume-holding-diploma_353337-1074.jpg?" /></div>
                <div className="column">  <img src="https://img.freepik.com/premium-vector/beautiful-girl-graduation-day-with-diploma-illustration_43633-12251.jpg?w=740"/></div>
            </div>

        );
    }
}
