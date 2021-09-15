import './css/main.css';
import './css/rain.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


function App() {
  const classes = useStyles();
  return (
    <div className="App">
  <meta charSet="UTF-8" />
  <link rel="icon" type="image/png" href="assets/favicon.png" />
  <link rel="stylesheet" href="css/rain.css" />
  <link rel="stylesheet" href="css/main.css" />
  <audio autoPlay>
    <source src="./assets/only_one.mp3" type="audio/mpeg" />
  </audio>
  <div className="content-main">
        <h1>root@igna.rocks</h1>
      <br />
      <p>
        {" "}
        Hi, I'm Ignacio, a 13-year-old developer who likes anime and code stuff
      </p>
        <br />
        <div className={classes.root}>
      <Button variant="contained" color="secondary" href="https://discord.com/users/886994695648051270">
        Discord
      </Button>
      <Button variant="contained" color="primary" href="https://bio.igna.rocks">
        Bio
      </Button>
      <Button variant="contained" color="secondary" href="https://steamcommunity.com/id/nulIed">
        Steam
      </Button>
        </div>
          </div>
        <p></p>
      </div>
  );
}

export default App;