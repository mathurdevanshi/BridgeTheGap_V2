import React from 'react';
import MaterialTable from 'material-table';
// import Template from "../../Template/template";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Category', field: 'category' },
      { title: 'Item Name', field: 'itemName' },
      { title: 'Quantity', field: 'quantity', type: 'numeric' },
      //   {
      //     title: 'Birth Place',
      //     field: 'birthCity',
      //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      //   },
    ],
    data: [
      { category: 'Food', itemName: 'Canned Green Beans', quantity: 10 },
      {
        category: 'Goods',
        itemName: 'Pen',
        quantity: 20,
      },
    ],
  });

  return (
    <div className="tableBody">
      <MaterialTable
        title="Inventory"
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