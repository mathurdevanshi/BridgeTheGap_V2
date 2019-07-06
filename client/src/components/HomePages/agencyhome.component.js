import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AgencyPanel from "../Panels/agencypanel";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import { red, blueGrey, teal } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import API from '../../utils/API';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: red[800],
    },
  },

}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


class AgencyComponent extends React.Component{
  
  state = {
    classes : useStyles,
    authorized : false,
    agencyData : undefined,

  }

  componentDidMount() {
    let token = localStorage.getItem("jwt");

    let tokenObject =  {
      authorized: token
    };

    console.log(token);

    API.checkUsersToken(tokenObject)
    .then((res) => {
      console.log(res);
      this.setState(res);
      console.log("agency data" ,this.state.agencyData);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
    
      <div className={this.state.classes.root} style={{ opacity: .90 }} >
        <CssBaseline />
        <Drawer
          className={this.state.classes.drawer}
          variant="permanent"
          classes={{
            paper: this.state.classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={this.state.classes.toolbar} />
          <Divider />
          <List  >
            {['Home'].map((text) => (
              <ListItem button key={text} component={Link} to="/">
                <ListItemIcon>
                  <HomeIcon
                    className={this.state.classes.icon}
                    color="primary"
                    fontSize="large"
                    component={svgProps => {
                      return (
                        <svg {...svgProps}>
                          <defs>
                            <linearGradient id="gradient1">
                              <stop offset="30%" stopColor={blueGrey[400]} />
                              <stop offset="70%" stopColor={teal[400]} />
                            </linearGradient>
                          </defs>
                          {React.cloneElement(svgProps.children[0], {
                            fill: 'url(#gradient1)',
                          })}
                        </svg>
                      );
                    }}
                  />
                  {/* <InboxIcon /> */}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        <ListItem button component={Link} to="/design"></ListItem>
        </Drawer>
        <main className={this.state.classes.content} >
          <div className={this.state.classes.toolbar} />
          <Typography paragraph className="col-md-12">
            <h1>Agency Home</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
        </Typography>
          <AgencyPanel />
        </main>
      </div>
    // </Template>
  );
  }
 
}
// export default function PermanentDrawerLeft() {

// }
export default AgencyComponent;