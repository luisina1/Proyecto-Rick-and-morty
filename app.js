const txtCharacter = document.getElementById('txt-character');
const tableBody = document.getElementById('table-body');
const URL1 = "https://rickandmortyapi.com/api/character";
const URL2 = "https://rickandmortyapi.com/api/character/?name=";

<<<<<<< HEAD
const getApi = async (URL) => {
=======

let sortDirection = 'asc'; // Variable para almacenar la dirección de la ordenación

const getApi = async(URL) => {
>>>>>>> 8eb091f04072bdf84d5cb640634e6cafb310e768
    const response = await fetch(URL);
    const data = await response.json();

    return data.results;
}

const createRow = (character) => {
    const row = document.createElement('tr');
<<<<<<< HEAD
    row.setAttribute('data-character-id', character.id);
=======
>>>>>>> 8eb091f04072bdf84d5cb640634e6cafb310e768

    const imgCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = character.image;
    img.alt = character.name;
<<<<<<< HEAD
    img.title = 'Click to view location';
=======
>>>>>>> 8eb091f04072bdf84d5cb640634e6cafb310e768
    imgCell.appendChild(img);

    const nameCell = document.createElement('td');
    nameCell.textContent = character.name;

    const genderCell = document.createElement('td');
    genderCell.textContent = character.gender;

    const statusCell = document.createElement('td');
    statusCell.textContent = character.status;

<<<<<<< HEAD
    const speciesCell = document.createElement('td');
    speciesCell.textContent = character.species;

    const locationCell = document.createElement('td');
    locationCell.textContent = '';

=======
>>>>>>> 8eb091f04072bdf84d5cb640634e6cafb310e768
    row.appendChild(imgCell);
    row.appendChild(nameCell);
    row.appendChild(genderCell);
    row.appendChild(statusCell);
<<<<<<< HEAD
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

=======

    tableBody.appendChild(row);
>>>>>>> 8eb091f04072bdf84d5cb640634e6cafb310e768
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

const sortTable = (sortBy) => {
    sortDirection = sortDirection === 'asc' ? 'desc' : 'asc'; // Cambiar la dirección de ordenación
    tableBody.innerHTML = ''; // Limpiar la tabla antes de volver a llenarla
    generateAllCharacters(sortBy); // Generar los personajes ordenados
}

window.addEventListener('DOMContentLoaded', generateAllCharacters);
txtCharacter.addEventListener('keyup', getCharacterByName);

// Agregar event listeners para ordenar por cada encabezado de columna
document.getElementById('name-header').addEventListener('click', () => {
    sortTable('name');
});

document.getElementById('gender-header').addEventListener('click', () => {
    sortTable('gender');
});

document.getElementById('status-header').addEventListener('click', () => {
    sortTable('status');
});

<<<<<<< HEAD


=======
>>>>>>> 8eb091f04072bdf84d5cb640634e6cafb310e768
