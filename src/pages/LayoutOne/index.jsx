import React, { useState } from 'react';
import LongContent from '../../components/LongContent';
import './index.scoped.scss';

/**
 * Use flex
 */
const LayoutOne = () => {
  const [isLongContent, setIsLongContent] = useState(false);
  const toggleContent = () => setIsLongContent((prev) => !prev);

  const content = isLongContent ? <LongContent /> : null;

  return (
    <>
      <div className="wrapper">
        <header>{content}</header>
        <section>
          <aside>{content}</aside>
          <main>{content}</main>
        </section>
        <footer>{content}</footer>
      </div>
      <button type="button" onClick={toggleContent}>
        toggle content for testing
      </button>
    </>
  );
};

export default LayoutOne;
