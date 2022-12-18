import React, {useState} from 'react'
import './SearchStyles.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";


const Search = ({ placeholder, data }) => {
    const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="search-inputs">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
        <div className="search-icon">
          {filteredData.length === 0 ? (
            <SearchIcon /> ) : (
            <CloseIcon id="clear-btn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="data-result">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="data-item" href={value.link} target="_blank" rel="noreferrer">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search