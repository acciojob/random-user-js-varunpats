//your code here
document.addEventListener("DOMContentLoaded", fetchData);

let basicInfo = document.getElementById("basic-info");
let extraDiv = document.getElementById("extra-data");

async function fetchData() {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json()
    basicInfo.innerHTML = `
        <h2 id="fullname">${data.results[0].name.first} ${data.results[0].name.last}</h2>
		<img src=${data.results[0].picture.large}>`
    let ageBtn = document.querySelector("[data-attr='age']");
    let emailBtn = document.querySelector("[data-attr='email']");
    let phoneBtn = document.querySelector("[data-attr='phone']");
    ageBtn.addEventListener("click", () => {
        extraDiv.innerHTML = '';
        extraDiv.innerHTML = `
        ${data.results[0].dob.age}
        `
    })
    emailBtn.addEventListener("click", () => {
        extraDiv.innerHTML = '';
        extraDiv.innerHTML = `
        ${data.results[0].email}
        `
    })
    phoneBtn.addEventListener("click", () => {
        extraDiv.innerHTML = '';
        extraDiv.innerHTML = `
        ${data.results[0].cell}
        `
    })
}
let newUser = document.getElementById("getUser");
newUser.addEventListener("click", () => {
    extraDiv.innerHTML = '';
    fetchData();
});