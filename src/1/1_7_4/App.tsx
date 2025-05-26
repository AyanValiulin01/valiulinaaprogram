/*
Этот пример отображает знаменитое хайку Кацусики Хокусая, каждая строка которого обернута в тег <p>. Ваша задача — вставить разделитель <hr /> между каждым абзацем. Ваша результирующая структура должна выглядеть следующим образом:

<article>
    <p>I write, erase, rewrite</p>
    <hr />
    <p>Erase again, and then</p>
    <hr />
    <p>A poppy blooms.</p>
</article>

  В хайку всего три строки, но ваше решение должно работать с любым количеством строк. Обратите внимание, что элементы <hr /> появляются только между элементами <p>, а не в начале или конце!

  Это редкий случай, когда индекс в качестве ключа допустим, потому что строки стихотворения никогда не будут перестраиваться.
*/
const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  return (
    <article>
      {poem.lines.flatMap((line, index) =>
        index < poem.lines.length - 1
          ? [<p key={index}>{line}</p>, <hr key={"hr-" + index} />]
          : [<p key={index}>{line}</p>]
      )}
    </article>
  );
}
