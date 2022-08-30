import React, { useEffect, useState } from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import EaTabs from './enterprisetabs';
import '../muicomponents/styles/splitter.css'

import { connect } from 'react-redux';



import { Resizable, ResizableBox } from 'react-resizable';



const Panelar = (props) => {

    let { language } = props;

    useEffect(() => {
        console.log("panelar", language);
    }, [language])

    return (
        <SplitterLayout percentage="true" secondaryInitialSize="20" customClassName='splitter'>
<<<<<<< HEAD


            <div>{props.lang}</div>
            <div><EaTabs lang={props.lang}/></div>


=======
            <div>EATabsAr: {language}</div>
            <div><EaTabs /></div>
>>>>>>> 8372cf607deef61d989233297f8e46fd234c90cb
        </SplitterLayout>
    );
}

const mapStateToProps = state => {
    return {
        language: state.language
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setLanguage: (lang) => {
            return dispatch({
                type: "TOGGLELANG",
                value: (lang == 'en') ? 'ar' : "en"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panelar)
