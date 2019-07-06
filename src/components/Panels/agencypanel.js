import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import AgencyInventory from "../../components/Tables/inventory.components";
import ClaimedItems from "../../components/Tables/claimeditems.components";
import WishList from "../../components/Tables/wishlist.components";
import PendingDonations from "../../components/Tables/pendingdonations.components";

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Current Inventory</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            The inventory table provides all of the current inventory your agency has available to assist the homeless population in your area to:
          <br /><br />
            <ul>
              <li><strong>Add</strong> a new item click the "+" icon and include the necessary information in the line that appears in the table.</li>
              <li><strong>Edit</strong> an existing item (i.e. edit quantity, or change information) select the "pencil" icon, make the necessary<br />
                changes, and select the "checkmark icon" to confirm your changes.</li>
              <li><strong>Delete</strong> an item that is no longer needed select the "trash" icon to delete the row.</li>
            </ul>
            <AgencyInventory />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Claimed Items</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Below is a list of recently claimed items. Please review and confirm to ensure the items are still available, and contact the person who claimed the item to make arrangements for pick-up. Their contact information is provided.
            <ClaimedItems />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Current Wishlist</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Below is a wishlist of items your agency needs assistance with. Community members and volunteers will be able to view the items on this list to determine if they are able to provide assistance to your agency.
            <WishList />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}