$(document).ready(function () {
  const chords = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const chordsLatin = ['Do', 'Do#', 'Re', 'Re#', 'Mi', 'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si'];

  // Funciones para transportar acordes y cambiar el cifrado
  // ...
  // Aquí se incluyen las funciones que proporcionaste en tu código original

  function findAndUpdateChordsInContent(content) {
    const lines = content.split('<br>');
    let output = '';

    for (let line of lines) {
      const words = line.split(' ');
      let newLine = '';

      for (let word of words) {
        if (isChord(word)) {
          const newChord = changeChord(word, 0);
          newLine += newChord + ' ';
        } else {
          newLine += word + ' ';
        }
      }

      output += newLine.trim() + '<br>';
    }

    return output.trim();
  }

  // Obtén el contenido de la entrada y crea una copia de seguridad del contenido original
  const postContent = $(".post-body");
  const originalContent = postContent.html();

  // Actualiza el contenido con los acordes modificados
  const updatedContent = findAndUpdateChordsInContent(originalContent);
  postContent.html(updatedContent);

  // Agrega los botones para transportar acordes y cambiar el cifrado
  const buttons = `
    <button id="transpose-up">Transportar un semitono hacia arriba</button>
    <button id="transpose-down">Transportar un semitono hacia abajo</button>
    <button id="toggle-notation">Cambiar cifrado</button>
  `;
  postContent.before(buttons);

  // Agrega los controladores de eventos para los botones
  $("#transpose-up").click(function () {
    const currentContent = postContent.html();
    const transposedContent = findAndUpdateChordsInContent(currentContent, 1);
    postContent.html(transposedContent);
  });

  $("#transpose-down").click(function () {
    const currentContent = postContent.html();
    const transposedContent = findAndUpdateChordsInContent(currentContent, -1);
    postContent.html(transposedContent);
  });

  $("#toggle-notation").click(function () {
    const currentContent = postContent.html();
    const toggledContent = findAndUpdateChordsInContent(currentContent);
    postContent.html(toggledContent);
  });
});
