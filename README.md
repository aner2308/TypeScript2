# Webbsida till moment 2 i kursen DT208G, TypeScript.
*Anton Eriksson, aner2308*

Denna README-fil dokumenterar funktionaliteten för min webbsida. Webbsidans funktionalitet är kodad med hjälp av TypeScript.

### Beskrivning
Min webbsida är skapad för att användaren ska kunna lagra "att göra"- listpunkter med hjälp av ett formulär. Punkterna hamnar i olika listor beroende på prioritet. Man kan antingen klarmarkera en listpunkt, eller radera den helt. Alla förändringar på webbsidan lagras i användarens localStorage och läses in på nytt vid inläsning av webbsidan.


### Installation
Följ stegen nedan för installation.

1. Klona detta repo till din lokala maskin.
2. Installera alla dependencies genom att köra npm install.

### Skapandet:
Webbsidan är uppbyggd som en single page application. Den har bara en HTML- fil och all data som läggs till eller tas bort uppdaterar den filen. Den stylas med CSS, och funktionaliteten är skapad i TypeScript. HTML-dokumentet länkar till main.ts, som i sin tur hämtar in data med hjälp av **import** från andra .ts dokument. TypeScript-dokumentens namn och innehåll är som följer:

## interface.ts
Skapar en **interface** med namn toDo som exporteras och används som mall/restriktioner i *listItem.ts*.


## listItem.ts
Importerar min interface från *interface.ts*. Sedan skapas en klass med värdena från **toDo** och lägger till en **constructor**. Klassen får namnet listItem, och exporteras till både *listItemManager.ts*, *localStorageUtil.ts*, och *main.ts*. 

## LocalStorageUtil.ts
Importerar min class **listItem** från *listItem.ts* och använder den för att skapa en ny class med namn **LocalStorageUtil**. Classen används för att köra två olika funktioner. Med funktionen **saveListItems()** konverteras listItems- datan till en array i JSON format. Arrayen kan sen hämtas in vid inladdning av sidan med hjälp av funktionen **loadListItems()**.

Klassen **LocalStorageUtil** exporteras till *listItemManager.ts*.

## listItemManager.ts
Här ligger en class med namn listItemManager som importerar både min class listItem från *listItem.ts* och min class **LocalStorageUtil** från *localStorageUtil.ts*. Classen **listItemManager** exporteras till *main.ts*. I **listItemManager**- classen finns funktioner för att lägga till, ta bort, och klarmarkera olika "att göra"- punkter. I varje funktion används LocalStorageUtil för att spara uppdateingen i localStorage. 

I klassen listItemManager finns också en funktion med namn **getListItems()** som hämtar in alla sparade objekt.

## main.ts
Importerar både min class **listItem** från *listItem.ts* och min class **listItemManager** från *listItemManager.ts*. Med hjälp av dessa kan alla sidor samspela utan att all kod hamnar på samma ställe, och jag kan hålla *main.ts* enkel och prydlig.

På *main.ts* skapas en funktion för att lägga till nya list-items, och en funktion för att skriva ut sparade list-items på webbsidan. Varje gång man lägger till ett nytt item så körs också utskriftsfunktionen på nytt för att uppdatera sidan med den nya informationen. I utskriftsfunktionen placeras list-items på webbsidan med hjälp av DOM-manipulation. Alla list-items också en checkruta och en delete-knapp bredvid sig som länkar till just det list-itemet.

### (Dev-)Dependencies:
- Parcel

