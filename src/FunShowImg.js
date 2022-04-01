import React, {useState, useEffect} from "react";
import axios from "axios";
// import Loading from "./Loading";
// import SmallPhotos from "./SmallPhotos";
import FunSmallPhotos from "./FunSmallPhoto";
import FunLoading from "./FunLoading";


const ACCESS_KEY = 'F8DLgC2n_1taphQ1gzueqfgiXyZ-c8mSS2KnvsTk6cw'
const UNSPLASH_URL = 'https://api.unsplash.com/search/photos'

const FunShowImg = (props) => {
    const [bigImg, setBigImg] = useState('')
    const [imgList, setImgList] = useState([])
    const [showLoading, setShowLoading] = useState(true)

    useEffect(() => updateImg(), [props.getNewCity])

    const updateImg = (value) => {
        if (!!props.getNewCity) {
            setShowLoading(true)
        }

        axios.get(UNSPLASH_URL, {
            params: {query: props.getNewCity},
            headers: {Authorization: `Client-ID ${ACCESS_KEY}`}
        }).then(res => {
                console.log(res)
                let {data: {results}} = res
                setBigImg(results[0]?.urls?.regular)
                setShowLoading(false)

                let newArr = results.map((pic) => {       //形参pic，传入的是results数组的每一项
                    return {
                        description: pic.description,
                        small: pic.urls.small
                    }
                })
                setImgList(newArr)
            }
        )
    }

    return (
        <>
            {showLoading ? <FunLoading/>
                : <img src={bigImg} alt="This is a big Image"/>}
            <FunSmallPhotos imgList={imgList}/>
        </>
    )
}

export default FunShowImg