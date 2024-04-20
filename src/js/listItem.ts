import { toDo } from './interface';

export class listItem implements toDo {
    task: string;
    completed: boolean;
    priority: number;

    constructor(task: string, completed: boolean, priority: number) {
        
        this.task = task;
        this.completed = completed;
        this.priority = priority;
    }


}