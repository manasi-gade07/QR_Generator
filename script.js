let qrcode = document.getElementById("qr");
let input = document.getElementById("user_input");
let generate = document.getElementById("btn");
generate.addEventListener("click",()=>{
let url = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${input.value} `
qrcode.src = url;
});


