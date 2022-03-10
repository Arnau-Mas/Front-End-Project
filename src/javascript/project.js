const projectSection = document.querySelector(".project-hero-section");
const projectsDiv = document.querySelector(".projects-div");

async function printHeroProject(index){
    let projects = await getProjects();
    let project = projects[index];
    projectSection.innerHTML = `<article class="project-hero-article">
    <h1 class="heading-h1">${project.title}</h1>
    <article class="d-flex-row project-hero-subtitle">
        <p class="body-text-24-medium project-hero-subtitle-firstp">${project.description}</p>
        <p class="headline-20-regular project-hero-subtitle-secondp"><span>Completed on</span> June 22, 2021</p>
    </article>    
</article>
    <article class="project-hero-article p-hero-article-2 d-flex-column">
    <img class="project-hero-article-img" src="../assets/projects-section/${index+1}.jpg" alt="project image">
        <p class="headline-20-regular">${project.content}<br><br>${project.content} ${project.content}</p>
    </article>`
}

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

//HAURÉ D'ADAPTAR LA PRINT CARD EN FUNCIO DEL PROJECTE QUE ESTIGUI EN VISTA 

printHeroProject(0);
printCard();