import React, { PureComponent } from 'react';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import HeaderBlock from '../../components/HeaderBlock/HeaderBlock';
import Objects from '../../components/Objects';
import s from './AboutUsPage.module.css';

export default class ContactsPage extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <HeaderBlock />
        <section className='aboutus-wrapper'> 
        
        </section>

        <Footer />
      </div>
    );
  }
}
