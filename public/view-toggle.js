// Agent-first view toggle script - loads immediately to show code view for humans
(function() {
  console.log('View toggle script loaded');
  
  // Function to set initial state to code view
  function setInitialCodeView() {
    const humanView = document.getElementById('human-view');
    const codeView = document.getElementById('code-view');
    
    if (humanView && codeView) {
      console.log('Setting initial code view');
      humanView.style.display = 'none';
      codeView.style.display = 'block';
    }
  }
  
  // Function to toggle between views
  function toggleViews() {
    const humanView = document.getElementById('human-view');
    const codeView = document.getElementById('code-view');
    
    if (humanView && codeView) {
      console.log('Toggling views');
      const isHumanVisible = humanView.style.display !== 'none';
      
      if (isHumanVisible) {
        humanView.style.display = 'none';
        codeView.style.display = 'block';
      } else {
        humanView.style.display = 'block';
        codeView.style.display = 'none';
      }
    }
  }
  
  // Set initial view immediately
  setInitialCodeView();
  
  // Add click handlers to all buttons
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
      e.preventDefault();
      e.stopPropagation();
      toggleViews();
    }
  });
  
  // Fallback: set initial view again after DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setInitialCodeView);
  } else {
    setTimeout(setInitialCodeView, 100);
  }
})();