import React, { useState } from 'react';
import server from '../../config/service';
import Axios from 'axios';

const Posting = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [bikes, setBikes] = useState([]);
  Axios.get(`${server.host}/v1/bikes/dummy.data`, {
  }).then(res => {
    setBikes(res.data.bikes); 
  });

  const tagOptions = bikes.tags.map((tag) => (
    <option key={tag} value={tag}>
      {tag}
    </option>
  ));

  return (
    <form>
      <label>Name:</label>
      <input type="text" value={bikes.title} />
      <br />
      
      <label>Tags:</label>
      <select value={selectedTags} onChange={(e) => setSelectedTags(e.target.value)}>
        {tagOptions}
      </select>
      <button onClick={() => setSelectedTags([...selectedTags, selectedTags])}>
        Add Tag
      </button>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Posting;