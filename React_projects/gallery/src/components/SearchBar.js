import React from 'react';

class SearchBar extends React.Component{

    state = {term:'Enter Here'};

    onFormSubmit = (event)=>{

        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Name</label>
                        <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={(event)=>this.setState({term:event.target.value})}/>
                    </div>
                </form>
            </div>
            );
    }
}

export default SearchBar;