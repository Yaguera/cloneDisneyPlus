const imageSourcesEmBreve = [
    './dist/images/em_breve/desencantada.jpg',
    './dist/images/em_breve/lobisomem.jpg',
    './dist/images/em_breve/sem_limites.jpg',
    './dist/images/em_breve/spidey.jpg',
    './dist/images/em_breve/the_santa_clauses.jpg',
    './dist/images/em_breve/willow.jpg'
];

const imageSourcesMaisPopulares = [
    './dist/images/mais_populares/bluey.jpg',
    './dist/images/mais_populares/cavaleira_da_lua.jpg',
    './dist/images/mais_populares/o_incrivel_dr_pol.jpg',
    './dist/images/mais_populares/obi_wan.jpg',
    './dist/images/mais_populares/red.jpg',
    './dist/images/mais_populares/tudo_igual_sqn.jpg'
];

const imageSourcesMaisNoStarPlus = [
    './dist/images/mais_no_star_plus/belair.jpg',
    './dist/images/mais_no_star_plus/libertadores.jpg',
    './dist/images/mais_no_star_plus/nba.jpg',
    './dist/images/mais_no_star_plus/os_simpson.jpg',
    './dist/images/mais_no_star_plus/premier_league.jpg',
    './dist/images/mais_no_star_plus/the_kardashians.jpg'
];

const showsList = document.getElementById('showsList');

let currentImages = [];

// Função para criar os itens da lista com base nas imagens
const renderImages = (imageArray) => {
    if(currentImages === imageArray) return;

    showsList.innerHTML = "";
    requestAnimationFrame(() => {
        imageArray.forEach(src => {
            const listItem = document.createElement('li');
            listItem.classList.add('shows__list__item');

            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Imagem em breve';

            listItem.appendChild(img);
            showsList.appendChild(listItem);
        });
        currentImages = imageArray;
    });
};

// Função para lidar com o clique e selecionar o conjunto correto de imagens
const handleClick = (e) => {
    e.preventDefault()
    const buttonText = e.target.innerHTML;

    if(buttonText === "Em breve") {
        renderImages(imageSourcesEmBreve);
        currentImages = imageSourcesEmBreve
    } else if(buttonText === "Mais populares") {
        renderImages(imageSourcesMaisPopulares);
        currentImages = imageSourcesMaisPopulares
    } else {
        renderImages(imageSourcesMaisNoStarPlus);
        currentImages = imageSourcesMaisNoStarPlus
    }
};

renderImages(imageSourcesEmBreve);