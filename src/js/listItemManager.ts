import { listItem } from "./listItem";
import { LocalStorageUtil } from "./localStorageUtil";

export class listItemManager {
    private listItems: listItem[] = [];

    constructor() {
        this.listItems = LocalStorageUtil.loadListItems();
    }

    public addListItem(listItem: listItem): void {
        this.listItems.push(listItem);
        LocalStorageUtil.saveListItems(this.listItems);
    }

    public deleteListItem(index: number): void {
        this.listItems.splice(index, 1);
        LocalStorageUtil.saveListItems(this.listItems);
    }

    public getListItems(): listItem[] {
        return this.listItems;
    }
}