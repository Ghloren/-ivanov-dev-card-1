import React from "react";
import './Form.css';

const Form: React.FC = () => {
  return (
    <div className="form">
      <div className="form__container">
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          encType="multipart/form-data"
        >
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш email"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Тема сообщения"
          />
          <textarea
            name="message"
            placeholder="Напишите сообщение или прикрепите оферту во вложении"
            required
          ></textarea>
          <input
            type="file"
            name="upload"
          />
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
