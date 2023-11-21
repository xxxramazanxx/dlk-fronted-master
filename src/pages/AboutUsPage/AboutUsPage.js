import React, { PureComponent } from 'react';
import Header from '../../containers/Header';
import HeaderBlock from '../../components/HeaderBlock/HeaderBlock';
import HomeClients from '../../components/HomeClients';
import Slider from 'react-slick';
import s from './AboutUsPage.module.css';

import Award from '../../public/img/icon/award.png';
import Sertif from '../../public/img/icon/certificate.png';

import Slide1 from '../../public/img/slider/1.jpg';
import Slide2 from '../../public/img/slider/2.jpg';
import Slide3 from '../../public/img/slider/3.jpg';
import Slide4 from '../../public/img/slider/4.jpg';
import Slide5 from '../../public/img/slider/5.jpg';
import Lift from '../../public/img/Lift.png';
import image from '../../public/img/card.png';


export default class ContactsPage extends PureComponent {
  render() {
    const settings = {
      dots: false,
      arrow: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Header />
        <HeaderBlock />
        <section className="aboutus-wrapper">
          <div className="aboutus-infobox">
            <div className="aboutus-info">
              <h1>
                ООО «Дагестанской лифтовая компания» — один из лидеров на
                лифтовом рынке Кавказа с 2004 года.
              </h1>
              <p>
                Мы оказываем полный цикл услуг, связанных с подъемным
                оборудованием: подбор и поставка лифтов и эскалаторов, их
                монтаж, диспетчеризация, техническое обслуживание и
                модернизация, полная замена, а также обеспечение запасными
                частями.
              </p>
              <p>
                ООО «ДЛК» — многолетний авторизованный дистрибьютор и
                представитель в Сибирском регионе таких производителей лифтового
                оборудования, как: KONE, Hidral, Щербинский лифтостроительный
                завод (ЩЛЗ).
              </p>
              <p>
                География нашей деятельности включает в себя Новосибирскую,
                Томскую, Омскую, Кемеровскую области, Алтайский край и
                республика Алтай.
              </p>
            </div>
            <div className="aboutus-sertif">
              <img className="image-awards" src={Award} alt="image" />
              <img className="image-sertif" src={Sertif} alt="image" />
              <p>
                СМК предприятия соответствует <br /> международным стандартам
                качества
              </p>
              <a href="/">Сертификаты</a>
            </div>
          </div>
        </section>

        <section className="aboutus-slider">
          <div>
            <h2> Lazy Load</h2>
            <Slider {...settings}>
              <div>
                <img src={Slide1} />
              </div>
              <div>
                <img src={Slide2} />
              </div>
              <div>
                <img src={Slide3} />
              </div>
              <div>
                <img src={Slide4} />
              </div>
              <div>
                <img src={Slide5} />
              </div>
            </Slider>
          </div>
        </section>

        <section className="history-wrapper">
          <div className="history-box">
            <h2 className="history-title">История развития</h2>
            <span className="history-span">2008 год</span>
            <p className="history-p">
              Создание компании по проектированию лифтового оборудования
              инженерами-профессионалами, выпускниками Московского
              государственного технического университета имени Н.Э.Баумана
            </p>
            <span className="history-span">2009 год</span>
            <p className="history-p">
              Организованы круглосуточная диспетчерская и аварийная службы,
              подразделение для активного участия в государственных торгах.
              Компания получает статус официального дилера европейских
              производителей: MP Lifts (Испания), SEC (Словакия), IGV (Италия) и
              Vestner (Германия).
            </p>
            <span className="history-span">2010 год</span>
            <p className="history-p">
              Начало развития региональной сети, открытие первого филиала в
              г.Иваново.
            </p>
            <span className="history-span">2011-2014 годы</span>
            <p className="history-p">
              Активный рост и развитие Группы компаний.
            </p>
            <span className="history-span">2015-12016 годы</span>
            <p className="history-p">
              Получение лицензии на обслуживание многоквартирных домов в Иваново
              и Москве.
            </p>
          </div>
        </section>

        <section className="services-wrapper">
          <div className="services-box">
            <div className="services-info">
              <h2 className="services-title">Решаем сложные задачи</h2>
              <p className="services-p">
                Мы проектируем, поставляем и обслуживаем лифтовое оборудование,
                гарантируя клиенту выгоду в момент приобретения оборудования и
                за все время его эксплуатации, благодаря качеству и безупречному
                сервису, обеспеченными высочайшей компетенцией персонала,
                жестким отбором поставщиков и уникальными инновациями в систему
                контроля качества.
              </p>
              <a className="services-link" href="/">
                Все наши услуги >
              </a>
            </div>
          </div>
        </section>

        <section className="services1-wrapper">
          <div className="services-box">
            <div className="services-info">
              <h2 className="services-title">Собственное производство</h2>
              <p className="services-p">
                Мы проектируем, поставляем и обслуживаем лифтовое оборудование,
                гарантируя клиенту выгоду в момент приобретения оборудования и
                за все время его эксплуатации, благодаря качеству и безупречному
                сервису, обеспеченными высочайшей компетенцией персонала
              </p>
              <a className="services-link" href="/">
                Продукция ДЛК >
              </a>
            </div>
          </div>
        </section>

        <section className="constructor-wrapper">
          <div className="constructor-box">
            <div className="constructor-info">
              <h2 className="constructor-title">Конструктивные решения</h2>
              <p className="constructor-p">
                Все изделия отправляются потребителям после тщательного
                контроля. Их испытывают в более тяжелых условиях, чем рабочие.
                Испытания начинаются при поступлении исходных материалов и
                комплектующих
              </p>
              <p className="constructor-p">
                Проверяется химический состав и механические свойства сталей и
                сплавов, качество обмоточных и монтажных проводов и многое
                другое.В производстве после каждой существенной рабочей операции
                следует точный контроль.{' '}
              </p>
              <a className="constructor-link" href="/">
                Смотреть >
              </a>
            </div>
            <div className="constructor-image">
              <img src={Lift} alt="image" className="constructor-img" />
            </div>
          </div>
        </section>

        <section className="statistics-wrapper">
          <div className="statistics-box">
            <h2 className="statistics-title">ДЛК в цифрах</h2>
            <div className="statistics-info">
              <div className="statistic-item">
                <h4 className="item-title">13 лет опыта</h4>
                <p className="item-p">На рынке лифтов с 2014 года</p>
              </div>
              <div className="statistic-item">
                <h4 className="item-title">62 квалифицированных специалиста</h4>
                <p className="item-p">В штате компании по всей стране</p>
              </div>
              <div className="statistic-item">
                <h4 className="item-title">
                  630 единиц поставленного оборудования
                </h4>
                <p className="item-p">
                  Поставлено, установлено и обслуживается
                </p>
              </div>
              <div className="statistic-item">
                <h4 className="item-title">28 700 км2 охвачено</h4>
                <p className="item-p">
                  Работаем в Северо-Кавказском, Южном и Крымском округах
                </p>
              </div>
              <div className="statistic-item">
                <h4 className="item-title">379 лифтов нами обслуживается</h4>
                <p className="item-p">
                  Работаем в Северо-Кавказском, Южном и Крымском округах
                </p>
              </div>
              <div className="statistic-item">
                <h4 className="item-title">10 производителей</h4>
                <p className="item-p">
                  Мы являемся дистрибьютерами популярных российских и зарубежных
                  брендов
                </p>
              </div>
            </div>
            <div className="item-link">
              <a href="/">Выбрать лифт ></a>
            </div>
          </div>
        </section>

        <section className="aboutus1-wrapper">
          <div className="aboutus-delivery">
            <div className="delivery-box">
              <div className="delivery-info">
                <h3 className="aboutaus-delivery-title">
                  Работаем по всему Кавказу
                </h3>

                <h4>Доставка</h4>
                <p>
                  Мы занимается формированием дилерской сети и приглашаем вас
                  стать нашим партнерам на выгодных условиях для сотрудничества.
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
          </div>
        </section>

        <section className="clients">
          <HomeClients />
        </section>

        <section className="contacts-form">
          <div className="aboutus-wrapper ">
            <div className="form-box">
              <div className="form-auth">
                <input type="text" placeholder="Имя*" />
                <input type="number" placeholder="Телефон*" />
                <textarea type="text" placeholder="Ваш вопрос*" />
                <button className="form-btn">Отправить вопрос</button>
              </div>
              <div className="form-info">
                <h2>
                  Возник вопрос? <br /> Задайте его нам! <br />
                  Принимаем заявки!
                </h2>

                <p className="text-p">Вы можете позвонить нам, мы ждем</p>
                <p className="text-number">8 928 590-33-66</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
