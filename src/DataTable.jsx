import { useState } from 'react';
import TableRow from './TableRow';

function DataTable(){
    const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3", "Task 4"]);
    // let tasks = ["Task 1", "Task 2", "Task 3", "Task 4"];
    // const nbr = [1,2,3]; [2,4,6]
    // nbr.map((i)=> i*2 )

    function deleteTask(task)
    {
        setTasks(tasks.filter((t)=> t!=task));
        console.log("test", tasks);
    }

    return (
        <table>
            <tr>
                <th>Title</th>
                <th>Action</th>
            </tr>
            {
                tasks.map((i)=> <TableRow data={i} action={deleteTask}/> )
            }
        </table>
    );
}


export default DataTable;