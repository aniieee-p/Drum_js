function playSound(sound) {
  const audio = new Audio(`sounds/${sound}.mp3`);
  audio.play();
}

const drums = document.querySelectorAll(".drum");

drums.forEach(drum => {
  drum.addEventListener("click", () => {
    playSound(drum.dataset.sound);
    drum.classList.add("active");
    setTimeout(() => drum.classList.remove("active"), 150);
  });
});

// keyboard support
document.addEventListener("keydown", (e) => {
  drums.forEach(drum => {
    if (e.key === drum.dataset.key) {
      playSound(drum.dataset.sound);
      drum.classList.add("active");
      setTimeout(() => drum.classList.remove("active"), 150);
    }
  });
});
