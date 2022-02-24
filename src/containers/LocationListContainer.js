import PropTypes from 'prop-types'
import React, { Component } from 'react'
import LocationList from '../components/LocationList'
import { connect } from 'react-redux';
import { setCity } from '../actions';




class LocationListContainer extends Component {


    handleSelectedLocation = city => {
        
        console.log(`handleSelectedLocation ${city}`);

        this.props.setCity(city)
    }




    render() {
        return (
            <LocationList cities={cities}
                onSelectedLocation={this.handleSelectedLocation} ></LocationList>
        )
    }
}




LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
}

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setCity(value))
})


export default connect(null, mapDispatchToProps)(LocationListContainer);