import React from 'react'

import card1 from "../compoents/card3.webp"
import card2 from "../compoents/card2.webp"
import card3 from "../compoents/card1.webp"
// import "./table.css"

export default function Mainsection() {
    const Card =([
        { title:"First Match", cont:"fsk;fhksdfnhkdsnhfklsdfk" , Image:card1},
        { title:"second Match", cont:"fsaludfglskdhfkulads",Image:card2 },
        { title:"Third  Match", cont:"fsajdfyglasjdhf", Image:card3},
        { title:"Fourth Match", cont:"fsajdfyglasjdhf", Image:card3}
// const News =()

// const state,setstate= use state()
// <Footer state= {state}



])



const News=([
    {img: card1  , describe: "aa"},
    {img:  card2 , describe: "aa"},
    {img:   card3, describe: "aa"},
    {img:   card1, describe: "aa"},
    {img:   card2, describe: "aa"},
    {img:   card3, describe: "aa"},
    
])
const handledelete =()=>{
    const filteredData = News.map(News => News.img!= Image)
}
const Mystyle={
    width:"200px",
    height:"150px",
    display:"inline-block",
    padding: "20px",
    margin:"40px"
    
    // margin:"auto"
}


const MenTable = [
    { rk: 1,name: "Germany", score: 100 },
    {  rk: 2, name: "France",score: 100 },
    {  rk: 3,name: "Italy", score: 100},
    {  rk: 4,name: "USA", score: 100},
    {  rk: 5,name: "England", score: 100},
    ]
  return (
    <div className="a">
    <div className='row'>
<div className='col-lg-6'>
        


{Card.map((item) => (



<div class="card" style={{width: "18rem", backgroundcolor:"light-blue",  display:'inline-block',backgroundColor: '#2586BE', color:"white"}}>
<img class="card-img-top" src={item.Image} alt="Card image cap"/>
<div class="card-body">

<h5 class="card-title">{item.title}</h5>
  

</div>


</div>
))}
    


        </div>

   <div className='col-lg-6'>
{Card.map((item) => (



        <div class="card" style={{width: "18rem", backgroundcolor:"light-blue",  display:'inline-block',backgroundColor: '#2586BE', color:"white"}}>
  <img class="card-img-top" src={item.Image} alt="Card image cap"/>
  <div class="card-body">
    
    <h5 class="card-title">{item.title}</h5>
    <a href="#" class="btn btn-primary" onClick={()=>handledelete(News.Image)}>Delete</a>  
    </div>

   
    </div>
    ))}






<div className='row'>
    More
</div>
<hr />

{News.map((data) => (



<div class="card1" style={Mystyle} >
<img class="card-img-top" src={data.img} alt="Card image cap"/>
    <p style={{position:" inline"}}>{data.describe}</p>
    {/* <h5 class="card-text" style={{position:"inline"}}>{data.describe}</h5> */}
    </div>

/* <p class="card-description">{data.describe}</p> */


))}



</div>


</div>


</div>

)}
