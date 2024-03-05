import React, { Component } from "react";
import Modal from "../components/Modal";
import axios from "axios";
import jwtDecode from 'jwt-decode';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewCompleted: false,
            todoList: [],
            modal: false,
            activeItem: {
                title: "",
                description: "",
                completed: false,
            },
            searchTerm: "", // New state for search term
        };
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        axios
            .get("http://127.0.0.1:8000/api/todos/")
            .then((res) => this.setState({ todoList: res.data }))
            .catch((err) => console.log(err));
    };

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };

    handleSubmit = (item) => {
        this.toggle();

        if (item.id) {
            axios
                .put(`http://127.0.0.1:8000/api/todos/${item.id}/`, item)
                .then((res) => this.refreshList());
            return;
        }
        axios
            .post("http://127.0.0.1:8000/api/todos/", item)
            .then((res) => this.refreshList());
    };

    handleDelete = (item) => {
        axios
            .delete(`http://127.0.0.1:8000/api/todos/${item.id}/`)
            .then((res) => this.refreshList());
    };

    createItem = () => {
        const item = { title: "", description: "", completed: false };

        this.setState({ activeItem: item, modal: !this.state.modal });
    };

    editItem = (item) => {
        this.setState({ activeItem: item, modal: !this.state.modal });
    };

    displayCompleted = (status) => {
        if (status) {
            return this.setState({ viewCompleted: true });
        }

        return this.setState({ viewCompleted: false });
    };

    handleSearch = (e) => {
        this.setState({ searchTerm: e.target.value });
    };

    markCompleted = (item) => {
        axios
            .put(`http://127.0.0.1:8000/api/todos/${item.id}/mark_completed/`)
            .then((res) => this.refreshList());
    };

    markIncomplete = (item) => {
        axios
            .put(`http://127.0.0.1:8000/api/todos/${item.id}/mark_incomplete/`)
            .then((res) => this.refreshList());
    };

    renderTabList = () => {
        return (
            <div className="nav nav-tabs">
                <span
                    onClick={() => this.displayCompleted(true)}
                    className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
                >
                    Complete
                </span>
                <span
                    onClick={() => this.displayCompleted(false)}
                    className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
                >
                    Incomplete
                </span>
                {/* Add search input field */}
                <input
                    type="text"
                    placeholder="Search Todos"
                    value={this.state.searchTerm}
                    onChange={this.handleSearch}
                />
            </div>
        );
    };

    renderItems = () => {
        const { viewCompleted, searchTerm } = this.state;
        const token = localStorage.getItem("authTokens");
        const decodedToken = jwtDecode(token);
        const currentUserID = decodedToken.user_id;

        let newItems = this.state.todoList.filter(
            (item) => item.completed === viewCompleted
        );

        // Apply search filter
        newItems = newItems.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return newItems.map((item) => (
           <div className="bada"> <div key={item.id} className="todo-card" style={{ marginBottom: "2vh" }}>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <div>
                        {item.user_id === currentUserID && (
                            <span>
                                {!item.completed ? (
                                    <button
                                        className="btn btn-success mr-2"
                                        onClick={() => this.markCompleted(item)}
                                    >
                                        Mark Complete
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-warning mr-2"
                                        onClick={() => this.markIncomplete(item)}
                                    >
                                        Mark Incomplete
                                    </button>
                                )}
                                <button
                                    className="btn btn-secondary mr-2"
                                    onClick={() => this.editItem(item)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => this.handleDelete(item)}
                                >
                                    Delete
                                </button>
                            </span>
                        )}
                    </div>
                </div>
            </div>
            </div>
        ));
    };

    render() {
        return (
           <div className="bada"> <main className="container" style={{ backgroundColor: "#f2f2f2" }}>
                <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
                <div className="row">
                    <div className="col-md-6 col-sm-10 mx-auto p-0">
                        <div className="card p-3">
                            <div className="mb-4">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.createItem}
                                >
                                    Add task
                                </button>
                            </div>
                            {this.renderTabList()}
                            <div className="list-group list-group-flush border-top-0">
                                {this.renderItems()}
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.modal ? (
                    <Modal
                        activeItem={this.state.activeItem}
                        toggle={this.toggle}
                        onSave={this.handleSubmit}
                    />
                ) : null}
            </main>
            </div>
        );
    }
}

export default Todo;
