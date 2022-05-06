import React from "react";
import table from "./table_header.module.css"
const Table_header = () => {
    return (
        <tr>
            <td className={table.item}>id</td>
            <td className={table.item}>Имя</td>
            <td className={table.item}>Фамилия</td>
            <td className={table.item}>Урок</td>
            <td className={table.item}>Явка</td>
        </tr>
    )
}

export default Table_header;