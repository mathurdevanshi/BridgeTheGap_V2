import React from 'react';
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
import AgencyNeeds from "../Tables/agencyneeds.components";
import API from "../../utils/API";

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
class CommunityComponent extends React.Component {
  state = {
    classes : useStyles,
    authorized : false,
    agencyData : undefined
  }

  componentDidMount() {    
    API.getAllAgencyData()
    .then((res) => {
      console.log(res.data);

      this.setState({
        agencyData : res.data
      });

    })
    .catch((err) => {
      console.log(err);
    });
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
        </Drawer>
        <main className={this.state.classes.content}>
          <div className={this.state.classes.toolbar} />
          <Typography paragraph>
            <h1>Community Home Page</h1>
            <p style={{ textAlign: "justify" }}>Welcome to the Bridge the Gap Community Home Page! Below you will find an overview of items that agency's in your area are in need of. When organizing your next classroom collection drive, or your family is looking to donate items, you can visit this page to see what items the agency's in your area need to help your local homeless population.</p>

            <AgencyNeeds data={this.state.agencyData} />
          </Typography>
        </main>
      </div>
  );
  }
}

export default CommunityComponent;
// export default function PermanentDrawerLeft() {
//   const classes = useStyles();

// }