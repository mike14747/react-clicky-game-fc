import React from 'react';
import PropTypes from 'prop-types';
import './css/message.css';

const Message = ({ message }) => {
    return (
        <div className={'message text-center text-' + message.colorType}>
            <span className="message-span py-1 px-2 border border-secondary">
                {message.text}
            </span>
        </div>
    );
};

Message.propTypes = {
    message: PropTypes.object,
};

export default Message;
