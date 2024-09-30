// src/components/DragDropUI.js
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ARItem = ({ type, children }) => {
  const [, dragRef] = useDrag({
    type,
    item: { type }
  });
  return (
    <div ref={dragRef} style={{ padding: '8px', background: 'lightgray', margin: '4px' }}>
      {children}
    </div>
  );
};

const DropArea = ({ onDrop }) => {
  const [, dropRef] = useDrop({
    accept: 'AR_ITEM',
    drop: (item) => onDrop(item.type),
  });
  return (
    <div ref={dropRef} style={{ width: '100%', height: '200px', border: '2px dashed gray' }}>
      Drop AR Objects Here
    </div>
  );
};

const DragDropUI = ({ onAddObject }) => {
  return (
    <div>
      <h2>Drag & Drop AR Components</h2>
      <ARItem type="Box">Box</ARItem>
      <ARItem type="Sphere">Sphere</ARItem>
      <DropArea onDrop={onAddObject} />
    </div>
  );
};

export default DragDropUI;
