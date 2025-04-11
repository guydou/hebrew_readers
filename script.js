const letters = {
  א: { word: 'אריה', image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg' },
  ב: { word: 'בננה', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg' },
  ג: { word: 'גמל', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Camel_profile.jpg' },
  // אפשר להוסיף עוד אותיות...
};

const container = document.getElementById('letters-container');
const result = document.getElementById('result');
const img = document.getElementById('image');
const word = document.getElementById('word');

for (let letter in letters) {
  const btn = document.createElement('button');
  btn.className = 'letter-button';
  btn.textContent = letter;
  btn.onclick = () => {
    img.src = letters[letter].image;
    word.textContent = letters[letter].word;
  };
  container.appendChild(btn);
}
