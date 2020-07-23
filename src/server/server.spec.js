import {addNewTask, updateTask} from './server';

async function myFunc() {
    
    
    await addNewTask(
    {
        name: "My new task",
        id: "123456"
    }
    );

    await updateTask(
        {
            id: "123456",
            name: "NEW NAME SET"

        }
    );
}

myFunc();