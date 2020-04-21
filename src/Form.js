import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addNewUserActionCreator } from './actions/actionUsers'
import './Form.css'


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { name:'', password:''}

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewUserActionCreator(this.state)
        this.setState({ name:'', password:''})
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {name, password} = this.state
        const enabled = name.length > 0 && password.length > 0
        return(
            <div>
                <h1>registration</h1>
                {this.props.loading && <div className="lds-ripple"><div></div><div></div></div>}
                {!this.props.loading && (
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
                    <button disabled={!enabled}>Submit</button>
                </form>
                )}
            </div>
        )
    }
}
export default connect((state)=>{
    return {users: state.users.items, loading: state.users.loading}
}, { addNewUserActionCreator })(Form)