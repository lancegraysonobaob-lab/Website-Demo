document.addEventListener('DOMContentLoaded', function() {
  const searchToggle = document.getElementById('search-toggle');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');

  if (searchToggle && searchOverlay) {
    searchToggle.addEventListener('click', function(e) {
      e.preventDefault();
      searchOverlay.classList.add('active');
      setTimeout(() => {
        if (searchInput) searchInput.focus();
      }, 100);
    });
  }

  if (searchClose) {
    searchClose.addEventListener('click', function() {
      if (searchOverlay) searchOverlay.classList.remove('active');
      if (searchInput) searchInput.value = '';
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('active')) {
      searchOverlay.classList.remove('active');
      if (searchInput) searchInput.value = '';
    }
  });
});
