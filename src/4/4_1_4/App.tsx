// 4_1_4  Read the latest state
/*
  В этом примере после нажатия кнопки "Отправить" происходит небольшая задержка перед отображением сообщения. Введите "hello", нажмите "Отправить", а затем быстро отредактируйте ввод снова. Несмотря на ваши правки, оповещение все равно покажет "hello" (это было значение state на момент нажатия кнопки).

  Обычно такое поведение - это то, что вы хотите видеть в приложении. Однако иногда могут возникнуть ситуации, когда вы хотите, чтобы асинхронный код считывал последнюю версию некоторого состояния. Можете ли вы придумать, как сделать так, чтобы оповещение показывало текущий текст ввода, а не тот, что был в момент нажатия?
*/
import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const textRef = useRef(text); // Храним актуальное значение текста

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + textRef.current); // Читаем из useRef, чтобы получить последнее значение
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={e => {
          setText(e.target.value);
          textRef.current = e.target.value; // Обновляем значение в useRef
        }}
      />
      <button onClick={handleSend}>
        Send
      </button>
    </>
  );
}
