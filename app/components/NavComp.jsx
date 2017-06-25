var React= require('react');
var {Link, IndexLink} = require ('react-router');

var NavComp = (props)=> {
  return(
    <div>
    <h3>Nav Component</h3>
    <h4>This is Nav Component</h4>
    <h5>This is for 2nd commit</h5>
    <h5>This is for 3rd commit</h5>
    <IndexLink  activeClassname="active" to='/' activeStyle={{fontWeight:'bold'}} >Weather</IndexLink>
    <IndexLink   activeClassname="active" to='/About'  activeStyle={{fontWeight:'bold'}}>About</IndexLink>
    <IndexLink  activeClassname="active" to='/examples'  activeStyle={{fontWeight:'bold'}}>Examples</IndexLink>
    </div>
  );
}
module.exports= NavComp;
