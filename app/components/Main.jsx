var React= require('react');
var NavComp = require ('NavComp');

var Main = (props)=>{
  return(
    <div>
    <NavComp/>
    <h2>Main component</h2>
    {props.children}

     </div>
  );
}
module.exports= Main;
