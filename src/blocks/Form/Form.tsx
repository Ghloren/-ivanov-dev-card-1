import React, { useState } from "react";
import './Form.css';

const Form: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Произошла ошибка при отправке формы.');
      }
    } catch (err) {
      setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="form">
        <div className="form__container">
          <div className="form__success">
            <h3 className="form__success-title">Сообщение отправлено!</h3>
            <p className="form__success-text">Спасибо за ваше сообщение. Я свяжусь с вами в ближайшее время.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form">
      <div className="form__container">
        <form
          className="form__form"
          action="https://formspree.io/f/meolbbkb"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <input
            className="form__input"
            type="text"
            name="name"
            placeholder="Ваше имя"
         
            disabled={isSubmitting}
          />
          <input
            className="form__input"
            type="email"
            name="email"
            placeholder="Ваш email"
          
            disabled={isSubmitting}
          />
          <input
            className="form__input"
            type="text"
            name="subject"
            placeholder="Тема сообщения"
            disabled={isSubmitting}
          />
          <textarea
            className="form__textarea"
            name="message"
            placeholder="Напишите сообщение или прикрепите оферту во вложении"
      
            disabled={isSubmitting}
          ></textarea>
          <input
            className="form__file"
            type="file"
            name="upload"
            disabled={isSubmitting}
          />
          
          {error && <div className="form__error">{'Невозможно отправить пустую форму'}</div>}
          
          <button 
            className={`form__button ${isSubmitting ? 'form__button--disabled' : ''}`}
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;