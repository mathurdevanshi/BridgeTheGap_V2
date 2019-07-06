import React from 'react';
import Template from "../Template/template";
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
import AgencyNeeds from "../Tables/agencyneeds.components";

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
            <h1>Community Home Page</h1>
            <p style={{ textAlign: "justify" }}>Welcome to the Bridge the Gap Community Home Page! Below you will find an overview of items that agency's in your area are in need of. When organizing your next classroom collection drive, or your family is looking to donate items, you can visit this page to see what items the agency's in your area need to help your local homeless population.</p>

            <AgencyNeeds />
          </Typography>
        </main>
      </div>
    </Template>
  );
}