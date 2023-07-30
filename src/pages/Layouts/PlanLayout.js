// ==CONCEPTS==
// -> In this app , we will have separate laypout styles so for logged out users the structure of page will be different and for logged out page the structure of the page will be different
import React from 'react'
function PlanLayout({children}) {
  return (
    <div style={{width: "100%", margin: "auto"}}>
     {/* now all the children components will go inside of it and thus if you want to style using parentts component something onto the components this is how its done here child component in app.js will be welcome.js as done
      */} 
      {children} 
    </div>
  );
}

export default PlanLayout
