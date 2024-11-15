let almacenadorUrl = [];

window.addEventListener("DOMContentLoaded", () =>{
    getProfile();
    imgRandom();
});

const getProfile = async () =>{
    const respuesta = await fetch("https://api.github.com/users/8ustamante");
    const data = await respuesta.json();
    document.getElementById("profile-github").setAttribute("src", data.avatar_url);
}

const imgRandom = async () =>{
    const respuesta = await fetch("https://randomfox.ca/floof/?ref=public_apis");
    const data = await respuesta.json();
    document.querySelector(".gen-img").setAttribute("src", data.image);
    getHistorial(data.image);
}

document.querySelector(".btn-gen-img").addEventListener("click", () =>{
    imgRandom();
})

const getHistorial = (url) => {
    
    almacenadorUrl.push(url);

    let template = document.querySelector("#templateCartas").content;
    let fragmento = document.createDocumentFragment();
    let content = document.querySelector("#contenedorCards");

    content.innerHTML = "";

    almacenadorUrl.forEach(imgZo => {
        template.querySelector(".img-carta").setAttribute("src", imgZo)
        let clone = template.cloneNode(true);
        fragmento.appendChild(clone);
    });

    content.appendChild(fragmento)    

}