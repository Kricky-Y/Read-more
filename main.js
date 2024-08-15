'use strict';

{
  document.querySelector('#more').addEventListener('click', () => {
    document.querySelector('#contents').classList.add('appear');
  });

  document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('#contents').classList.remove('appear');
  });

}