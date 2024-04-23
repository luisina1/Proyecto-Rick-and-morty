const txtCharacter = document.getElementById('txt-character');
const tableBody = document.getElementById('table-body');
const URL1 = "https://rickandmortyapi.com/api/character";
const URL2 = "https://rickandmortyapi.com/api/character/?name=";

const getApi = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();

    return data.results;
}

const createRow = (character) => {
    const row = document.createElement('tr');
    row.setAttribute('data-character-id', character.id);

    const imgCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = character.image;
    img.alt = character.name;
    img.title = 'Click to view location';
    imgCell.appendChild(img);

    const nameCell = document.createElement('td');
    nameCell.textContent = character.name;

    const genderCell = document.createElement('td');
    genderCell.textContent = character.gender;

    const statusCell = document.createElement('td');
    statusCell.textContent = character.status;

    const speciesCell = document.createElement('td'); 
    speciesCell.textContent = character.species; 

    const locationCell = document.createElement('td');
    locationCell.textContent = '';

    row.appendChild(imgCell);
    row.appendChild(nameCell);
    row.appendChild(genderCell);
    row.appendChild(statusCell);
    row.appendChild(speciesCell); 
    row.appendChild(locationCell);

    tableBody.appendChild(row);

    row.addEventListener('click', async () => {
        const characterId = row.getAttribute('data-character-id');
        const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
        const data = await response.json();
        const characterLocations = data.location;
        locationCell.textContent = characterLocations.name; 
    });

}

const generateAllCharacters = async () => { 
    const data = await getApi(URL1);
    data.forEach(character => createRow(character));
}

const getCharacterByName = async (event) => {
    tableBody.innerHTML = "";
    const data = await getApi(URL2 + event.target.value);
    data.forEach(character => createRow(character));
}

window.addEventListener('DOMContentLoaded', generateAllCharacters);
txtCharacter.addEventListener('keyup', getCharacterByName);


