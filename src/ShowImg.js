import React from "react";
import axios from "axios";
import Loading from "./Loading";
import SmallPhotos from "./SmallPhotos";


const ACCESS_KEY = 'F8DLgC2n_1taphQ1gzueqfgiXyZ-c8mSS2KnvsTk6cw'
const UNSPLASH_URL = 'https://api.unsplash.com/search/photos'

export default class ShowImg extends React.Component{
    constructor(props) {
        super(props);
        this.state={bigImg:'',imgList:[],showLoading:true}
    }

    componentDidMount() {
        this.updateImg()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.getNewCity !== this.props.getNewCity){
            this.updateImg()
        }
    }

    updateImg = (value) => {
        if (!!this.props.getNewCity ){this.setState({showLoading:true})}

        axios.get(UNSPLASH_URL, {
            params: {query: this.props.getNewCity},
            headers: {Authorization: `Client-ID ${ACCESS_KEY}`}
        }).then(res => {
            console.log(res)
            let {data:{results}} = res
            this.setState({bigImg:results[0]?.urls?.regular, showLoading:false})

            let newArr = results.map( (pic) => {       //形参pic，传入的是results数组的每一项
                return {
                    description: pic.description,
                    small: pic.urls.small
                }
            })
            this.setState({imgList:newArr})
            }
        )
    }

    render(){
        const {imgList} = this.state

        return(
            <>
                {this.state.showLoading?<Loading/>
                    :<img src={this.state.bigImg} alt="This is a big Image"/>}
                <SmallPhotos imgList={imgList}/>
            </>
        )
    }
}