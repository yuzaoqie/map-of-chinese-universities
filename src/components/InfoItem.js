import React from 'react';

const InfoItem = ({ h3Text, pText }) => {
    return (
        <div className="mt-4 ml-4">
            <h3 className="inline">{h3Text}</h3>
            <p className="inline">{pText}</p>
        </div>
    );
};

export default InfoItem;