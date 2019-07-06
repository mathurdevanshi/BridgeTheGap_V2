import React from 'react';
import MaterialTable from 'material-table';
// import Template from "../../Template/template";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Category Name', field: 'categoryName' },
      { title: 'Item Name', field: 'itemName' },
      { title: 'Quantity Claimed', field: 'quantityClaimed', type: 'numeric' },
      { title: 'Quantity Left', field: 'quantityLeft', type: 'numeric' },
      //   {
      //     title: 'Birth Place',
      //     field: 'birthCity',
      //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      //   },
    ],
    data: [
      {
        name: 'John Doe',
        categoryName: 'Food',
        itemName: 'Canned Green Beans',
        quantityClaimed: 10,
        quantityLeft: 5
      },
      {
        name: 'Susie Miller',
        categoryName: 'Food',
        itemName: 'Pen',
        quantityClaimed: 20,
        quantityLeft: 1,
      },
    ],
  });

  return (

    <div className="tableBody">
      <MaterialTable
        title="Claimed Items"
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