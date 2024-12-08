import React, { useState } from 'react';

const DragAndDrop = () => {
  const [cards, setCards] = useState(['Card 1', 'Card 2', 'Card 3', 'Card 4']);
  const [dropBox, setDropBox] = useState([]);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData('text/plain', card);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow drop by preventing the default behavior
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const card = e.dataTransfer.getData('text/plain');

    // Add card to dropBox and remove it from cards
    setDropBox((prev) => [...prev, card]);
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          border: '1px solid #ccc',
          padding: '10px',
          width: '70%',
        }}
      >
        {cards.map((card) => (
          <div
            key={card}
            draggable
            onDragStart={(e) => handleDragStart(e, card)}
            style={{
              padding: '10px',
              border: '1px solid #000',
              backgroundColor: '#f0f0f0',
              textAlign: 'center',
              cursor: 'grab',
            }}
          >
            {card}
          </div>
        ))}
      </div>

      {/* Drop Box */}
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          width: '25%',
          minHeight: '200px',
          border: '2px dashed #000',
          padding: '10px',
          textAlign: 'center',
        }}
      >
        <p>Drop here</p>
        {dropBox.map((card, index) => (
          <div
            key={index}
            style={{
              padding: '10px',
              border: '1px solid #000',
              backgroundColor: '#e0e0e0',
              textAlign: 'center',
              marginBottom: '10px',
            }}
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDrop;
