import React from "react";
import Table from "react-bootstrap/Table";

const TableProduct = () => {
  return (
    <div>
      <p>Product Table</p>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Name Product</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>url</td>
            <td>Name</td>
            <td>Descr...</td>
            <td>Rp. 30000</td>
            <td>30</td>
            <td>Edit / Delete</td>
          </tr>
          <tr>
            <td>2</td>
            <td>url</td>
            <td>Name</td>
            <td>Descr...</td>
            <td>Rp. 30000</td>
            <td>30</td>
            <td>Edit / Delete</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableProduct;
