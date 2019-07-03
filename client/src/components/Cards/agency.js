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
import hope from "../../images/hope.jpg";
import ModalTemplate from "../Modal/agencyaccount";
// import LoginForm from "../Modal/login";
import '../MainPage/main.css'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 220,
  },
});

export default function AgencyCard() {
  const classes = useStyles();

  return (
    <div className="col-md-4">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={hope}
            title="Agency Card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Agency
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Are you an agency ready to help those in need? We can help track your existing resources, and connect you with those in need as well as those ready to help.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <ModalTemplate />

            {/* <Link component={RouterLink} to="/create-agency">
              Create Account
            </Link> */}
          </Button>
          <Button size="small" color="primary">
            <Link component={RouterLink} to="/agencyhome">
              Learn More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}