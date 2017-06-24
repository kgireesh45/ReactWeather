var React= require('react');

var WeatherForm= React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var location= this.refs.location.value;
    if (location.length>0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
        <div>
          <form onSubmit={this.onSubmit}>
            <input type="text" ref="location"/>
            <button>Get Weather Button</button>
          </form>
        </div>
    );
  }
});
module.exports= WeatherForm;
