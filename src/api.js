export const fetchCharacters = async () => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const API_URL = 'https://rickandmortyapi.com/api/character/';
  
      xhr.open('GET', API_URL, true);
  
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
          } else {
            console.error('Error fetching characters:', xhr.statusText);
            reject([]);
          }
        }
      };
  
      xhr.onerror = function() {
        console.error('Error fetching characters:', xhr.statusText);
        reject([]);
      };
  
      xhr.send();
    });
  };
  