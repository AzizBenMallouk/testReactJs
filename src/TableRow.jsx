import { useEffect } from "react";

function TableRow({data, action})
{
    useEffect(()=>{
        return ()=>{
            console.log("data");
        }
    },[data]);
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