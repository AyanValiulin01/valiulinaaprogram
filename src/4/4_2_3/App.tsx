// 4_2_3 Scrolling an image carouse
/*
  Эта карусель изображений имеет кнопку "Next", которая переключает активное изображение. Заставьте галерею прокручиваться горизонтально до активного изображения по щелчку. Для этого нужно вызвать scrollIntoView() на DOM-узле активного изображения:
  
  node.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  });
*/
import { useState, useRef } from 'react';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]); // Создаём массив рефов

  function handleNext() {
    const nextIndex = index < catList.length - 1 ? index + 1 : 0;
    setIndex(nextIndex);

    // Прокрутка к активному изображению
    imgRefs.current[nextIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  return (
    <>
      <nav>
        <button onClick={handleNext}>Next</button>
      </nav>
      <div style={{ display: 'flex', overflowX: 'auto', gap: '10px' }}>
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                ref={(el) => (imgRefs.current[i] = el)} // Привязываем ref к img
                className={index === i ? 'active' : ''}
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
                style={{ width: 100, height: 100, objectFit: 'cover' }}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

type PlaceType = {
  id: number;
  imageUrl: string;
};

const catList: PlaceType[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `cat${i}.jpg`,
  });
}
