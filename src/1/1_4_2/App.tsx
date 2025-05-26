//Извлеките URL изображения в объект person.
const person = {
  name: 'Gregorio Y. Zara',
  imageUrl: 'GregorioYZara.jpg', // Вынесли URL в объект
  theme: {
      backgroundColor: 'black',
      color: 'pink'
  }
};

export default function TodoList() {
  return (
      <div style={person.theme}>
          <h1>{person.name}'s Todos</h1>
          <img
              className="avatar"
              src={person.imageUrl} // Используем переменную
              alt={person.name}
          />
          <ul>
              <li>Improve the videophone</li>
              <li>Prepare aeronautics lectures</li>
              <li>Work on the alcohol-fuelled engine</li>
          </ul>
      </div>
  );
}
