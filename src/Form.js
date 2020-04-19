import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tryToLoginActionCreator } from './actions/actionUsers'


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { name:'', password:''}

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.tryToLoginActionCreator(this.state)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return(
            <div>
                <h1>registration</h1>
                <form onSubmit={this.handleSubmit}> 
                    <label>User name:</label>
                    <input 
                        type='text'
                        placeholder='username'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label>password:</label>
                    <input 
                        type='password'
                        placeholder='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <input type='checkbox' /> remember me
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default connect((state)=>{
  
    return {}
}, { tryToLoginActionCreator })(Form)