import React, { useState } from "react";
import img_titile from "../../assets/img/img_titile.jpg";
import "./MainSection.css";
import Form from "../Form/Form";

const MainSection: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };
  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div className="main">
      <div className="container">
        <div className="main__container">
          <div className="main__block">
            <div className="main__block-left">
              <h1 className="main__block-title">Иванов Валерий Вадимович</h1>
              <p className="main__block-text">
                Привет! Меня зовут Валерий, и я FrontEnd-разработчик. Решил, что
                лучший способ самопрезентации — это небольшой сайт-визитка, на
                котором ты и находишься.
              </p>
              <h2 className="main_block-title main_block-title--small">
                Мой подход к работе:
              </h2>
              <p className="main__block-text">
                Я стремлюсь создавать не просто код, а интерфесы, которые будут
                решать задачи пользователей. Чистый, поддерживаемый код и
                внимание к деталям — это то, что помогает мне делать продукты
                удобными и быстрыми.
              </p>
              <h2 className="main_block-title main_block-title--small">
                Технологии, с которыми я работаю:
              </h2>
              <p className="main__block-text">
                React, TypeScript, JavaScript, HTML/CSS, а также всё, что нужно
                для современной frontend-разработки. Люблю осваивать новое и
                постоянно совершенствую свои навыки.
              </p>
              <h2 className="main_block-title main_block-title--small">
                Что для меня важно:
              </h2>
              <ol className="main__block-list">
                <li className="main__block-item">
                  <p className="main__block-text">
                    <strong>Качество кода</strong> — пишу так, чтобы было
                    понятно мне и другим разработчикам
                  </p>
                </li>
                <li className="main__block-item">
                  <p className="main__block-text">
                    <strong>Пользовательский опыт</strong> — делаю интерфейсы
                    интуитивными и приятными
                  </p>
                </li>
                <li className="main__block-item">
                  <p className="main__block-text">
                    <strong>Детали</strong> — верю, что мелочи создают общую
                    картину
                  </p>
                </li>
                <li className="main__block-item">
                  <p className="main__block-text">
                    <strong>Развитие</strong> — не останавливаюсь на достигнутом
                  </p>
                </li>
              </ol>
              <h2 className="main_block-title main_block-title--small">
                Чем могу быть полезен:
              </h2>
              <ol className="main__block-list">
                <li className="main__block-item">
                  <p className="main__block-text">
                    Разработка клиентской части веб-приложений
                  </p>
                </li>
                <li className="main__block-item">
                  <p className="main__block-text">
                    Создание адаптивных и доступных интерфейсов
                  </p>
                </li>
                <li className="main__block-item">
                  <p className="main__block-text">
                    Оптимизация производительности веб-приложений
                  </p>
                </li>
                <li className="main__block-item">
                  <p className="main__block-text">
                    Вёрстка по макетам Figma/Photoshop
                  </p>
                </li>
              </ol>
              <p className="main__block-text">
                Если хочешь узнать больше — переходи в{" "}
                <a href="http://localhost:5173/resume">«Резюме»</a> или{" "}
                <a href="http://localhost:5173/portfolio">«Портфолио»</a>. А
                если просто интересуешься — загляни в{" "}
                <a href="http://localhost:5173/hobbies">«Хобби»</a>
              </p>
              <button
                className="main__block-btn"
                type="button"
                onClick={handleOpenForm}
              >
                Связаться со мной
              </button>
            </div>
            <div className="main__block-right">
              <img className="main__img" src={img_titile} alt="Аватар" />
            </div>
          </div>
        </div>
      </div>
      {isFormOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseForm}>
              &times;
            </button>
            <Form />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainSection;
