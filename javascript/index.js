const projectsDiv = document.querySelector(".projects-div");

async function printCard(){
    const projects = await getProjects();
    for(let i = 0; i<projects.length; i++){
        projectsDiv.innerHTML += `
        <article class="projects-div-article">
            <img class="project-image" src="../assets/projects-section/${i+1}.jpg" alt="">
            <article class="project-article-text d-flex-column">
                <h6 class="body-text-24-medium">${projects[i].title}</h6>
                <p class="headline-17-regular">${projects[i].description}</p>
            </article>
            <article class="headline-17-medium project-article-anchor"><a href="#">Learn More</a></article>
        </article>`
    }

}

printCard();