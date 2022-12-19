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

  /*Event handler that will detect which tags are being selected for form populating */
  handleTagClick = (tag) => {
    let tags = this.state.tags;
      if (tags.includes(tag))
      {
        tags = tags.filter(t => t !== tag);
      }
      else
      {
        tags.push(tag);
      }
    this.setState({ tags });
  }

  /*Event handler that will generate form based off of selected tag values */
  handleCreateFormClick = () => {
    this.setState({ formVisible: true });
  }
 /*Rendering the form  */
  render() {
    const { tags, formVisible } = this.state;
    /*Renders based off of tags */
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
      /*Returns user back to Postbike Page to select their tags */
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