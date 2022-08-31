import React, { useEffect } from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import EaTabs from './enterprisetabs';
import '../muicomponents/styles/splitter.css'

import { connect } from 'react-redux';



// import { Resizable, ResizableBox } from 'react-resizable';



const Panelar = (props) => {

    let { language } = props;

    useEffect(() => {
        // console.log("panelar", language);
    }, [language])

    return (
        <SplitterLayout percentage={true} secondaryInitialSize={20} customClassName='splitter'>

            <div>EATabsAr: {language}</div>
            <div><EaTabs /></div>

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
                value: (lang === 'en') ? 'ar' : "en"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panelar)
