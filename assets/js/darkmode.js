const darkModeToggle = document.getElementById('darkModeToggle');
let education = document.querySelectorAll('section');
  
  // darkModeToggle.addEventListener('change', () => {
  //   document.body.classList.toggle('dark-mode');
  //   education.classList.toggle('dark-mode');
  // });

  function dark() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle.checked) {
      darker();
    } else {
      light();
    }
  }
  function darker () {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
  }

  function light () {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
  }
  