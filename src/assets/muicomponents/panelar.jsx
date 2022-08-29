import React, { useEffect, useState } from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import EaTabs from './enterprisetabs';
import '../muicomponents/styles/splitter.css'

import { useSelector, useDispatch } from 'react-redux';



import { Resizable, ResizableBox } from 'react-resizable';



const Panelar = (props) => {

    const reducer = useSelector(state => state)
    const [lang, setLang] = useState('')
    // let { lang } = props;

    useEffect(() => {

        console.log("arabic:", reducer.language);
        setLang(reducer.language)
    }, [reducer])
    
    return (
        <SplitterLayout percentage="true" secondaryInitialSize="20" customClassName='splitter'>


            <div>{props.lang}</div>
            <div><EaTabs lang={props.lang}/></div>


        </SplitterLayout>



    );
}

export default Panelar;