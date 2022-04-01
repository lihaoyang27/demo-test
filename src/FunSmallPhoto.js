import React from "react";

const FunSmallPhotos = (props) => {
        return (
            <div>
                {
                    props.imgList.map((value, index) =>
                        <div key={index}>
                            <p>{value.description}</p>
                            <img src={value.small} alt="small photo"/>
                        </div>
                    )}
            </div>
        )
}

export default FunSmallPhotos