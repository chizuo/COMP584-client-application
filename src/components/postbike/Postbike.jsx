import React from 'react';
import './PostbikeStyles.css';

class Postbike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      formVisible: false
    };
  }

  handleTagClick = (tag) => {
    let tags = this.state.tags;
    if (tags.includes(tag)) {
      tags = tags.filter(t => t !== tag);
    } else {
      tags.push(tag);
    }
    this.setState({ tags });
  }

  handleCreateFormClick = () => {
    this.setState({ formVisible: true });
  }

  render() {
    const { tags, formVisible } = this.state;
      if (formVisible)
      {
        return (
            <form className="postbike-form">
            { tags.map(tag => (
                <div key={tag} className="postbike-form-field">
                <label>{tag}:</label>
                <input type="text" name={tag} />
                </div>
            ))}
            <input type="submit" value="Submit" />
            </form>
        );
      }
      else
      {
        return (
            <div className="postbike-tag-selector">
                <h1>Select tags:</h1>
                <div className="postbike-tag-buttons">
                    {['Title', 'Summary', 'Frame', 'Fork', 'Headset', 'Bottom Bracket', 'Crankset', 'Derailleurs', 'Shifters', 'Handle Bars', 'Stem', 'Seatpost', 'Saddle','Brakes', 'Brake Levers', 'Pedals', 'Tires', 'Wheels', 'Accessories'].map(tag => (
                    <button key={tag} className="postbike-tag-button" onClick={() => this.handleTagClick(tag)}>
                        {tags.includes(tag) ? <strong>{tag}</strong> : tag}
                    </button>
                    ))}
                </div>
                <p2>Selected tags: {tags.join(', ')}</p2>
                <button className="postbike-create-form-button" onClick={this.handleCreateFormClick}>Create form</button>
            </div>
        );
    }
  }
}

export default Postbike;