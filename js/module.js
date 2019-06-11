// function storeInfo() {
//     let name = document.getElementById("nameinput").Value;
//     let email = document.getElementById("email").Value;
//     localStorage.setItem(name, name);
// }


let user = name =>{
    console.log(localStorage.getItem('nameinput'));
    if (!localStorage.get('nameinput')){
    localStorage.setItem('nameinput', name);
    return name;
}}