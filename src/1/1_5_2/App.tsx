// В этом примере Avatar получает числовой параметр size, который определяет ширину и высоту <img>. В данном примере параметр size установлен на 40. Однако если вы откроете изображение в новой вкладке, вы заметите, что само изображение больше (160 пикселей). Реальный размер изображения определяется тем, какой размер миниатюры вы запрашиваете.

  Измените компонент Avatar, чтобы он запрашивал наиболее близкий размер изображения на основе параметра size. В частности, если size меньше 90, передавайте 's' ("small"), а не 'b' ("big") в функцию getImageUrl. Проверьте, что ваши изменения работают, отобразив аватары с разными значениями параметра size и открыв изображения в новой вкладке.
import { getImageUrl } from "./util";

export type Person = {
  name: string;
  imageId: string;
};

function Avatar({ person, size }: { person: Person; size: number }) {
  const imageSize = size < 90 ? "s" : "b"; // Если size < 90, используем "s", иначе "b"

  return (
    <img
      className="avatar"
      src={getImageUrl(person.imageId, imageSize)} // Передаём imageId и imageSize
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={40} // Маленький аватар (должно использовать "s")
        person={{
          name: "Gregorio Y. Zara",
          imageId: "GregorioYZara",
        }}
      />
      <Avatar
        size={100} // Большой аватар (должно использовать "b")
        person={{
          name: "Albert Einstein",
          imageId: "AlbertEinstein",
        }}
      />
    </div>
  );
}
