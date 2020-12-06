import style from './contact.module.scss'

import Image from 'next/image';

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaWhatsapp,
  FaPhone,
} from 'react-icons/fa'

const Contact = () => (
  <div className={style.container}>
    <div className={style.contactImg}>
      <Image src="/assets/contact-image.jpg" alt="Contato" height='350' width='700' />
      <a href="https://www.freepik.com/free-photos-vectors/business">
        Business photo created by dashu83 - www.freepik.com
      </a>
    </div>
    <section className={style.content}>
      <div>
        <h1>Olá, que bom que chegou até aqui!</h1>
        <h2>Existem várias formas de entrar em contato comigo:</h2>
      </div>
      <ul>
        <li>
          {' '}
          <a
            href="https://www.facebook.com/edson.archela/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebook color="blue" /> - Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/edson_archela/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram color="#de5602" /> - Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/edson-archela-36303b148"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedinIn color="#4285f4" /> - LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:edson.archela@mhtinvest.com">
            <FaMailBulk /> - Email: edson.archela@mhtinvest.com.br
          </a>
        </li>
        <li>
          {' '}
          <a href="whatsapp://tel:+5543996477425">
            <FaWhatsapp color="green" /> - Whatsapp
          </a>
        </li>
        <li>
          <a href="tel:43996477425">
            <FaPhone /> - (43) 99647-7425
          </a>
        </li>
        <li>
          {' '}
          <a
            href="http://www.xpi.com.br/aai/#/passo/1?assessor-A24771"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button>Abra sua conta na XP Investimentos</button>
          </a>
        </li>
      </ul>
    </section>
  </div>
)

export default Contact
