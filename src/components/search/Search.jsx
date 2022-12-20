import React, {useState, useContext} from 'react'
import Axios from 'axios';
import server from '../../config/service';
import AuthContext from '../../context/AuthProvider';
import './SearchStyles.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";

/*
This component is basically the Search Page. Accessible through the 
Bikes Page as a button link. Users are able to search for specific 
bikes through different categories based from the JSON Database file.
*/

//Initiate an empty search bar field for user input
  const Search = ({ placeholder, data }) => {
  const { auth } = useContext(AuthContext);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  //As users type, the search will filter and display all possible results
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    //If Else statement for filtering 
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  //Clear Field
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const requestHandler = async(e) => {
    e.preventDefault();
    let search = wordEntered;
    Axios.get(`${server.host}/v1/bikes/searchbar/search?title=${search}`)
    .then( res => {
      setFilteredData(res.data);
    }).catch( err => {

    });
  };

  //Output search results
  return (
    <div className="search">
      <div className="search-inputs">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
        <div className="search-icon">
          {filteredData.length === 0 ? ( <SearchIcon onClick={requestHandler}/> ) : ( <CloseIcon id="clear-btn" onClick={clearInput} /> )}
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