import React from 'react'
import Link from 'next/link'
import { config } from '../../globals'
import style from './header-style.module.scss'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export const Header: React.FC = () => (
  <>
    <div className={style.HeaderLogo}>
      <div className="header-logo-container">
        <a href="https://www.mhtinvestimentos.com.br/" rel="noopener noreferrer" target="_blank">
          <img src="/assets/logo-manhattan.svg" alt="Manhattan Investimentos" />
        </a>
        <a href="https://mhtis.com.br/" rel="noopener noreferrer" target="_blank">
          <img src="/assets/logo-school-.png" alt="Manhattan Investiment School" />
        </a>
        <a href="https://www.xpi.com.br/" rel="noopener noreferrer" target="_blank">
          <img src="/assets/logo-xpi.svg" alt="XP Investimentos" />
        </a>
      </div>
    </div>
    <header className={style.Container}>
      <div className={style.HeaderContent}>
        <div className={style.Social}>
          <a
            href="https://www.facebook.com/edson.archela/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/edson_archela/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/edson-archela-36303b148"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div className={style.headerPrincipal}>
          <Link href="/about">
            <a>
              <strong>Edson Archela</strong>
              <span>Assessor de Investimentos - XP Investimentos</span>
            </a>
          </Link>
        </div>
        <div>
          <a
            className={style.OpenAccount}
            href="https://cadastro.xpi.com.br/desktop/step/1?assessor=A24771"
            rel="noopener noreferrer"
            target="_blank"
          >
            Abra sua conta
          </a>
        </div>
        <div />
      </div>
      <nav className={style.MenuBar}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/articles">
              <a>Artigos</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Sobre mim</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contatos</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  </>
)
