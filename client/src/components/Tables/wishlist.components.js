import React from 'react';
import MaterialTable from 'material-table';
import API from "../../utils/API";
import { func } from 'prop-types';
// import Template from "../../Template/template";
function saveData(newData) {
  API.lastShot(newData)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
}

export default function MaterialTableDemo(props) {
  console.log("this is where wishlist props data is", props.data);

  const [state, setState] = React.useState({
    columns: [
      { title: 'Category', field: 'category' },
      { title: 'Item Name', field: 'descriptionOfItem' },
      { title: 'Quantity', field: 'currentQuantity', type: 'numeric' },
    ],
    data: [],
  });
  const [data, setData] = React.useState([]);


  return (
    <div className="tableBody">
      <MaterialTable
        title="Wishlist"
        columns={state.columns}
        data={props.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();

                saveData(newData);

                props.data.push(newData);
                setState({ ...state, newData });
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