import React, {useState} from "react";
import './App.css';
// import SearchImgBar from "./SearchImgBar";
// import ShowImg from "./ShowImg";
import FunShowImg from "./FunShowImg";
import FunSearchImgBar from "./FunSearchImgBar";

const App = ()=> {

    // constructor(props) {
    //     super(props);
    //     this.state = {newCity: 'toronto'}
    // }
    const [newCity, setNewCity] = useState('toronto')

    const handleChange = (newCity) => {
        console.log('new data from Search', newCity)
        setNewCity(newCity)
    }

        return (
            <div className="App">
                <FunSearchImgBar getChange={handleChange}/>
                <FunShowImg getNewCity={newCity}/>
            </div>
        );
}

export default App;
