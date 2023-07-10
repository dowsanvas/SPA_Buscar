// Obtiene los elementos del DOM
var searchInput = document.getElementById('searchInput');
var searchButton = document.getElementById('searchButton');
var resultsContainer = document.getElementById('results');

// Define los datos de búsqueda
var data = ['Manzana', 'Banana', 'Cereza', 'Damasco', 'Durazno'];

// Función para realizar la búsqueda
function performSearch() {
    var searchTerm = searchInput.value.toLowerCase();
    var filteredData = data.filter(function(item) {
        return item.toLowerCase().includes(searchTerm);
    });

    // Limpia los resultados anteriores
    resultsContainer.innerHTML = '';

    // Muestra los resultados
    filteredData.forEach(function(item) {
        var resultElement = document.createElement('div');
        resultElement.textContent = item;
        resultsContainer.appendChild(resultElement);
    });
}

// Asocia el evento de clic al botón de búsqueda
searchButton.addEventListener('click', performSearch);