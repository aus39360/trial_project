import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './CardList.css'


import { addNewCardActionCreator, getAllCardActionCreator, deleteItemActionCreator, editItem } from '../../actions/actionFilms'

class CardList extends Component {
    constructor(props){
        super(props);
        this.state = { name:'', description:'', color:'', isEditing: false}
    }

    componentDidMount() {
        this.props.getAllCardActionCreator()
    }
   
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
   
    handleClick = () => {
        this.props.addNewCardActionCreator(this.state) 
        this.setState({name:'', description:'', color:'', isEditing: false})
    }

    handleDeleteItem = (id) => ()=>{
        this.props.deleteItemActionCreator(id)
    }

    handleEditItem = (i) => ()=> {
        this.setState({id: i.id, name: i.name, description: i.description, color: i.color, isEditing: true})
    }
    handleSave = ()=> {
        this.props.editItem(this.state)
        this.setState({name:'', description:'', color:'', isEditing: false})
    }
    
    render() {
        const {films} = this.props
        const {name, description, color} = this.state
        const enabled = name.length > 0 && description.length > 0 && color.length > 0
        return(
            <div>
                <h1>Films:</h1>
                {this.props.loading && <div className="lds-ripple"><div></div><div></div></div>}
                {!this.props.loading && (
                    <ul>
                        {films.map(i => 
                            <li 
                                key={i.id} 
                                id={i.id}
                                className='card' 
                                style={{backgroundColor:`${i.color}`}}
                            >
                                    MOVIE title:{i.name} DESCRIPTION: {i.description}
                            <button onClick={this.handleEditItem(i)}>edit</button>
                            <button onClick={this.handleDeleteItem(i.id)}>DEL</button>
                            </li>
                        )}
                    </ul>
                )}
                <form>
                    <input                         
                        type='text'
                        placeholder='name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange} 
                    />
                    <input                         
                        type='text'
                        placeholder='description'
                        name='description'
                        value={this.state.description}
                        onChange={this.handleChange} 
                    />
                    <input                         
                        type='text'
                        placeholder='color'
                        name='color'
                        value={this.state.color}
                        onChange={this.handleChange} 
                    />
                </form>
                {this.state.isEditing ?
                <button onClick={this.handleSave} disabled={!enabled}>Save</button> :
                <button onClick={this.handleClick} disabled={!enabled}>Add film</button>}
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return  { films: state.films.items, loading: state.films.loading, error: state.films.error }
}

const mapDispatchToProps = (dispatch)=> bindActionCreators({addNewCardActionCreator, getAllCardActionCreator, deleteItemActionCreator, editItem}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CardList)