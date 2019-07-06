import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import homeless from "../../images/home-less.jpg";
import ModalTemplate from "../Modal/homelessaccount";
import '../MainPage/main.css';



const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 220,
  },
});

export default function HomelessCard() {
  const classes = useStyles();

  return (
    <div className="col-md-4">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={homeless}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Homeless
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Tired of asking for help only to be turned away? By answering a few questions we can help connect you with agencies in your area who are ready to help.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {/* <Link component={RouterLink} to="/create-homeless"> */}
            <ModalTemplate>

            </ModalTemplate>
            {/* Create Account */}
            {/* </Link> */}
          </Button>

          <Button size="small" color="primary">
            <Link component={RouterLink} to="/homelesshome">
              Learn More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}