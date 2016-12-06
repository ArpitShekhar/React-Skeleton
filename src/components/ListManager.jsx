var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  getInitialState: function(){
    return ({items : [], newItem:""});
  },
  onChangeHandler: function(e){
    this.setState({newItem : e.target.value});
  },
  onSubmitHandler: function(e){
    e.preventDefault();

    var currentItems = this.state.items;
    currentItems.push(this.state.newItem);
    this.setState({items: currentItems, newItem : ''})
  },
  render: function(){
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.onSubmitHandler}>
          <input onChange={this.onChangeHandler} value={this.state.newItem}/>
          <button>Add</button>
        </form>
        <List items={this.state.items}/>
      </div>
    );

  }
});

module.exports = ListManager;
