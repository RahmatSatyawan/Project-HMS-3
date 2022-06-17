import React from "react";
import { Table } from "react-bootstrap";

const TableTransaction = () => {
  return (
    <div>
      <p>Transaction Table</p>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Details</th>
            <th>ID Transaction</th>
            <th>Description</th>
            <th>No Resi</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>tombol</td>
            <td>111112</td>
            <td>Descr...</td>
            <td>121212</td>
            <td>Shipping</td>
            <td>Edit / Done</td>
          </tr>
          <tr>
            <td>2</td>
            <td>tombol</td>
            <td>1111ee12</td>
            <td>Descr...</td>
            <td>1212ee12</td>
            <td>Delivered</td>
            <td>Edit / Done</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableTransaction;
