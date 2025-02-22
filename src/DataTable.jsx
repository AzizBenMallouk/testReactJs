import TableRow from './TableRow';

function DataTable(){
    return (
        <table>
            <tr>
                <th>Title</th>
                <th>Action</th>
            </tr>
            <TableRow data="test"/>
            <TableRow data="test"/>
            <TableRow data="test"/>
            <TableRow data="test"/>
        </table>
    );
}


export default DataTable;