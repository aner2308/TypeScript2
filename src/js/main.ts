import { listItem } from "./listItem";
import { listItemManager } from "./listItemManager";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form')! as HTMLFormElement;
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("HEJ!")
        addListItem();
    });
});

const manager = new listItemManager();

function addListItem(): void {
    console.log("TJA!")

    //Hämtar mina värden från tabellen
    const textInput = document.getElementById('task') as HTMLInputElement;
    const priorityInput = document.getElementById('priority') as HTMLInputElement;

    const toDoTextValue = textInput.value;
    const priorityValue = parseInt(priorityInput.value);
    const completionValue = false;

    if (!toDoTextValue.trim()) {
        //Felmeddelande om formuläret är tomt
        console.log("Saknar input...");
        return;
    } else {
        const newToDoItem = new listItem(toDoTextValue, completionValue, priorityValue);
        manager.addListItem(newToDoItem);
        textInput.value = ''
        //Kontroll av kod
        console.log(toDoTextValue, completionValue, priorityValue)

        //Kör funktion för att ladda in ToDo listan
        renderToDo();
    }
}

function renderToDo(): void {

}