import {useEffect, useState} from "react";
import { useScroll } from "react-use-gesture";
export  const Scroll = ()=>{
    const [max,setMax] = useState(25)
    var arr = [];
    var i = 0;
        while(i<=max){
            arr.push(i);
            i++
        }
        window.addEventListener("scroll",()=>{
            if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight){
                setMax(max*2)
                
            }
        })

    
   
    return (
       <div>
           <h1 id = "head">Infinite Scrolling</h1>
        <div >{arr.map((e)=>{
            return <div  className = "move">Masai School {e}</div>
        })}</div>
        </div>
        
    )

    
    
  }