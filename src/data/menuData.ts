export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
};

export type MenuData = {
  [key: string]: MenuItem[];
};

export const menuData: MenuData = {
  "Signature Dishes": [
    { id: 'sd1', name: "Linguini allla Toscana", description: "Chicken or Shrimp sauteed in olive oil, butter, bacon, garlic then tossed in Linguini pasta and served with a creamy white wine chipotle sauce.", price: "$20" },
    { id: 'sd2', name: "Pollo Alicante", description: "Pan-Grilled chicken breast topped off with spinach and mozzarella.", price: "$25" },
    { id: 'sd3', name: "8oz. Angus Tenderloin", description: "Our most tender cut of premium beef seasoned and grilled to perfection. Cooked to order.", price: "$28" },
    { id: 'sd4', name: "Lemon Butter Salmon", description: "Pan-grilled fresh Alaskan salmon fillet served with a lemon butter caper sauce.", price: "$28" },
    { id: 'sd5', name: "Pollo Sevilla", description: "Chicken breast with portobello mushrooms, mozzarella cheese and grilled onions.", price: "$25" }
  ],
  "Tacos": [
    { id: 't1', name: "Las Tablitas", description: "6 chopped Ribeye tacos with grilled onions, cilantro, avocado and mozzarella cheese.", price: "Half $10 / Full $16" },
    { id: 't2', name: "Cochinita Pibil", description: "6 pulled pork tacos in Achiote sauce with onions & habanero peppers. Served with a side of onions sauteed in habanero vinegar.", price: "Half $10 / Full $16" },
    { id: 't3', name: "Jimmy's Special", description: "4 large corn tortilla tacos served with chopped Ribeye, bacon, onions, bell peper and topped with white cheese au gratin.", price: "$15" },
    { id: 't4', name: "Fish", description: "6 Tilapia tacos, bell peppers, onions, Mexican cream, mozzarella cheese, lettuce & diced tomatoes.", price: "Half $10 / Full $16" },
    { id: 't5', name: "Zaragoza", description: "4 Crispy fried corn tortilla tacos, sutffed with pan-grilled tuna, lettuce, diced tomatoes, avocado and olive oil.", price: "$15" }
  ],
  "Soups & Salads": [
    { id: 'ss1', name: "Azteca Soup", description: "Authentic tortilla soup with tomatoes and chipotle peppers. Served with white cheese, Mexican cream and avocado on the side.", price: "Cup $7 / Bowl $9" },
    { id: 'ss2', name: "Crema Poblana", description: "Fresh poblano peppers in a creamy soup with corn and mozzarella.", price: "Cup $7 / Bowl $9" },
    { id: 'ss3', name: "El Greco Salad", description: "Spring mix served with egg slice, feta cheese, onions, pepperonis, mushrooms and our own house herb vinaigrette dressing.", price: "Small $11 / Large $14" },
    { id: 'ss4', name: "Stuffed Avocado", description: "A ripe avocado half-stuffed and piled high with our signature chicken salad or shrimp salad, accompanied with fresh fruit.", price: "$17" }
  ],
  "Sandwiches & Burgers": [
    { id: 'sb1', name: "Gazpacho's Cheeseburger", description: "1/2 lb Prime Angus beef patty with lettuce, tomatoes, pickles, onions and your choice of cheddar of Swiss cheese. Served with steak fries.", price: "$15" },
    { id: 'sb2', name: "Da Vinci Panini", description: "Grilled chicken breast, roasted peppers, sweet onions, pesto and mozzarella cheese.", price: "$16" },
    { id: 'sb3', name: "Gazpacho's Fantastic", description: "Grilled Chicken breast, bacon, avocado, onions, tomatoes and herb infused specialty mayonnaise.", price: "$16" },
    { id: 'sb4', name: "Popeye Sub", description: "Chicken breast, spinach and cheese au gratin.", price: "$16" }
  ],
  "Tapas & Bar": [
    { id: 'tb1', name: "Abe Empandadas", description: "2 Homemade pastries stuffed with ham, mushrooms, and mozzarella cheese, accompanied with fresh fruit.", price: "$15" },
    { id: 'tb2', name: "Ceviche Gazpachos", description: "Tilapia marinated in lemon juice & olive oil, seasoned with avocado, diced tomatoes, onions, cilantro, habanero peppers and fresh ground pepper.", price: "$16" },
    { id: 'tb3', name: "Tocinetas", description: "Four (4) seared tenderloin strips wrapped in bacon, served with our house chimichurri sauce and avocado slices.", price: "$18" },
    { id: 'tb4', name: "Quesadillas with Ribeye", description: "Two flour tortillas with ribeye mozzarella & cheddar cheese, pico de Gallo, sour cream and 2oz cup of guacamole.", price: "$15" }
  ],
  "Drinks": [
    { id: 'd1', name: "Margaritas Premium", description: "Mango, Strawberry, Tamarindo... always with Tequila Patron or 3 Generaciones.", price: "$10" },
    { id: 'd2', name: "Martinis", description: "Cucumber, Cosmopolitan, Dirty, Manhatan.", price: "$9" },
    { id: 'd3', name: "Carajillo", description: "A perfect mix for after dinner.", price: "$10" },
    { id: 'd4', name: "Smoked Mezcalita", description: "Artisanal mezcal, fresh lime, agave, charred pineapple, tajin rim. (Mock data version based on typical Mexican bar)", price: "$15" }
  ]
};

export const categories = Object.keys(menuData);
