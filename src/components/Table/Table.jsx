import React from "react";
import table from './Table.module.css'
import Table_header from "./header/table_header";
import Elem from "./element/element";
import Add_user from "../Buttons/Add_user";
import Delete_user from "../Buttons/Delete_user";

const Table = () => {
    return (
        <div className={table.table}>


            <table>

                <Table_header/>
                <Elem id = '1' name = 'Vasya' surname = 'Pupkin' subject = 'PythonPro2' presence = '+'/>
                <Elem id = '2' name = 'Dura' surname = 'Pupkin' subject = 'PythonPro2' presence = '-'/>
                <Elem id = '3' name = 'Mudak' surname = 'Pupkin' subject = 'PythonPro2' presence = '+'/>

            </table>

            <Add_user />
            <Delete_user />

        </div>
    )
}

export default Table