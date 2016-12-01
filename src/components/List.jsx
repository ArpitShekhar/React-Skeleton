var React = require("react");
var ListItem = require("./ListItem.jsx");

//data source
var ingredients = [{"id":1,"text":"chawal"},
                   {"id":2,"text":"roti"},
                   {"id":3,"text":"sabji"}];

var List = React.createClass({
  render : function(){
    var listItems = ingredients.map(function(item){
      return <ListItem key={item.id} ingredient={item.text}/>;
    });
    return (
      <ul>{listItems}</ul>
    );
  }
});

module.exports = List;
