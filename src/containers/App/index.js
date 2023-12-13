import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ServicesPage from '../../pages/ServicesPage/ServicesPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import TeamPage from '../../pages/TeamPage/TeamPage';
import VacancicesPage from '../../pages/VacanciesPage/VacancicesPage.js';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import Sertificates from '../../pages/Sertificates/Sertificates.js';
import PassengerElevators from '../../pages/Productions/PassengerElevators/PassengerElevators.js';
import FreightElevators from '../../pages/Productions/FreightElevators/FreightElevators.js';
import CottegeElevatiors from '../../pages/Productions/CottegeElevatiors/CottegeElevatiors.js';
import SmallFreightElevators from '../../pages/Productions/SmallFreightElevators/SmallFreightElevators.js';
import PanoramicElevators from '../../pages/Productions/PanoramicElevators/PanoramicElevators.js';
import HospitalElevators from '../../pages/Productions/HospitalElevators/HospitalElevators.js';
import Excalators from '../../pages/Productions/Excalators/Excalators.js';
import Travelator from '../../pages/Productions/Travelator/Travelator.js';

import s from './style.pcss';

import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';

@withRouter
export default class App extends PureComponent {
  render() {
    return (
      <div className={s.app} onClick={this.handle}>
        <div className={s.content}>
          <Header />
          <Switch>
            <Route path="/about" component={AboutUsPage} />
            <Route path="/vacancies" component={VacancicesPage} />
            <Route path="/team" component={TeamPage} />
            <Route path="/contacts" component={ContactsPage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/sertificates" component={Sertificates} />
            <Route path="/production" component={PassengerElevators} />
            <Route path="/freightelevators" component={FreightElevators} />
            <Route path="/cottegeelevatiors" component={CottegeElevatiors} />
            <Route path="/smallfreightelevators" component={SmallFreightElevators} />
            <Route path="/panoramicelevators" component={PanoramicElevators} />
            <Route path="/hospitalelevators" component={HospitalElevators} />
            <Route path="/excalators" component={Excalators} />
            <Route path="/travelator" component={Travelator} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}
