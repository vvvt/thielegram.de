import React from 'react'
import { Link } from 'gatsby'

import github from '../images/icon-github.svg'
import gitlab from '../images/icon-gitlab.svg'
import mail from '../images/icon-mail.svg'
import telegram from '../images/icon-telegram.svg'

const Footer = () => (
  <footer>
    <span>© {new Date().getFullYear()} - Vincent Thiele - <Link to="/imprint/">Impressum</Link></span>
    <div className="social" >
      <a aria-label="Github Profile" href="https://www.github.com/vvvt"><img className="social-img" alt="Github Icon" src={github} /></a>
      <a aria-label="GitLab Profile" href="https://www.gitlab.com/vvvt"><img className="social-img" alt="GitLab Icon" src={gitlab} /></a>
      <a aria-label="Telegram Contact" href="https://t.me/thielegram"><img className="social-img" alt="Telegram Icon" src={telegram} /></a>
      <a aria-label="Mail Contact" href="mailto:hey@thielegram.de"><img className="social-img" alt="E-Mail Icon" src={mail} /></a> 
    </div>
  </footer>
)

export default Footer