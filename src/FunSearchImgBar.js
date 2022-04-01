import React from "react";
import {debounce} from 'lodash'


const FunSearchImgBar = (props) => {

    const debounceInput = debounce((value) => props.getChange(value), 500)
    const getChangeFromInput = (e) => {
        debounceInput(e.target.value)
    }

        return (

            <div className="ui massive icon input">
                <input type="text" placeholder="Search massive..."
                       onChange={getChangeFromInput}/>
                <i className="search icon"></i>
            </div>

        )
}

export default FunSearchImgBar