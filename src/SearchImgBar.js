import React from "react";
import {debounce} from 'lodash'


export default class SearchImgBar extends React.Component {

    debounceInput = debounce((value) => this.props.getChange(value), 500)
    getChangeFromInput = (e) => {
        this.debounceInput(e.target.value)
    }


    render() {
        return (

            <div className="ui massive icon input">
                <input type="text" placeholder="Search massive..."
                       onChange={this.getChangeFromInput}/>
                <i className="search icon"></i>
            </div>

        )
    }
}