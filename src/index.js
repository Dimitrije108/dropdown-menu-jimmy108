import './style.css';

export const dropdownOnHover = (
  hoverEl,
  dropdownEl,
  relativePosition = true
) => {
  if (relativePosition) {
    hoverEl.style.position = 'relative';
  }
  dropdownEl.classList.add('dropdown-menu');

  hoverEl.addEventListener('mouseenter', () => {
    dropdownEl.classList.add('visible');
  });
  hoverEl.addEventListener('mouseleave', () => {
    dropdownEl.classList.remove('visible');
  });
};

export const dropdownOnClick = (
  clickEl,
  dropdownEl,
  relativePosition = true
) => {
  if (relativePosition) {
    clickEl.style.position = 'relative';
  }
  dropdownEl.classList.add('dropdown-menu');

  clickEl.addEventListener('click', (e) => {
    dropdownEl.classList.toggle('visible');
    e.stopPropagation();
  });

  window.addEventListener('click', (e) => {
    if (!clickEl.contains(e.target) && !dropdownEl.contains(e.target)) {
      dropdownEl.classList.remove('visible');
    }
  });
};
