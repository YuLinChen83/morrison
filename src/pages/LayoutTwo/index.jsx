import React, { useState } from 'react';
import LongContent from '../../components/LongContent';
import './index.scoped.scss';

/**
 * Use grid
 */
const LayoutOne = () => {
  const [isLongContent, setIsLongContent] = useState(false);
  const toggleContent = () => setIsLongContent((prev) => !prev);

  const content = isLongContent ? <LongContent /> : null;

  return (
    <>
      <div className="wrapper">
        <header>{content}</header>
        <aside>{content}</aside>
        <main>{content} </main>
        <footer>{content}</footer>
      </div>
      <button type="button" onClick={toggleContent}>
        toggle content for testing
      </button>
    </>
  );
};

export default LayoutOne;
