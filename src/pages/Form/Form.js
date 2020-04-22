import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addNewUserActionCreator } from '../../actions/actionUsers'
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
        if(this.props.me.name ){
        return <h1 className='successful-registration'>Hi, {this.props.me.name}!</h1>
        } else {
            return(
            <div>
                <h2 className='registration-header'>Registration</h2>
                {this.props.loading && <div className="lds-ripple"><div></div><div></div></div>}
                {!this.props.loading && (
                <form onSubmit={this.handleSubmit} className='registration-form'> 
                    <div>
                        <input 
                            className='registration-input__username'
                            type='text'
                            placeholder='username'
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <input 
                            className='registration-input__pass'
                            type='password'
                            placeholder='password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className='registration-btn' disabled={!enabled}>Submit</button>
                </form>
                )}
            </div>
        )}
    }
}
export default connect((state)=>{
    return {users: state.users.items, loading: state.users.loading, me: state.me}
}, { addNewUserActionCreator })(Form)