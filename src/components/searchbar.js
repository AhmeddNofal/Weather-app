import React, {Component} from 'react';
import {connect} from 'react-redux';
import {search} from '../store/actions/searchAction';


class Search extends Component {
    state = {
        location:''
    }

    handleChange = (e) => {
        this.setState({
            location: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
      //  console.log(this.state);
      this.props.readLocation(this.state);
      
    }

    render() {
        return(
        <form className="form" onSubmit={this.handleSubmit}>
            <input className="searchBar" type="text" placeholder="Search..." onChange={this.handleChange}></input>
            <button className="bten"><i class="material-icons sic">search</i></button>
        </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
    readLocation: (location) => dispatch(search(location))
    }
}

export default connect(null,mapDispatchToProps)(Search);