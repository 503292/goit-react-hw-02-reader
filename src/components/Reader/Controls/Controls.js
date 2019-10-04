import React from 'react';
import css from './Controls.module.css';

const Controls = () => {
  return (
    <section className={css.controls}>
      <button type="button" className={css.button}>
        Назад
      </button>
      <button type="button" className={css.button}>
        Вперед
      </button>
    </section>
  );
};

export default Controls;
