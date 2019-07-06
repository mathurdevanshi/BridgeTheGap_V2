import React from 'react';
import MaterialTable from 'material-table';
import Template from "../Template/template";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Phone Number', field: 'phoneNumber', type: 'numeric' },
      { title: 'Category', field: 'category' },
      { title: 'Item Name', field: 'itemName' },
      { title: 'Quantity', field: 'quantity', type: 'numeric' },

    ],
    data: [
      {
        name: 'Alyssa Milano',
        phoneNumber: 2224565,
        category: 'Goods',
        itemName: 'Undergarments',
        quantity: 1000,
      },
      {
        name: 'Jessica Alba',
        phoneNumber: 3335690,
        category: 'Goods',
        itemName: 'Baby Diapers',
        quantity: 20000,
      },
    ],
  });

  return (
    <Template>
      <div className="tableBody">
        <MaterialTable
          title="Community Assistance"
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
    </Template>
  );
}