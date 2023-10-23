import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import ServicesPage from '../../pages/ServicesPage/ServicesPage'
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import TeamPage from '../../pages/TeamPage/TeamPage';
import VacancicesPage from '../../pages/VacanciesPage/VacancicesPage.js'
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage'

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
          <AboutUsPage/>
          {/* <VacancicesPage/> */}
          {/* <TeamPage/> */}
          {/* <ContactsPage/> */}
          {/* <ServicesPage/> */}
          {/* <Header />
          <Home />
          <Footer /> */}
        </div>
      </div>
    );
  }
}
