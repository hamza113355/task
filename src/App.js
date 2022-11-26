import React, { useEffect, useState } from "react";
import NameInputBar from "./components/NameInputBar";
import GuessList from "./components/GuessList";
import axios from "axios";

const App = () => {

    const [personDataList, setPersonDataList] = useState([]); // List to store all the data
    const [guessNumber, setGuessNumber] = useState("X"); // Used to update the guess number on top
    const [showOdd, setShowOdd] = useState(false); // Used to hide/show the odd statement

    useEffect(() => {
        if (personDataList.length != 0) {
            // Updating the guess number on every render
            setGuessNumber(personDataList.length.toString());
        }  

        if (personDataList.length % 2 != 0) { 
            // If the number is odd
            setShowOdd(true);
        } else { 
            // If the number is not odd
            setShowOdd(false);
        }
    });

    const onFormSubmit = async (name) => {
        
        // Make API Call here
        const response = await axios.get(`https://api.agify.io?name=${name}`);

        const result = response.data;

        // Storing the data coming from the API in the list.
        setPersonDataList([...personDataList, result]);
    };
    

    return (
        <>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px', background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,70,121,1) 0%, rgba(0,212,255,1) 100%)"}}>
            <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Name Age Guesser</span>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <span style={{fontWeight: 'bold'}}>Total Guesses: {guessNumber}</span>
                </div> 
                <div className="col-12 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={!showOdd ? {visibility: 'hidden'} : {visibility: 'visible'}}>
                    <span style={{fontSize: '12px', fontWeight: 'bold'}}>What an odd number of guesses!</span>
                </div>
                <div className="col-12 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <NameInputBar onFormSubmit={onFormSubmit}/>
                </div>
                <div className="col-12 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style={{marginTop: '30px'}} >
                    <span style={{fontWeight: 'bold'}}>All Guesses</span>
                    <GuessList list={personDataList}/>
                </div>
            </div>
        </div>
        </>
    );
};

export default App;