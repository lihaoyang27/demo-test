import React from "react";
import './Loading.css'

export default class Loading extends React.Component{
    render(){
        return(
            <div className="ui segment">
                <div className="ui active dimmer">
                    <div className="ui text loader">Loading</div>
                </div>
                <p></p>
            </div>
        )
    }
}