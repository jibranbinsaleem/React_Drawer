import React, { useEffect } from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import EaTabs from './enterprisetabs';
import '../muicomponents/styles/splitter.css'

const Panel = (props) => {

  let { lang } = props;

  useEffect(() => {
    console.log("lang", lang);
  }, [lang])


    return (

<div class="resize horizontal"><div><EaTabs /></div>
               <div>{lang}</div></div>

      // // <SplitterLayout percentage="true" secondaryInitialSize={(lang == 'en' ? '80' : '20')} customClassName='splitter'>
      //   {/* {
      //     (lang == 'en') ?
      //       <>
      //         <div><EaTabs /></div>
      //         <div>{lang}</div>
      //       </> :
      //       <>
      //         <div><EaTabs /></div>
      //         <div>{lang}</div>
      //       </>
      //   } */}
      //   <>
      //     {/* <div><EaTabs /></div>
      //     <div>{lang}</div> */}
      //   </>

      // {/* </SplitterLayout> */}
    );
  //   else if(lang==='ar'){

  //   return (

  //     <SplitterLayout percentage="true" secondaryInitialSize="20" customClassName='splitter'>

  //           <div>{lang}</div>
  //           <div><EaTabs /></div>  



  //       </SplitterLayout>
  //   );
  // }
};

export default Panel