 const text = "From helpdesk to homelab — I build things that work (and fix the ones that don’t).";
  const typedText = document.getElementById("typed-text");
  const cursor = document.getElementById("cursor");

  let i = 0;
  const speed = 40; // typing speed in ms

  function typeWriter() {
    if (i < text.length) {
      typedText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  document.addEventListener("DOMContentLoaded", typeWriter);