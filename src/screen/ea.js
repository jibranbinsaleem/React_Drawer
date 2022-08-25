
import BasicTabs from '../assets/muicomponents/tabs';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';

const Ea = () => {
  const [lang, setLang] = useState('')

  const reducerData = useSelector(data => data);


  useEffect(() => {
    console.log('reducerData', reducerData);

    setLang(reducerData.language)
  }, [reducerData])

  return (


    <div>
        <BasicTabs lang={lang}/>


        
    </div>
  
  )
}

export default Ea
