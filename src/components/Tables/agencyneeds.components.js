import React from 'react';
import MaterialTable from 'material-table';
// import Template from "../Template/template";
import "./tables.css";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Agency Name', field: 'agencyName' },
      { title: 'Phone Number', field: 'phoneNumber', type: 'numeric' },
      { title: 'Category', field: 'category' },
      { title: 'Requested Item', field: 'requestedItem' },
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
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.push(newData);
                setState({ ...state, data });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data[data.indexOf(oldData)] = newData;
                setState({ ...state, data });
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.splice(data.indexOf(oldData), 1);
                setState({ ...state, data });
              }, 600);
            }),
        }}
      />
    </div>

  );
}