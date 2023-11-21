import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ServicesPage from '../../pages/ServicesPage/ServicesPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import TeamPage from '../../pages/TeamPage/TeamPage';
import VacancicesPage from '../../pages/VacanciesPage/VacancicesPage.js';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import Sertificates from '../../pages/Sertificates/Sertificates.js';

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
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}
