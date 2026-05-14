import re
import json

with open('menu.txt', 'r', encoding='utf-8') as f:
    lines = [line.strip() for line in f.readlines()]

menu_data = {}
current_category = None
current_item = None
current_desc = []
current_price = None

# A list of known categories to watch out for.
categories = [
    "SIGNATURE DISHES", "Soups", "Salads", "Tacos", "Crepes", "Combos", 
    "Desserts", "Sides", "RED WINE", "WHITE WINE", "BEER", "MIXED DRINKS", 
    "TAPAS", "SANDWICHES", "PANINIS", "HAMBURGER", "SUBMARINES", 
    "BOTANA DEL BAR (THE BAR)", "DRINKS", "CHILDREN'S MENU", "SEPTEMBER MENU"
]

cat_upper = [c.upper() for c in categories]

i = 0
while i < len(lines):
    line = lines[i]
    if not line or line == "Gazpacho's Menu":
        i += 1
        continue
    
    # check if category
    if line.upper() in cat_upper or line in categories:
        # Title case the category for better display
        c_name = line.title()
        if c_name == "Botana Del Bar (The Bar)": c_name = "Botana del Bar"
        if c_name == "Red Wine": c_name = "Red Wines"
        if c_name == "White Wine": c_name = "White Wines"
        current_category = c_name
        menu_data[current_category] = []
        i += 1
        
        # skip subtitles
        while i < len(lines) and lines[i] and not lines[i].startswith('$') and lines[i].upper() not in cat_upper and i+1 < len(lines) and not lines[i+1].startswith('$'):
            # Some categories have subtitles like "Crisp & Fresh", skip them if the next line is an item
            if "WINES" in lines[i]:
                i += 1
            else:
                break
        continue
    
    if current_category:
        # if it's a price line (starts with $)
        if line.startswith('$'):
            price = line
            if current_item:
                current_item['price'] = price
                # if there is description
                if current_desc:
                    # we ignore sizing lines like "small", "large", "Cup", "Bowl" unless we want to attach them
                    pass
                current_item = None
            i += 1
            continue

        # Look ahead to see if it's an item name (followed by desc or price)
        # Often an item name is followed by a description and then a price
        
        # Let's just heuristically say: if we don't have a current item, this is an item.
        # But wait, there are sizes like "Cup" / "Bowl". 
        
        if line.upper() in ["CUP", "BOWL", "POT", "SMALL", "LARGE", "HALF", "FULL", "GLASS", "LONG NECK --12 OZ", "LONG NECK---12 OZ", "LONG NECK----12 OZ", "LONG NECK --- 12OZ"]:
            # it's a size modifier, the next line is usually a price
            size = line
            i += 1
            if i < len(lines) and lines[i].startswith('$'):
                if len(menu_data[current_category]) > 0:
                    last_item = menu_data[current_category][-1]
                    if last_item['price'] == "":
                        last_item['price'] = f"{size} {lines[i]}"
                    else:
                        last_item['price'] += f" / {size} {lines[i]}"
            continue

        if not current_item:
            current_item = {"id": f"{current_category[:3]}_{len(menu_data[current_category])}", "name": line, "description": "", "price": ""}
            menu_data[current_category].append(current_item)
            
            # Read desc until price
            desc_lines = []
            j = i + 1
            while j < len(lines):
                nxt = lines[j]
                if not nxt:
                    j += 1
                    continue
                if nxt.startswith('$') or nxt.upper() in cat_upper or nxt.upper() in ["CUP", "BOWL", "POT", "SMALL", "LARGE", "HALF", "FULL", "GLASS"]:
                    break
                desc_lines.append(nxt)
                j += 1
            current_item["description"] = " ".join(desc_lines)
            i = j - 1
            
    i += 1

# Filter out empty categories or adjust
# Just output as TS file
ts_content = "export type MenuItem = { id: string; name: string; description: string; price: string; };\n\n"
ts_content += "export type MenuData = { [key: string]: MenuItem[]; };\n\n"
ts_content += f"export const menuData: MenuData = {json.dumps(menu_data, indent=2)};\n"
ts_content += "export const categories = Object.keys(menuData);\n"

with open('src/data/menuData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Parsed successfully!")
