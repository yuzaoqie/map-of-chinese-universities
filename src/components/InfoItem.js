import React from 'react';

const InfoItem = ({ h3Text, pText }) => {
    return (
        <div className="mt-4 ml-4">
            <h3 className="inline text-textTable-white font-bold text-lg">{h3Text}</h3>
            <p className="inline text-textTable-white">{pText}</p>
        </div>
    );
};

export default InfoItem;