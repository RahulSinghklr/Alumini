import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

import "./Header.css";


function Header(){
  const [DisplayPresent1,setDisplayPresent1]=useState('none')
  const [DisplayPresent2,setDisplayPresent2]=useState(false)
  function Onclick(){
    if(DisplayPresent1==='none'){
      setDisplayPresent1('block');
    }else{
      setDisplayPresent1('none');
    }
  }
  function Onhamclick(){
   if(DisplayPresent2===false){
     setDisplayPresent2(true);
   }
   else{
    setDisplayPresent2(false);
   }
  }



    return(

<div>
  
<div className="header">

<div className="hamborgerlogoresponsive">

   <div className="nitlogodiv">
  <span className="CollegeName">NITSXR</span><span ><b>ALUMINI</b></span>
  </div>

   <div className="hamburgerBox" onClick={Onhamclick}>
   <span>
    <div className="hamburger"></div>
    <div className="hamburger"></div>
   <div className="hamburger"></div>
 </span>
   </div>

</div>


<div className={DisplayPresent2?"hamburgerresponsivedatashow":"hamburgerresponsivedata"}>

<div className="menu">


  <ul  className="upperul">

    <li >
      <Link to="/" className="upper">Home</Link>
      </li>
    <a href="#" style={{textDecoration:'none',color:'inherit'  }}>

    <li onClick={Onclick}><Link to="/Events" style={{textDecoration:'none'}} className="upper">Events</Link> <span style={{fontSize:'1.2rem'}} id='btn'  onClick={Onclick}>&#9660;</span>

     <ul style={{display:DisplayPresent1,zIndex:1,position:'absolute',border:'1px solid grey',borderRadius:'5px', backgroundColor:'white',width:'10rem',textAlign:'center',boxShadow: '0px 8px 16px 0px black'}}>

       <li style={{padding:'0.6rem',fontSize:'1rem',color:'black'}}>
         <Link to="/UpcommingEvents" style={{textDecoration:'none'}}>Meet'22</Link>
       </li>

       <hr  style={{height:'1px',backgroundColor:'grey'}}/>

       <li style={{padding:'0.6rem',fontSize:'1rem',color:'black'}}>
         <Link to="/PastEvents" style={{textDecoration:'none',color:'black'}}>Past Events</Link>
         </li>

     </ul>

    </li>

    </a>

    <li >
      <Link to="/Role" className="upper">Role</Link>
      </li>
  </ul>

</div>


<div className="registerbtn">
  <button className="btn">Register Now</button>
</div>


</div>
</div>
</div>
    )
}
export default Header;