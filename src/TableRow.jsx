import { useEffect } from "react";

function TableRow({data, action})
{
    useEffect(()=>{
        console.log("update");
    });
    useEffect(()=>{
        console.log("rendre")
    },[]);
    useEffect(()=>{
        return ()=>{
            console.log("data");
        }
    },[a, tasks]);
    useEffect(()=>{
        return ()=>{
            console.log("remove");
        }
    });
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