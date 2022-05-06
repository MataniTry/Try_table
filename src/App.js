import React from "react";
import "./App.css"
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Username from "./components/Username/Username";
import Table from "./components/Table/Table";
import {BrowserRouter, Route, Routes} from "react-router-dom";


class App extends React.Component {
    render() {
        return (

            <div className='app-wrapper'>

                <Header/>

                <NavBar/>

                <Username/>

                <Routes>
                    <Route path="/group1" element={<Table/>}/>
                </Routes>


            </div>
        )
    }
}

export default App;
