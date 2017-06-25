var React= require('react');
var NavComp = require ('NavComp');

var Main = (props)=>{
  return(
    <div>
    <NavComp/>
    <h2>Main component</h2>
    {props.children}
    <h2>This is for source tree</h2>
  <h2>This is for source tree</h2>

     </div>
  );
}
module.exports= Main;
