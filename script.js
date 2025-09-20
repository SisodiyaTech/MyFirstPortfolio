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