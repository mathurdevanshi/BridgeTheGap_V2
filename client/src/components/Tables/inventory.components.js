/* 
  on line 23 i set the data that needs to be displayed by passing props from the parent component
  when i try to just nest it into data on line 36 it just shows up as undefined probaly because it sets it before its given the value
  this is the problem im currently stuck on.
*/
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

export default function MaterialTableDemo(props) {
  // let dataArray = props.data;

  
  console.log("this is where inventory props data is", props.data);
  
  const [state, setState] = React.useState({
    columns: [
      { title: 'Category', field: 'category' },
      { title: 'Item Name', field: 'descriptionOfItem' },
      { title: 'Quantity', field: 'currentQuantity', type: 'numeric' },
    ],
  
    // Need an array of objects here
    data: []
  });
  const [data, setData] = React.useState([]);
  console.log(state);
  
  return (
    <div className="tableBody">
      <MaterialTable
        title="Inventory"
        columns={state.columns}
        data={props.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();

                saveData(newData);

                console.log(newData);

                props.data.push(newData);
                setData([ ...data, newData ]);

                console.log(data);
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