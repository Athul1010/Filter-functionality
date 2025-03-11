import React from 'react';

const Vunet = () => {
    const cards = Array.from({ length: 20 }); // Create an array with 20 items

    // Inline styles
    const cardSectionStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
    };

    const cardStyle = {
        border: '1px solid black',
        padding: '10px',
        textAlign: 'center',
    };

    return (
        <div style={cardSectionStyle}>
            {cards.map((_, index) => (
                <div key={index} style={cardStyle}>
                    <p>Card{index + 1}</p>
                </div>
            ))}
        </div>
    );
};

export default Vunet;
