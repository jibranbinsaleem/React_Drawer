import React from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import EaTabs from './enterprisetabs';

const Panel = () => {
  return (

    <SplitterLayout percentage="true" secondaryInitialSize="80">
        <div><EaTabs /></div>
        <div>Pane 2</div>
      </SplitterLayout>
  );
};

export default Panel