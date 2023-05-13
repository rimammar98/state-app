import React from 'react';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state={
    person: {
      fullName: 'Rim Ammar',
      bio: 'Créative et passionnée par le monde du digital et les médias de l’audiovisuel, j’ai pu acquérir et  assimiler de nombreuses connaissances et compétences utiles à la mission, qui me sera confiée.  Après avoir suivi un long cursus universitaire, au sein de l’Institut des Arts Multimédias de la Manouba, j’ai jalonné plusieurs postes qui ont marbré d’une belle empreinte mon expérience professionnelle.',
    imgSrc : 'https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/273763387_5211819232186133_1689985846967814907_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=e5NAeDEB54UAX8WA2D1&_nc_ht=scontent.ftun1-2.fna&oh=00_AfCBT1USAOSESN3T2Vb3kw-LzB2yMgePoGC84KMkhlM5bA&oe=64658D6B',
      profession: 'chargée de communication digitale'
    },
    
  
shows: false,
    intervalId: null,
    seconds: 0
  };
  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, 1000);

    this.setState({ intervalId });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { person, shows, seconds } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Barsculer vers le profile</button>
        {shows && (
          <>
            <h1>{person.fullName}</h1>
            <img src={person.imgSrc} alt="Profile" />
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </>
        )}
        <p>Temps écoulé depuis le montage du composant: {seconds} seconds</p>
      </div>
    );
  }
}

export default App;