import React, { PureComponent } from 'react';
import Header from '../../containers/Header';
import HeaderBlock from '../../components/HeaderBlock/HeaderBlock';
import Footer from '../../containers/Footer';
import Image from '../../image/team/team1.jpg';

import s from './TeamPage.module.css';

const Teams = [
  {
    id: 1,
    imageURL: Image,
    firstName: 'Ivan',
    lastName: 'Ivanov',
    job: 'President',
  },
  {
    id: 2,
    imageURL: Image,
    firstName: 'Ivan',
    lastName: 'Ivanov',
    job: 'President',
  },
  {
    id: 3,
    imageURL: Image,
    firstName: 'Ivan',
    lastName: 'Ivanov',
    job: 'President',
  },
  {
    id: 4,
    imageURL: Image,
    firstName: 'Ramazan',
    lastName: 'Ivanov',
    job: 'President',
  },
  {
    id: 5,
    imageURL: Image,
    firstName: 'Ivan',
    lastName: 'Ivanov',
    job: 'President',
  },
];

export default class TeamPage extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <HeaderBlock />

        <section className="team-wrapper">
          <h1>Команда</h1>
          <div className="team-box">
            {Teams.map((item) => {
              return (
                <div className="team-item" key={item.id}>
                  <img src={item.imageURL} alt="image" />
                  <div>
                    <span>{item.firstName}</span>
                    <span>{item.lastName}</span>
                    <p>{item.job}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}
