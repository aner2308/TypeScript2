import { listItem } from "./listItem";
import { LocalStorageUtil } from "./localStorageUtil";

export class listItemManager {
    private listItems: listItem[] = [];

    constructor() {
        this.listItems = LocalStorageUtil.loadListItems();
    }

    //Funktion för att lägga till items i listan och spara i local storage
    public addListItem(listItem: listItem): void {
        this.listItems.push(listItem);
        LocalStorageUtil.saveListItems(this.listItems);
    }

    public completeListItem(item: listItem): void {

        const index = this.listItems.indexOf(item);

        this.listItems[index].completionValue = !this.listItems[index].completionValue;

        LocalStorageUtil.saveListItems(this.listItems);
    }

    //Funktion för att radera items från listan och spara i local storage
    public deleteListItem(item: listItem): void {

        const index = this.listItems.indexOf(item);

        this.listItems.splice(index, 1);
        LocalStorageUtil.saveListItems(this.listItems);

    }

    //Funktion för att hämta alla listItems till sidan
    public getListItems(): listItem[] {
        return this.listItems;
    }
}