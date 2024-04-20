import { toDo } from './interface';

export class listItem implements toDo {
    task: string;
    completionValue: boolean;
    priority: number;

    constructor(task: string, completionValue: boolean, priority: number) {
        
        this.task = task;
        this.completionValue = completionValue;
        this.priority = priority;
    }


}