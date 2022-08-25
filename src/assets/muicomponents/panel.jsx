import React, { useEffect, useState } from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import EaTabs from './enterprisetabs';
import '../muicomponents/styles/splitter.css'



import { Resizable, ResizableBox } from 'react-resizable';



const Panel = (props) => {
//   const [width, setWidth] = useState(200)
//   const [height, setHeight] = useState(200)
  let { lang } = props;

//   const onResize = (event, { element, size, handle }) => {
//     setState({ width: size.width, height: size.height });
//   };

//   useEffect(() => {
//     console.log("lang", lang);
//   }, [lang])


  return (

    // <ResizableBox width={200} height={200} draggableOpts={{}}
    //   minConstraints={[100, 100]} maxConstraints={[300, 300]}  style={{ border: '2px solid red' }}>
    //   <span style={{ border: '2px solid red' }}>Contents</span>
    // </ResizableBox>


    // <Resizable height={height} width={width} onResize={(e) => onResize()}>
    //   <div className="box" style={{ width: this.state.width + 'px', height: this.state.height + 'px' }}>
    //     <span>Contents</span>
    //   </div>
    // </Resizable>


    // <div className='flex'>
    //   <div class="resize horizontal first">
    //     <div><EaTabs /></div>
    //   </div>
    //   <div class="second" >
    //     <p> en </p>
    //   </div>
    // </div>


    <SplitterLayout percentage="true" secondaryInitialSize='80' customClassName='splitter'>
          
            <div><EaTabs /></div>
            <div>{lang}</div>           

      </SplitterLayout>
      

   
  );
  }

export default Panel;