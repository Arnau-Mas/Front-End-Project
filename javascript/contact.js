const formButton = document.querySelector(".form-button");
const form = document.querySelector("contact-form")

formButton.addEventListener("click", postData);

async function postData() {
    console.log("click")
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let message = document.querySelector("#message").value;
    let hiddenMessage = document.querySelector(".hidden-message");
    console.log(hiddenMessage)
    let data = {};
    if(name){
        data.name = name;
        if(email){
            data.email = email;
        }
        if(phone){
            data.phone = phone;
        }
        if(message){
            data.message = message;
        }
    }
    if(data && name){
        const res = await fetch("https://circle-website.free.beeceptor.com/messages", {
            method: "POST",
            body: JSON.stringify(data), 
            headers: {
              "Content-type": "application/json",
            },
        });
  }
}