var html = document.getElementById('list');
let i = 0;
var item = document.getElementById('items');
document.getElementById("add").addEventListener('click',()=>{
html.innerHTML += `<td>${item.value}<input type="checkbox" class="btn" id="${i+1}"></td>`;
document.getElementById(i).addEventListener('change',()=>{
    console.log(document.getElementById(i).value);
});
++i;
});
document.getElementById("delete").addEventListener('click',()=>{
html.lastChild.remove();
});

