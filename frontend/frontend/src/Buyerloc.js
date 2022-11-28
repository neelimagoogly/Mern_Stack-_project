import React, {Component} from 'react';
import axios from 'axios';

export default class Buyerloc extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
      
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_completed}`);

        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            
            todo_completed: this.state.todo_completed
        }

        axios.post('https://backendagrofam.herokuapp.com/orders/add5', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todo_description: '',
            todo_responsible: '',
            
            todo_completed: false
        })
    }

    render() {
        return (
            
            <div style={{marginTop: 120}}>
                <h3>Order Details</h3>
                <form onSubmit={this.onSubmit} className="form-container">
                    <div className="form-group">
                        <label>Your username: </label>
                        <input  type="text"
                                className="input-text"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Your Address: </label>
                        <input  type="text"
                                className="input-text"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <label>Seller's name: </label>
                        <input  type="text"
                                className="input-text"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>

                    <div className="form-group">
                        <label>Commodity: </label>
                        <input  type="text"
                                className="input-text"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Submit" className="button-73" />
                    </div>
                </form>
            </div>
        )
    }
}