const fs = require('fs');

const text = fs.readFileSync('menu.txt', 'utf-8');
const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l);

const menuData = {};
let currentCategory = null;
let currentItem = null;

const knownCategories = [
    "SIGNATURE DISHES", "Soups", "Salads", "Tacos", "Crepes", "Combos", 
    "Desserts", "Sides", "RED WINE", "WHITE WINE", "BEER", "MIXED DRINKS", 
    "TAPAS", "SANDWICHES", "PANINIS", "HAMBURGER", "SUBMARINES", 
    "BOTANA DEL BAR (THE BAR)", "DRINKS", "CHILDREN'S MENU", "SEPTEMBER MENU",
    "WHITE WINES", "RED WINES"
].map(c => c.toUpperCase());

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Ignore initial header
    if (line === "Gazpacho's Menu") continue;
    
    // Check if category
    if (knownCategories.includes(line.toUpperCase())) {
        let catName = line.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
        if (catName.toUpperCase() === "BOTANA DEL BAR (THE BAR)") catName = "Botana del Bar";
        currentCategory = catName;
        menuData[currentCategory] = [];
        
        // Skip subtitles
        while (i + 1 < lines.length && !lines[i+1].startsWith('$') && !knownCategories.includes(lines[i+1].toUpperCase()) && (i+2 >= lines.length || !lines[i+2].startsWith('$'))) {
            const nextLine = lines[i+1].toUpperCase();
            if (["CUP", "BOWL", "POT", "SMALL", "LARGE", "HALF", "FULL", "GLASS"].includes(nextLine)) break;
            i++;
        }
        continue;
    }
    
    if (currentCategory) {
        if (line.startsWith('$')) {
            if (currentItem) {
                currentItem.price = currentItem.price ? currentItem.price + ' / ' + line : line;
                menuData[currentCategory].push(currentItem);
                currentItem = null;
            }
            continue;
        }

        const upperLine = line.toUpperCase();
        const sizeModifiers = ["CUP", "BOWL", "POT", "SMALL", "LARGE", "HALF", "FULL", "GLASS"];
        const beerSizes = ["LONG NECK --12 OZ", "LONG NECK---12 OZ", "LONG NECK----12 OZ", "LONG NECK --- 12OZ"];
        
        if (sizeModifiers.includes(upperLine) || beerSizes.includes(upperLine)) {
            if (i + 1 < lines.length && lines[i+1].startsWith('$')) {
                const price = lines[i+1];
                i++; // skip price
                if (currentItem) {
                    currentItem.price = currentItem.price ? currentItem.price + ' | ' + line + ': ' + price : line + ': ' + price;
                } else if (menuData[currentCategory].length > 0) {
                    const last = menuData[currentCategory][menuData[currentCategory].length - 1];
                    last.price = last.price ? last.price + ' | ' + line + ': ' + price : line + ': ' + price;
                }
            } else {
                // If the size is actually a name of an item (unlikely but possible)
                if (!currentItem) currentItem = { id: currentCategory.substring(0,3) + '_' + Math.random().toString(36).substr(2, 9), name: line, description: '', price: '' };
            }
            continue;
        }

        // New Item
        if (!currentItem) {
            currentItem = { id: currentCategory.substring(0,3) + '_' + Math.random().toString(36).substr(2, 9), name: line, description: '', price: '' };
        } else {
            // Description line
            currentItem.description += (currentItem.description ? ' ' : '') + line;
        }
    }
}

// In case the last item didn't get pushed
if (currentItem && currentCategory) {
    menuData[currentCategory].push(currentItem);
}

// Filter empty categories
const cleanMenuData = {};
for (const cat in menuData) {
    if (menuData[cat].length > 0) cleanMenuData[cat] = menuData[cat];
}

const tsContent = `export type MenuItem = { id: string; name: string; description: string; price: string; };\n\n` +
`export type MenuData = { [key: string]: MenuItem[]; };\n\n` +
`export const menuData: MenuData = ${JSON.stringify(cleanMenuData, null, 2)};\n` +
`export const categories = Object.keys(menuData);\n`;

fs.writeFileSync('src/data/menuData.ts', tsContent);
console.log('Parsed using node!');
