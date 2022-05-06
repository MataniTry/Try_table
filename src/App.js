import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";
import Table from "./components/Table/Table";


class App extends React.Component {
    render() {
        return (
            <div className='app-wrapper'>


                <Header/>

                <NavBar/>

                <Content/>

                <Table/>

                <footer>

                </footer>

            </div>
        )
    }
}

export default App;
