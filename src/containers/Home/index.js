import React, { PureComponent } from 'react';
import MainBrand from '../../components/MainBrand';
import HomeAdvantages from '../../components/HomeAdvantages';
import ProductTypes from '../../components/ProductTypes';
import ApplicationForCalculation from '../../components/ApplicationForCalculation';
import CompanyNumber from '../../components/CompanyNumber';
import MainPageScreenCompany from '../../components/MainPageScreenCompany';
import AdvantageScreen from '../../components/AdvantageScreen';
import HomeCompanyFace from '../../components/HomeCompanyFace';
import HomeRegions from '../../components/HomeRegions';
import Clietns from '../../components/HomeClients';
import SubscribeHome from '../../components/SubscribeHome';
import Objects from '../../components/Objects';
import HomeSlide from '../../components/HomeSlide';


export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <HomeSlide />
        <HomeAdvantages />
        <ProductTypes />
        <ApplicationForCalculation />
        <CompanyNumber />
        <MainBrand />
        <MainPageScreenCompany />
        <Objects />
        <HomeCompanyFace />
        <AdvantageScreen />
        <HomeRegions />
        <Clietns />
        <SubscribeHome />
      </div>
    );
  }
}
