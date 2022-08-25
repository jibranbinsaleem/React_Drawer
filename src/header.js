import React from 'react'

const Header = () => {
  var language = 'en'
  language = window.localStorage.getItem('lang');

  console.log(language)
  const [lang, setLang] = useState('en');
  

  const changelang = () => {

    console.log("langchange");
    lang === 'en' ? setLang('ar') : setLang("en");






  }

  const [Page, setPage] = useState("Home");

  const changepage = (text) => {
    console.log(text);
    setPage(text)
  };

  const [drawer, setDrawer] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawer({ ...drawer, [anchor]: open });
    console.log(drawer)
  };

  return (
    <div><Helmet htmlAttributes={{
        lang: lang,
        dir: lang === 'en' ? 'ltr' : 'rtl'
      }} />

      <ButtonAppBar changelang={changelang} text={Page} toggleDrawer={toggleDrawer} changepage={changepage} />
      <TemporaryDrawer lang={lang} changepage={changepage} state={drawer} toggleDrawer={toggleDrawer} /></div>
  )
}

export default Header