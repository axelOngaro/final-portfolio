import barba from '@barba/core';
import { gsap } from 'gsap';

barba.init({
  transitions: [
    {
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        });
      },
    },
  ],
});

const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', darkMode);

function darkMode() {
  const element = document.getElementById('body');
  darkToggle.classList.toggle('dark__mode__btn');
  element.classList.toggle('dark__mode');
}
