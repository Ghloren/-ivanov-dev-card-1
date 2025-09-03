import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { Container } from '../Container/Container'; 
import './Header.css';

export const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/resume', label: 'Резюме' },
    { path: '/portfolio', label: 'Портфолио' },
    { path: '/hobbies', label: 'Хобби' },
  ];

  return (
    <header className="header">
      <Container> 
        <div className="header__content">
          <nav className="header__nav">
            <ul className="header__nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="header__nav-item">
                  <Link
                    to={item.path}
                    className={`header__nav-link ${location.pathname === item.path ? 'header__nav-link--active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__theme-toggle">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};