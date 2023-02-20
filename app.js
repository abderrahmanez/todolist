const form = document.querySelector('form');
const liste = document.querySelector('ul');
const input = document.querySelector('form input');

let touteslestaches = []

form.addEventListener('submit', event => {
    event.preventDefault();

    const text = input.value.trim();
    if (text !==''){
        rajouterUneTache(text);
        input.value = '';
    }
})

function rajouterUneTache(text){
    const todo ={
        text,
        //Date Now renvoie le nombre de millisecondes depuis 1970
        id: Date.now()
    }
    afficherliste(todo);
}

function afficherliste(todo){
    const item = document.createElement('li');
    item.setAttribute('data-key', 'todo.id');

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.addEventListener('click', tacheFaite);
    item.appendChild(input);

    const txt = document.createElement('Span');
    txt.innerText = todo.text;
    item.appendChild(txt);

    const btn = document.createElement('button');
    btn.addEventListener('click', supprimerTache);
    const img = document.createElement('img');
    img.setAttribute('src', 'fermer.png');
    btn.appendChild(img);
    item.appendChild(btn);

    liste.appendChild(item);
    touteslestaches.push(item);
}

function tacheFaite(e){
    e.target.parentNode.classList.toggle('fenDeTache');
}

function supprimerTache(e){
    touteslestaches.forEach(el => {
        if(e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')){
            el.remove();
            touteslestaches = touteslestaches.filter(li => li.dataset.key !== el.dataset.key);
        }
    })
}