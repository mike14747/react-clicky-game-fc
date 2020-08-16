import React from 'react';
import PropTypes from 'prop-types';
import './css/pic.css';

const Pic = ({ id, image, alt, picClicked }) => {
    return (
        <div className="my-col img-div">
            <img className="img-styles" alt={alt} title={alt} src={'/images/presidents/' + image} onClick={() => picClicked(id)} />
        </div>
    );
};

Pic.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    alt: PropTypes.string,
    picClicked: PropTypes.func,
};

export default Pic;
