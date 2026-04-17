document.addEventListener('click', function(event) {
  const link = event.target.closest('a');
  if (link && link.href && link.href.startsWith('http')) {
    event.preventDefault();
    chrome.runtime.sendMessage({ url: link.href });
  }
}, false);