import React from 'react';
import MaterialTable from 'material-table';
// import Template from "../Template/template";

export default function MaterialTableDemo(props) {
  console.log(props.data);
  const [state, setState] = React.useState({
    columns: [
      { title: 'Agency Name', field: 'name' },
      { title: 'Phone Number', field: 'phoneNumber', type: 'numeric' },
      { title: 'Category', field: 'category' },
      { title: 'Requested Item', field: 'item' },
      { title: 'Quantity', field: 'quantity', type: 'numeric' },
    ],
    data: [
      {
        agencyName: 'Operation SafeHouse Transitional Living',
        phoneNumber: 9092938763,
        category: 'Goods',
        requestedItem: 'Toothbrushes',
        quantity: 10
      },
      {
        agencyName: 'Community Connect',
        phoneNumber: 9513330987,
        category: 'Food',
        requestedItem: 'Water',
        quantity: 10,
      },
    ],
  });

  return (
    <div className="tableBody">
      <MaterialTable
        title="Agency's Needs"
        columns={state.columns}
        data={props.data}
      />
    </div>

  );
}