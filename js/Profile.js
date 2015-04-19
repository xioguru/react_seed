import React from 'react';

var ProfileStyle = require('./Profile.css');
var StyleSheet = require('react-style');

var TitlesStyle = StyleSheet.create({
    title: {
      'color' : 'pink'
    }
});



class Profile extends React.Component
{

  render()
  {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div  styles={[ProfileStyle.comment]}  >
        <h1>Soft Banana</h1>
        <h2  styles={[TitlesStyle.title, ProfileStyle.commentAuthor]}  >
          {this.props.author}
        </h2>
        <div>testa</div>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }

};

export default Profile;