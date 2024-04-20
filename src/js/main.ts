import { listItem } from "./listItem";
import { listItemManager } from "./listItemManager";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form')! as HTMLFormElement;
    form.addEventListener('submit', (event) => {
        event.preventDefault();
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
    const list = manager.getListItems();

    // Loopa igenom listan och dela upp objekten baserat på deras prioritet
    const priorityLists: { [key: number]: listItem[] } = {
        1: [],
        2: [],
        3: []
    };

    list.forEach(item => {
        priorityLists[item.priority].push(item);
    });

    // Loopa igenom varje prioritetlista och rendera varje listobjekt i rätt <ul>
    for (let priority in priorityLists) {
        const toDoList = document.getElementById(`todo-list-${priority}`) as HTMLUListElement;
        if (toDoList) {
            toDoList.innerHTML = ''; // Rensa listan innan du renderar om den
            priorityLists[priority].forEach((item) => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${item.task}</strong><br>`;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = "Radera";
                deleteButton.className = "deleteBtn";
                deleteButton.addEventListener('click', () => deleteItem(item));
                li.appendChild(deleteButton);

                toDoList.appendChild(li);
            });
        }
    }
}

function deleteItem(item: listItem): void {
    manager.deleteListItem(item);
    renderToDo();
}

renderToDo();