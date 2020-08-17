import React, { useContext } from 'react';
import './css/message.css';
import MessageContext from '../../../../context/messageContext';

const Message = () => {
    const message = useContext(MessageContext);
    return (
        <div className={'message text-center text-' + message.colorType}>
            <div className="message-div d-inline-block py-1 px-1 border border-secondary">
                {message.text}
                {message.subText &&
                    <div className="small text-dark">{message.subText}</div>
                }
            </div>
        </div>
    );
};

export default Message;
