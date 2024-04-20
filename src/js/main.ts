import { listItem } from "./listItem";
import { listItemManager } from "./listItemManager";
import { LocalStorageUtil } from "./localStorageUtil";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form')! as HTMLFormElement;
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addListItem();
    });
});

const manager = new listItemManager();

function addListItem(): void {

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
            toDoList.innerHTML = ''; // Rensa listan innan den laddas om
            priorityLists[priority].forEach((item) => {
                const li = document.createElement('li');

                //Skapa en div för listobjektet och raderingsknappen
                const listItemContainer = document.createElement('div');
                listItemContainer.classList.add('list-item-container');

                // Skapa en checkruta
                const checkBox = document.createElement('input');
                checkBox.type = 'checkbox';
                checkBox.className = 'check-box';
                //Sätter checkboxens status baserat på completionValue
                checkBox.checked = item.completionValue
                // Lägg till en händelselyssnare för att hantera när checkboxen är markerad
                checkBox.addEventListener('change', () => checkboxChange(item));

                //Raderingsknapp
                const deleteButton = document.createElement('button');
                deleteButton.className = 'deleteBtn';
                //Lägger till soptunna som raderingssymbol
                deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
                //Event listener för knappen
                deleteButton.addEventListener('click', () => deleteItem(item));

                const toDoText = document.createElement('span');
                toDoText.innerHTML = item.task;

                listItemContainer.appendChild(deleteButton);
                listItemContainer.appendChild(checkBox);
                listItemContainer.appendChild(toDoText);
                li.appendChild(listItemContainer);

                toDoList.appendChild(li);
            });
        }
    }
    
    // Spara den uppdaterade listan till localStorage
    LocalStorageUtil.saveListItems(manager.getListItems());
}


//Funktion för checkbox
function checkboxChange(item: listItem): void {
    // Uppdatera completionValue baserat på checkboxens status
    item.completionValue = !item.completionValue;

    // Spara den uppdaterade listan till localStorage
    LocalStorageUtil.saveListItems(manager.getListItems());
}

//Funktionen kör delete på det list item som hör till deleteknappen, och renderar om listan
function deleteItem(item: listItem): void {
    manager.deleteListItem(item);
    renderToDo();
}

renderToDo();