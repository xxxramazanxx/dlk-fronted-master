import { PureComponent } from "react";
import s from './DeliveryClients.module.css'
import image from '../../public/img/card.png';

export default class DeliveryClients extends PureComponent {
  render() {
    return (
      <section className="aboutus-delivery">
        <div className="delivery-box">
          <div className="delivery-info">
            <h3 className="aboutaus-delivery-title">
              Работаем по всему Кавказу
            </h3>

            <h4>Доставка</h4>
            <p>
              Мы занимается формированием дилерской сети и приглашаем вас стать
              нашим партнерам на выгодных условиях для сотрудничества.
            </p>
            <p>
              Мы даем вам возможность расширить ассортимент лифтового
              оборудования, которое вы можете предложить своим клиентам.{' '}
            </p>
          </div>
          <div className="delivery-image">
            <img src={image} alt="image" />
          </div>
        </div>
      </section>
    );
  }
}
