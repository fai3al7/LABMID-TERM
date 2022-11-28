import Layout from "./compoents/layout";
import Footer from "./compoents/Footer"
import React from "react";
import MiddleBottom from "./compoents/Middlebottom";
import Mainsection from "./compoents/Mainsection";

function App() {
  return (
    <div>
   
   {/* <Routes> */}
{/* <Route path="/" element= {<Layout/>} />
<Route path="Toutnaments" element= {<Privacy/>} /> */}
<Layout/>
<Mainsection/>
<MiddleBottom/>
<Footer/>
{/* </Routes> */}
</div>

  );
}

export default App;
