import React from 'react'
import Link from 'next/link'
import style from './footer-style.module.scss'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export const Footer: React.FC = () => (
  <footer className={style.Container}>
    <div className={style.Social}>
      <a href="https://www.facebook.com/edson.archela/" rel="noopener noreferrer" target="_blank">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/edson_archela/" rel="noopener noreferrer" target="_blank">
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
    <div className={style.LogosContainer}>
      <a href="https://www.mhtinvestimentos.com.br/" rel="noopener noreferrer" target="_blank">
        <img src="/assets/logo-manhattan.png" alt="Manhattan Investimentos" />
      </a>
      <a href="https://mhtis.com.br/" rel="noopener noreferrer" target="_blank">
        <img src="/assets/logo-school.jpg" alt="Manhattan Investiment School" />
      </a>
      <a href="https://www.xpi.com.br/" rel="noopener noreferrer" target="_blank">
        <img src="/assets/xp-investimentos-logo.svg" alt="Xp Investimentos" />
      </a>
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
            <a>Contate-me</a>
          </Link>
        </li>
      </ul>
    </nav>
    <div className={style.copyrightContainer}>
      <span>Powered by</span>{' '}
      <a href="https://github.com/EdsonArchela" rel="noopener noreferrer" target="_blank">
        TechArc Websites
      </a>
    </div>
  </footer>
)
