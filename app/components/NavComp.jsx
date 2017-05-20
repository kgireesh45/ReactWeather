var React= require('react');
var {Link, IndexLink} = require ('react-router');

var NavComp = (props)=> {
  return(
    <div>
    <h3>This is from Nav Component</h3>
    <IndexLink  activeClassname="active" to='/' activeStyle={{fontWeight:'bold'}} >Weather</IndexLink>
    <IndexLink   activeClassname="active" to='/About'  activeStyle={{fontWeight:'bold'}}>About</IndexLink>
    <IndexLink  activeClassname="active" to='/examples'  activeStyle={{fontWeight:'bold'}}>Examples</IndexLink>
    </div>
  );
}
module.exports= NavComp;
