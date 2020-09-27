import React from 'react';
import PropTypes from 'prop-types';

const Greeting = (props) => {
    return (
        <div>
            <h1>Hi {props.name}</h1>
        </div>
    );
}

// default value for props
Greeting.defaultProps = {
    name: 'default name!',
}

// set props type
Greeting.propTypes = {
    name: PropTypes.string.isRequired,
};
export default Greeting;