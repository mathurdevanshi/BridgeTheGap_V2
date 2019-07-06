import React from 'react';
import Template from "../Template/template";
import AvailableItems from "../Tables/availableitems.components";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import { Link } from "react-router-dom";
import { red, blueGrey, teal } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';


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
      color: red[700],
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

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <Template>
      <div className={classes.root} style={{ opacity: .90 }} >
        <CssBaseline />
        {/* <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Permanent drawer
          </Typography>
          </Toolbar>
        </AppBar> */}
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <List  >
            {['Home'].map((text) => (
              <ListItem button key={text} component={Link} to="/">
                <ListItemIcon>
                  <HomeIcon
                    className={classes.icon}
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
          {/* <ListItem button component={Link} to="/design"></ListItem> */}
          {/* <List>
            {['Claimed Items', 'Inventory', 'Pending Donations', 'Wishlist'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            <h1>Homeless Home Page</h1>
            <p style={{textAlign:"justify"}}>Welcome to the Bridge the Gap Homeless Home Page! Review the available items below to see what is available at 
            the agency's in your area. Once you have claimed the items, please contact the agency to confirm your selection 
            and arrange to pick up the item(s). If you are claiming a bed at one of the shelters, confirm that the bed(s) 
            are available and confirm when you will arrive. If you are do not arrive within 30 minutes of the scheduled 
            pick-up time, the item(s) will be returned to the agency's inventory.</p>
            <AvailableItems />
          </Typography>
        </main>
      </div>
    </Template>
  );
}