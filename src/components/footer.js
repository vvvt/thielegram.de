import React from 'react'
import { Link } from 'gatsby'

import github from '../images/icons8-octocat-50.png'
import mail from '../images/icons8-important-mail-50.png'
import telegram from '../images/icons8-telegram-app-50.png'
import icons8 from '../images/icons8-50.png'

const Footer = () => (
  <footer>
    <span>© {new Date().getFullYear()} - Vincent Thiele - <Link to="/imprint/">Impressum</Link></span>
    <div class="social" >
      <a aria-label="Github Profile" href="https://www.github.com/vvvt"><img class="social-img" aria-hidden="true" alt="Github Icon" src={github} /></a>
      <a aria-label="Telegram Contact" href="https://t.me/thielegram"><img class="social-img" aria-hidden="true" alt="Telegram Icon" src={telegram} /></a>
      <a aria-label="Mail Contact" href="mailto:hey@thielegram.de"><img class="social-img" aria-hidden="true" alt="E-Mail Icon" src={mail} /></a> 
      <a aria-label="Icons made by" href="https://icons8.com/"><img class="social-img" aria-hidden="true" alt="Icons8 Icon" src={icons8} /></a>    
    </div>
  </footer>
)

export default Footer