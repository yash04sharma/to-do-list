let task1 = document.querySelector(".task1");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset")
let count = document.querySelector(".count")

let task = () => {

    let tasko = task1.value;
    let key = Date.now();

    localStorage.setItem(key, tasko);


    result.innerHTML += `<p>  
    
    <input class="checkbox" type="checkbox">
    ${tasko}
    <button onclick="remove(${key},this)" class="button">🗑️</button>
    
    </p>`;

    let a = localStorage.length;
    console.log(a);

    count.innerHTML = `Tasks : ${a}`;

    task1.value = "";
}

let remove = (key, element) => {
    localStorage.removeItem(key);

    element.parentElement.remove();
    let a = localStorage.length;
    count.innerHTML = `Tasks : ${a}`;
}

btn.addEventListener("click", task);

let clear = () => {
    localStorage.clear();

    result.innerHTML = " ";
    count.innerHTML = `Tasks : 0`;

}

reset.addEventListener("click", clear)


window.onload = () => {

    for (let i = 0; i < localStorage.length; i++) {

        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        result.innerHTML += `<p>

        <input class="checkbox" type="checkbox">
        ${value}
        <button onclick="remove(${key},this)" class="button">🗑️</button>

        </p>`;
    }

}