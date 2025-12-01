let Nav = document.querySelector("nav");


function NavFunc(){
    Nav.classList.toggle("toggleOn");
}


// _________________________________________________________________________________________________________________________



document.getElementById('Form').addEventListener('submit', function(e){
    e.preventDefault(); // form ka default behavior rok do
    const form = e.target;
    const data = new FormData(form);

    fetch('https://formsubmit.co/ajax/7697abhishek@gmail.com', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('notification').style.display = 'block'; // notification show
        form.reset(); // form clear kar do
    })
    .catch(error => alert('Oops! Something went wrong.'));
});

// _________________________________________________________________________________________________________________________________

const dropdown = document.querySelector('.dropdown');
    const toggle = document.querySelector('.dropdown-toggle');

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      // agar click dropdown ke bahar hua, to band kar do
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });


// _________________________________________________________________________________________________________________________________

    // Page load animation
gsap.from("div", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3 // Sections ek ke baad animate ho
});

// Scroll-triggered animation
gsap.utils.toArray(".section").forEach(section => {
  gsap.fromTo(section, 
    {opacity: 0, x: -100}, 
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",  // Jab section viewport ke 80% par ho
        toggleActions: "play none none none"
      }
    }
  );
});
