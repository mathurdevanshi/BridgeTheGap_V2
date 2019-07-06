import React from 'react';
import MaterialTable from 'material-table';
import API from "../../utils/API";
// import Template from "../../Template/template";
import "../Tables/tables.css";

function saveData(newData) {
  API.saveDataToInventory(newData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

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

    // Need an array of objects here
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

                saveData(newData);

                console.log(newData);

                const data = [...state.data];
                data.push(newData);
                setState({ ...state, data });

                console.log(data);
              }, 10000);
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