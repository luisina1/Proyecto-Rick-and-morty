const txtCharacter = document.getElementById('txt-character');
const tableBody = document.getElementById('table-body');
const URL1 = "https://rickandmortyapi.com/api/character";
const URL2 = "https://rickandmortyapi.com/api/character/?name=";

const getApi = async(URL) => {
    const response = await fetch(URL);
    const data = await response.json();

    return data.results;
}

const createRow = (character) => {
    const row = document.createElement('tr');

    const imgCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = character.image;
    img.alt = character.name;
    imgCell.appendChild(img);

    const nameCell = document.createElement('td');
    nameCell.textContent = character.name;

    const genderCell = document.createElement('td');
    genderCell.textContent = character.gender;

    const statusCell = document.createElement('td');
    statusCell.textContent = character.status;

    row.appendChild(imgCell);
    row.appendChild(nameCell);
    row.appendChild(genderCell);
    row.appendChild(statusCell);

    tableBody.appendChild(row);
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
