// Исправьте ошибку в компоненте Profile.
function Profile() {  // Название с заглавной буквы
  return (
      <img
          src="AlanHart.jpg"
          alt="Alan L. Hart"
      />
  );
}

export default function Gallery() {
  return (
      <section>
          <h1>Amazing scientists</h1>
          <Profile /> {/* Используем с заглавной буквы */}
          <Profile />
          <Profile />
      </section>
  );
}
