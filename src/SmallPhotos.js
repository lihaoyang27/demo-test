import React from "react";

export default class SmallPhotos extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.imgList.map((value, index) =>
                        <div key={index}>
                            <p>{value.description}</p>
                            <img src={value.small} alt="small photo"/>
                        </div>
                    )}
            </div>
        )
    }
}