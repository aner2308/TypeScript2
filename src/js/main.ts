import { listItem } from "./listItem";
import { listItemManager } from "./listItemManager";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form')! as HTMLFormElement;
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("HEJ!")
    })
})