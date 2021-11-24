var html = document.getElementById('list');
var item = document.getElementById('items');
document.getElementById("add").addEventListener('click',()=>{
html.innerHTML += `<td>${item.value}</td>`;
});
document.getElementById("delete").addEventListener('click',()=>{
html.lastChild.remove();
});