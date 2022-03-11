async function getProjects(){
    const response = await fetch("https://marketplace.freelancewebdesign.online/wp-json/wp/v2/projects");
    const data = await response.json();
    console.log("aa", data)
    return data;
}

async function getMessages(){
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();
    return data;
}

//aqui canviar els localhost per la url que ens va proporcionar profe a slack announcements