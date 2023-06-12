function openPopup(text) {
    document.getElementById("popup-text").innerHTML = text;
    document.getElementById("popup").classList.add("active");
  }
  
  function openPopupMarkdown(url) {
    fetch(url)
      .then(response => response.text())
      .then(text => {
        const html = marked(text);
        document.getElementById("popup-text").innerHTML = `
          <div class="markdown-popup">${html}</div>
        `;
        document.getElementById("popup").classList.add("active");
      });
  }
  
  function openPopupHTML(url) {
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.classList.add('popup-iframe');
    document.getElementById("popup-text").innerHTML = '';
    document.getElementById("popup-text").appendChild(iframe);
    document.getElementById("popup").classList.add("active");
  }
  
  function closePopup() {
    document.getElementById("popup").classList.remove("active");
  }
  
  window.addEventListener('click', function(event) {
    var popup = document.getElementById("popup");
    if (event.target === popup) {
      closePopup();
    }
  });
  