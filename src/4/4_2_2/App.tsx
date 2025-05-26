// 4_2_2 Focus the search field
/*
  Сделайте так, чтобы нажатие на кнопку "Поиск" наводило фокус на поле.
*/

import { useRef } from 'react';

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null); // Реф для поля ввода

  function handleClick() {
    inputRef.current?.focus(); // Устанавливаем фокус
  }

  return (
    <>
      <nav>
        <button onClick={handleClick}>Search</button>
      </nav>
      <input
        ref={inputRef} // Привязываем ref
        placeholder="Looking for something?"
      />
    </>
  );
}
