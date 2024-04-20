import { listItem } from "./listItem";
import { LocalStorageUtil } from "./localStorageUtil";

export class listItemManager {
    private listItems: listItem[] = [];

    constructor() {
        this.listItems = LocalStorageUtil.loadListItems();
        console.log("Hej")
    }
}