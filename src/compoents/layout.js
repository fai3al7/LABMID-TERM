import React from 'react';
import "../css/grid.css";
import { Link } from 'react-router-dom';
export default function Layout() {
  const Mystyle={

    position:"relative",
    left:"70rem",
    // margintop:"10px"
    
  }
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-12' id='menu'>
         


                    <div className="navbar navbar-expand-sm bg-light ">
  {/* <a className="navbar-brand" href="/" style={{alignContent:"center"}}>FIFA</a> */}
 <h3 style={{textAlign:"center" , color:"blue"}}>FIFA</h3>

  
    
  
        <ul className="nav " style={Mystyle}>
            <li className="nav">
                <a className="nav-link" href="/">
                  Tickets
                </a>
            </li>
            <li className="nav">
                <a className="nav-link" href="/">
                  Contacts
                </a>
            </li>
            <li className="nav">
                <a className="nav-link" href="/">
                  Login
                </a>
            </li>
        </ul>
        
        
        
  
</div>
<nav className="header_topMenu__BIMXr" style={{color:"/2586BE"}} >
  <ul className='ff-px-32 ff-px-md-0 menu_menuDiv__FDD0e'>
    <li className='nav-item_linkLayout__PbtWX'>
      <div href='ff-mb-0 ff-px-0 ff-px-md-4 ff-px-lg-16 nav-item_menuItem__jPS76 nav-item_itemNoHighlight__qdNXs'
  >about fifa</div>
  
  
  </li>
  </ul>
 
  <ul className='ff-px-32 ff-px-md-0 menu_menuDiv__FDD0e'>
    <li className='nav-item_linkLayout__PbtWX'>
    <Link to='/Privacy'>
    Toutnaments
  </Link>
  
  
  </li>
  </ul>
  <ul className='ff-px-32 ff-px-md-0 menu_menuDiv__FDD0e'>
    <li className='nav-item_linkLayout__PbtWX'>
    <Link to='/Privacy'>
    Womens Football
  </Link>




  
  
  </li>
  </ul>
  <ul className='ff-px-32 ff-px-md-0 menu_menuDiv__FDD0e'>
    <li className='nav-item_linkLayout__PbtWX'>
      <div href='ff-mb-0 ff-px-0 ff-px-md-4 ff-px-lg-16 nav-item_menuItem__jPS76 nav-item_itemNoHighlight__qdNXs'
  >social impact</div>
  
  
  </li>
  </ul>
  
   <ul className='ff-px-32 ff-px-md-0 menu_menuDiv__FDD0e'>
    <li className='nav-item_linkLayout__PbtWX'>
      <div href='ff-mb-0 ff-px-0 ff-px-md-4 ff-px-lg-16 nav-item_menuItem__jPS76 nav-item_itemNoHighlight__qdNXs'
  >technical impact</div>
  
  
  </li>
  </ul>

  <ul className='ff-px-32 ff-px-md-0 menu_menuDiv__FDD0e'>
    <li className='nav-item_linkLayout__PbtWX'>
      <div href='ff-mb-0 ff-px-0 ff-px-md-4 ff-px-lg-16 nav-item_menuItem__jPS76 nav-item_itemNoHighlight__qdNXs'
  >Legal</div>
  
  
  </li>
  </ul>

  


</nav>
<hr />

            </div>
            </div>
            

            <div className='row'>
            <div className='col-lg-4' id='sidebar' style={{height: "auto"}}>
                <div>THIS IS FOR SUB HEADING </div>
            
            </div>
           <div className='col-lg-8 'id='main1' style={{height: ""}}>
                <div>This is sub component</div></div>
          

            </div>
     
        </div>

    
  )
}


// <div href='ff-mb-0 ff-px-0 ff-px-md-4 ff-px-lg-16 nav-item_menuItem__jPS76 nav-item_itemNoHighlight__qdNXs'
//   >Tournaments on FIFA</div>