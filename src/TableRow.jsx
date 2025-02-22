function TableRow({data, action})
{
    // console.log(data);
    return (
        <tr>
            <td>{data}</td>
            <td>
                <button onClick={()=>action(data)}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default TableRow;