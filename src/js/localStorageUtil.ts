import { listItem } from "./listItem";
export class LocalStorageUtil {

    static saveContacts(listItems: listItem[]) {
        localStorage.setItem('listItems', JSON.stringify(listItems)); // Sparar hela toDo-arrayen till localStorage
    }

    static loadListItems(): listItem[] {
        const ToDoStr = localStorage.getItem('listItems');
        if (ToDoStr) {
            return JSON.parse(ToDoStr);
        } else {
            return []; // Om inga ToDo finns lagrade, returnera en tom array
        }
    }
}