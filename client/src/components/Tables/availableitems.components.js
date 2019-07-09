import React from 'react';
import MaterialTable from 'material-table';
// import Template from "../../Template/template";

export default function MaterialTableDemo(props) {
  const [state] = React.useState({
    columns: [
      { title: 'Agency Name', field: 'name' },
      { title: 'Phone Number', field: 'phoneNumber', type: 'numeric' },
      { title: 'Address', field: 'address' },
      { title: 'Item', field: 'item' },
      { title: 'Quantity', field: 'quantity', type: 'numeric' },

    ],
    data: [
      {
        agencyName: 'Operation SafeHouse Transitional Living',
        phoneNumber: '9092938763',
        address: '102 Whirlaway Way, Riverside, CA 92507',
        item: 'Toothbrushes',
        quantity: 10
      },
      {
        agencyName: 'Operation SafeHouse Transitional Living',
        phoneNumber: '9092938763',
        address: '102 Whirlaway Way, Riverside, CA 92506',
        item: 'Toothbrushes',
        quantity: 10
      },
    ],
  });

  return (
    <div className="tableBody">
      <MaterialTable
        title="Available Items"
        columns={state.columns}
        data={props.data}
      />
    </div>
  );
}