import { Table, Modal, Button } from "antd";

import { Component } from "react";

import { BiSearch } from "react-icons/bi";
import fetchedData from "./data";
import "./App.css";

const { data } = fetchedData;
const firstObj = data[0];

class App extends Component {
  constructor(props) {
    super(props);
    const columns = [];
    for (const key in firstObj) {
      var render;
      if (firstObj[key] === null) {
        render = (text, record) => (
          <Button type="primary" onClick={() => this.showModal(record)}>
            See Details
          </Button>
        );
      }
      const col = {
        title: key[0].toUpperCase() + key.slice(1),
        dataIndex: key,
        key: key,
        render: render,
      };
      columns.push(col);
    }

    this.state = {
      searchInput: "",
      showDetails: false,
      details: {},
      columns: columns,
    };
  }

  changeSearch = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  showModal = (rowData) => {
    this.setState({ showDetails: true, details: rowData });
  };

  handleOk = () => {
    this.setState({
      showDetails: false,
    });
  };

  handleCancel = () => {
    this.setState({
      showDetails: false,
    });
  };

  render() {
    console.log("render called");
    const { searchInput, showDetails, details, columns } = this.state;
    const searchResults = data.filter((each) =>
      each.name.toLocaleLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="bg-container">
        <div className="header">
          <h1 className="main-heading">Tenants Management</h1>
        </div>
        <div className="table-container">
          <div className="search-bar-container">
            <p className="para">All tenants ({searchResults.length})</p>
            <div className="search-container">
              <BiSearch size={20} />
              <input
                type="search"
                className="search-input"
                onChange={this.changeSearch}
                value={searchInput}
                placeholder="Enter the name"
              />
            </div>
          </div>
          <Table columns={columns} dataSource={searchResults} />
          <Modal
            title="Details"
            open={showDetails}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <dl>
              <dt>Id</dt>
              <dd>:- {details.id}</dd>
              <br />
              <dt>Name</dt>
              <dd>:- {details.name}</dd>
              <br />
              <dt>Users</dt>
              <dd>:- {details.users}</dd>
              <br />
              <dt>Status</dt>
              <dd>:- {details.status}</dd>
            </dl>
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
