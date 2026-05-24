import { toggleTheme } from './theme.js';

const ToggleThemeButton = document.querySelector('#theme-toggle');

if (ToggleThemeButton) {
  ToggleThemeButton.addEventListener('click', toggleTheme);
}

/* 

<div class="card shadow-lg p-2 mb-5 rounded-full">
  <button
    id="theme-toggle" 
      class="btn btn-secondary square-md btn-icon-circle rounded-full"
      >
    <i class="icon icon-sun-moon text-2xl"></i>
  </button>
</div> 

*/
