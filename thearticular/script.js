function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
}

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "instant"
  });
}