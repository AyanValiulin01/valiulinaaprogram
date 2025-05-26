
// 3_3_2 Filtering a list  
/*
  В этом примере SearchBar имеет собственное состояние query, которое управляет вводом текста. Его родительский компонент FilterableList отображает список элементов, но он не учитывает поисковый запрос.

  Используйте функцию filterItems(foods, query) для фильтрации списка в соответствии с поисковым запросом. Чтобы проверить ваши изменения, проверьте, что ввод "s" в поле ввода отфильтровывает список до "Sushi", "Shish kebab" и "Dim sum".

  Обратите внимание, что filterItems уже реализован и импортирован, поэтому вам не нужно писать его самостоятельно!
*/

import { useState } from 'react';
import { foods, filterItems, Item } from './data';

export default function FilterableList() {
  const [query, setQuery] = useState('');

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      <hr />
      <List items={filterItems(foods, query)} />
    </>
  );
}

function SearchBar({ query, setQuery }: { query: string, setQuery: (value: string) => void }) {
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </label>
  );
}

function List({ items }: { items: Item[] }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
