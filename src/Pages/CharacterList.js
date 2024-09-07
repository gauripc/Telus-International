import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../api';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [originFilter, setOriginFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('asc');

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data.results);
      setFilteredCharacters(data.results);
    };

    getCharacters();
  }, []);

  useEffect(() => {
    filterCharacters();
  }, [speciesFilter, genderFilter, originFilter, sortOption, searchTerm]);

  const filterCharacters = () => {
    let filtered = characters;

    if (speciesFilter) {
      filtered = filtered.filter((character) =>
        character.species.includes(speciesFilter)
      );
    }

    if (genderFilter) {
      filtered = filtered.filter((character) =>
        character.gender.includes(genderFilter)
      );
    }

    if (originFilter) {
      filtered = filtered.filter((character) =>
        character.origin.name.includes(originFilter)
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === 'asc') {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredCharacters(filtered);
  };

  // Function to clear specific filter
  const handleRemoveFilter = (filterType) => {
    switch (filterType) {
      case 'species':
        setSpeciesFilter('');
        break;
      case 'gender':
        setGenderFilter('');
        break;
      case 'origin':
        setOriginFilter('');
        break;
      default:
        break;
    }
  };

  return (
    <div className="character-list-page">
      <div className="filters-wrapper">
        <h2>Filters</h2>
        <div>
          <label>Species:</label>
          <select
            onChange={(e) => setSpeciesFilter(e.target.value)}
            value={speciesFilter}
          >
            <option value="">All</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
          </select>
        </div>

        <div>
          <label>Gender:</label>
          <select
            onChange={(e) => setGenderFilter(e.target.value)}
            value={genderFilter}
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <label>Origin:</label>
          <select
            onChange={(e) => setOriginFilter(e.target.value)}
            value={originFilter}
          >
            <option value="">All</option>
            <option value="Earth">Earth</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>

        <div className="sort">
          <label>Sort by:</label>
          <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <div className="selected-filters">
          <h2>Selected Filters</h2>
          {speciesFilter && (
            <span>
              {speciesFilter} <button onClick={() => handleRemoveFilter('species')}>X</button>
            </span>
          )}
          {genderFilter && (
            <span>
              {genderFilter} <button onClick={() => handleRemoveFilter('gender')}>X</button>
            </span>
          )}
          {originFilter && (
            <span>
              {originFilter} <button onClick={() => handleRemoveFilter('origin')}>X</button>
            </span>
          )}
        </div>
      </div>

      <div className="character-results-wrapper">
        <div className="search">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="character-list">
          {filteredCharacters.map((character) => (
            <div key={character.id} className="character-card">
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Gender: {character.gender}</p>
              <p>Origin: {character.origin.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
