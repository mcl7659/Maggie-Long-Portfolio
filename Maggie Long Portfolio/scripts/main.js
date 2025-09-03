// Typing effect
const words = ["accessibility", "UX research", "design", "inclusive design", "improving discoverability", "solving real problems", "marketing"];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = '';
let isDeleting = false;
const typedText = document.getElementById('typed-text');

function type() {
  const word = words[wordIndex];
  if (isDeleting) {
    currentWord = word.substring(0, letterIndex--);
  } else {
    currentWord = word.substring(0, letterIndex++);
  }

  typedText.textContent = currentWord;
  typedText.style.color = pastelColor(wordIndex);

  if (!isDeleting && letterIndex === word.length + 1) {
    isDeleting = true;
    setTimeout(type, 800);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 120);
  }
}

type();

function pastelColor(index) {
  const colors = ['#f7c3f2', '#b5d3f2', '#d0f4de', '#fde2e4', '#e0bbf9', '#f2fac6'];
  return colors[index % colors.length];
}

// Image enlarge feature
document.querySelectorAll('.project img').forEach(img => {
  img.addEventListener('click', () => {
    if (img.classList.contains('enlarged')) {
      img.classList.remove('enlarged');
    } else {
      document.querySelectorAll('.project img.enlarged').forEach(i => i.classList.remove('enlarged'));
      img.classList.add('enlarged');
    }
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.project img.enlarged').forEach(img => img.classList.remove('enlarged'));
  }
});