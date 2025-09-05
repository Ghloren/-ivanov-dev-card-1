import React from 'react';
import { Container } from '../Container/Container';
import { GitHubIcon } from '../../assets/icons/GitHubIcon';
import { TelegramIcon } from '../../assets/icons/TelegramIcon';
import { LinkedInIcon } from '../../assets/icons/LinkedInIcon';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: '#', icon: <GitHubIcon /> },
    { name: 'Telegram', url: '#', icon: <TelegramIcon /> },
    { name: 'LinkedIn', url: '#', icon: <LinkedInIcon /> }, 

  ];

  return (
    <footer className="footer">
  <Container>
    <div className="footer__content">
      <div className="footer__copyright">
        © {currentYear} Иванов Валерий. Все права защищены.
      </div>
      
      <div className="footer__contacts">
        <div className="footer__contact-item">
          <span className="footer__contact-label">Телефон:</span>
          <a href="tel:+79284032777" className="footer__contact-link">
            +7 (928) 40-32-777
          </a>
        </div>
        <div className="footer__contact-item">
          <span className="footer__contact-label">Email:</span>
          <a href="mailto:mirowoi1995@gmail.com" className="footer__contact-link">
            mirowoi1995@gmail.com
          </a>
        </div>
      </div>

      <nav className="footer__social">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </nav>
    </div>
  </Container>
</footer>
  );
};