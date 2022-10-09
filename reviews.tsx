import React from 'react'
import Data from './data'

function Reviews(){  
    const [count,setCount] = React.useState(0)
    const stylesImg1={
        marginTop: "-20px",
        width: "100%",
        height: "auto",
        marginLeft:"0px"
    }
    const stylesBox1={
        position: "relative",
        width: "200px",
        height: "200px",
        overflow: "hidden",
        borderRadius: "50%",
        marginTop: "20px"
    }
    const stylesImg2={
        width: "auto",
        height: "100%",
        marginLeft: "-50px"
    }
    const stylesBox2={
        display: "inline-block", 
        position: "relative", 
        width: "200px",
        height: "200px", 
        overflow: "hidden", 
        borderRadius: "50%",
        marginTop:"20px"
    }
    let result = count % 2 ===0 ? stylesImg1 : stylesImg2
    let resultBox = count % 2 ===0 ? stylesBox1 : stylesBox2
    
    function suprise(){
        let Num =Math.floor(Math.random() * Data.length)
        setCount(Num)
    }

    function Add(){
        if(count === 3){
            setCount(0)
        }else{
            setCount(prevCount => prevCount+1)
        }  
    }
    function Minus(){
        if(count === 0){
            setCount(3)
        }else{
            setCount(prevCount => prevCount-1)
        }  
    }
    return(
        <div className='mini-box'>
            <div style={resultBox}className='img-box'>
                <img style={result} className='img' src={Data[count].image}></img>
            </div>
            <h1 className='name'>{Data[count].name}</h1>
            <h3 className='job'>{Data[count].job}</h3>
            <p className='info'>{Data[count].text}</p>
            <div className='arrow'>
                <p onClick={Minus} className='left'>{"<"}</p>
                <p onClick={Add} className='right'>{">"}</p>
            </div>
            <div className='suprise'>
            <button onClick={suprise}className='btn'>Suprise Me</button>
            </div>
        </div>
    )
}

export default Reviews