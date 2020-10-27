import React from 'react';
import './App.css';
import HomePage from './components/pages/Home/HomePage';
import DespreNoiPage from './components/pages/DespreNoi/DespreNoiPage'
import ServiciiPage from './components/pages/Servicii/ServiciiPage'
import ContactPage from './components/pages/Contact/ContactPage'
import {BrowserRouter as Router,Switch,Route,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar/NavigationBar';
import Footer from './components/ReusableSections/footer/footer';
import ScrollToTop from './components/scrollToTop'
import ProiectareInstalatiiElectricePage from './components/pages/Servicii/ProiectareInstalatiiElectricePage'
import ExecutareInstalatiiElectricePage from './components/pages/Servicii/ExecutareInstalatiiElectricePage'
import BransamenteInstalatiiElectricePage from './components/pages/Servicii/BransamenteInstalatiiElectricePage'
import AutomatizariKNXPage from './components/pages/Servicii/AutomatizariKNXPage'
import ExecutieSiMasuratoriPRAMPage from './components/pages/Servicii/ExecutieSiMasuratoriPRAMPage'
import SistemeDeSupraveghereSiAntiefractiePage from './components/pages/Servicii/SistemeDeSupraveghereSiAntiefractiePage'
import MentenantaSiReviziiPage from './components/pages/Servicii/MentenantaSiReviziiPage'
import SistemeFotovoltaicePage from './components/pages/Servicii/SistemeFotovoltaicePage'
const App = () => {

    return (
      <Router >
      <ScrollToTop >
          <NavigationBar />
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/Despre-Noi' component={DespreNoiPage} exact />
            <Route path='/Servicii' component={ServiciiPage} exact />
            <Route path='/servicii-proiectare-instalatii-electrice' component={ProiectareInstalatiiElectricePage} exact />
            <Route path='/servicii-executare-instalatii-electrice' component={ExecutareInstalatiiElectricePage} exact />
            <Route path='/servicii-bransamente-instalatii-electrice' component={BransamenteInstalatiiElectricePage} exact />
            <Route path='/servicii-automatizari-knx' component={AutomatizariKNXPage} exact />
            <Route path='/servicii-executie-si-masuratori-PRAM' component={ExecutieSiMasuratoriPRAMPage} exact />
            <Route path='/servicii-sisteme-supraveghere-si-antiefractie' component={SistemeDeSupraveghereSiAntiefractiePage} exact />
            <Route path='/servicii-mentenanta-si-revizii-instalatii-electrice' component={MentenantaSiReviziiPage} exact />
            <Route path='/servicii-sisteme-fotovoltaice' component={SistemeFotovoltaicePage} exact />
            <Route path='/Contact' component={ContactPage} exact />
          </Switch>
          <Footer />
      </ScrollToTop>
      </Router>
    );    
}

export default App;
