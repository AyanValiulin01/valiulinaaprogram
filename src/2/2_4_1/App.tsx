/*
  Здесь представлен компонент светофора для пешеходного перехода, который включается при нажатии на кнопку.

  Добавьте alert в обработчик нажатия. Когда свет зеленый и говорит "Идти", щелчок по кнопке должен говорить "Следующая остановка". Когда свет красный и говорит "Стоп", нажатие на кнопку должно говорить "Следующим будет идти".

  Есть ли разница в том, поместить ли alert до или после вызова setWalk?
*/import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './2/2_4_1/style.css';
import App from './2/2_4_1/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
