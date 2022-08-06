let increase = document.getElementById('Add');
let decrease = document.getElementById("Sub");
let input = document.querySelector("input")
let body = document.querySelector("body")

 const increament = () =>{
     input.value = parseInt(input.value) + 1;
    //  body.style.backgroundColor = "Green"
    body.style.backgroundImage = "url('https://images.unsplash.com/photo-1609348954993-bc615fa8694f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eW91JTIwYXJlJTIwcG9zaXRpdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')";
    // body.style.backgroundRepeat = "no-repeat";
}
 increase.addEventListener('click', increament);

 const decreament = () =>{
    input.value = parseInt(input.value) - 1;
    // body.style.backgroundColor = "red"
    body.style.backgroundImage = "url('https://media.istockphoto.com/photos/hand-holding-white-paper-with-smiley-face-emoticons-over-light-bokeh-picture-id1270628951?b=1&k=20&m=1270628951&s=170667a&w=0&h=LtzaHa4qiphacHmUzNj17vPuwOK68MS2JdTAgxp1OgU=')"
 }



decrease.addEventListener('click', decreament)
