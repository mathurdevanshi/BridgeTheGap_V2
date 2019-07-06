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
import help from "../../images/help.jpg";
import ModalTemplate from "../Modal/communityaccount";
import '../MainPage/main.css'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 220,
  },
});

export default function CommunityCard() {
  const classes = useStyles();

  return (
    <div className="col-md-4">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={help}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Community
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Do you want to help your community but don’t know where to start? We can help connect you with agencies in need supplies and/or volunteers.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <ModalTemplate />
            {/* <Link component={RouterLink} to="/create-community">
              Create Account
            </Link> */}
          </Button>
          <Button size="small" color="primary">
            <Link component={RouterLink} to="/communityhome">
              Learn More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}