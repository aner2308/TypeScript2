import { toDo } from './interface';

//Skapar klass med värdena från toDooch exporterar den
export class listItem implements toDo {
    task: string;
    completionValue: boolean;
    priority: number;

    //Constructor till klassen listItem
    constructor(task: string, completionValue: boolean, priority: number) {
        
        this.task = task;
        this.completionValue = completionValue;
        this.priority = priority;
    }


}