import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

onChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  });
}

handleSubmit= (e) => {
  e.preventDefault();
  const { title } = this.state;
  if (title.trim()) {
    this.props.addTodoProps(title);
    this.setState({
      title: '',
    });
  } else {
    alert('Please write item');
  }
}

render() {
  return (
    <form onSubmit={this.handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo.."
        value={this.state.title}
        name="title"
        onChange={this.onChange}
      />
      <button type="submit" className="input-submit">Submit</button>
    </form>
  );
}
}

export default InputTodo;
