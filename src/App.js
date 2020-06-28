import React from "react";
import "./App.css";
import Title from './components/title';
import Input from './components/input';
import Layout from './components/layout';
import Button from './components/button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      tasks: []
    };
  }

  handleTaskChange = event => {
    this.setState({
      newTask: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let newTasks = this.state.tasks;
    newTasks.push(this.state.newTask);
    this.setState({
      newTask: "",
      tasks: newTasks
    });
  };

  handleDelete = (id) => {
    let newTasks = this.state.tasks;
    newTasks.splice(id, 1)
    this.setState({
      tasks: newTasks,
    })
  }

  render() {
    return (
      <Layout>
        <Title/>
        <Input />
        <Button/>
      </Layout>
     
    );
  }
}

export default App;