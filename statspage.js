// have to list which json files are in the restaurant folder
let files = ["aragorn.json", "frodo.json", "legolas.json"]

const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.responseType = 'json';
      if (data) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }
  
      xhr.onload = () => {
        let data = xhr.responseText;
        if (xhr.status >= 400) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
        xhr.send(JSON.stringify(data));
      };
  
      xhr.onerror = () => {
        reject('Something went wrong!');
      };
  
    //   xhr.send(JSON.stringify(data));
    });
    return promise;
  };
  
  const sendData = () => {
    sendHttpRequest('POST', `http://127.0.0.1:3000/restaurants/${files[0]}`)
      .then(responseData => {
        console.log(responseData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getData = () => {
    sendHttpRequest('GET', `http://127.0.0.1:3000/restaurants/${files[0]}`).then(responseData => {
      console.log(responseData);
    });
  };

  sendData();
  getData();

let aragorn = {
name: "Aragorn's Orc BBQ",
min_order: 20,
delivery_fee: 5,
menu: {
"Appetizers": {
0: {
name: "Orc feet",
description: "Seasoned and grilled over an open flame.",
price: 5.50
},
1: {
name: "Pickled Orc fingers",
description: "Served with warm bread, 5 per order.",
price: 4.00
},
2: { //Thank you Kiratchii
name: "Sauron's Lava Soup",
description: "It's just really spicy water.",
price: 7.50
},
3: {
name: "Eowyn's (In)Famous Stew",
description: "Bet you can't eat it all.",
price: 0.50
},
4: {
name: "The 9 rings of men.",
description: "The finest of onion rings served with 9 different dipping sauces.",
price: 14.50
}
},
"Combos": {
5: {
name: "Buying the Farm",
description: "An arm and a leg, a side of cheek meat, and a buttered biscuit.",
price: 15.99
},
6: {
name: "The Black Gate Box",
description: "Lots of unidentified pieces. Serves 50.",
price: 65.00
},
7: {//Thanks to M_Sabeyon
name: "Mount Doom Roast Special with Side of Precious Onion Rings.",
description: "Smeagol's favorite.",
price: 15.75
},
8: { //Thanks Shar[TA]
name: "Morgoth's Scorched Burgers with Chips",
description: "Blackened beyond recognition.",
price: 13.33

},
10: {
name: "Slab of Lurtz Meat with Greens.",
description: "Get it while supplies last.",
price: 17.50
},
11: {
name: "Rangers Field Feast.",
description: "Is it chicken? Is it rabbit? Or...",
price: 5.99
}
},
"Drinks": {
12: {
name: "Orc's Blood Mead",
description: "It's actually raspberries - Orc's blood would be gross.",
price: 5.99
},
13: {
name: "Gondorian Grenache",
description: "A fine rose wine.",
price: 7.99
},
14: {
name: "Mordor Mourvedre",
description: "A less-fine rose wine.",
price: 5.99
}
} 
}
}

let legolas = {
name: "Lembas by Legolas",
min_order: 15,
delivery_fee: 3.99,
menu: {
"Lembas": {
0: {
name: "Single",
description: "One piece of lembas.",
price: 3
},
1: {
name: "Double",
description: "Two pieces of lembas.",
price: 5.50
},
2: { 
name: "Triple",
description: "Three pieces, which should be more than enough.",
price: 8.00
}
},
"Combos": {
3: {
name: "Second Breakfast",
description: "Two pieces of lembas with honey.",
price: 7.50
},
4: {
name: "There and Back Again",
description: "All you need for a long journey - 6 pieces of lembas, salted pork, and a flagon of wine.",
price: 25.99
},
5: {
name: "Best Friends Forever",
description: "Lembas and a heavy stout.",
price: 6.60
}
}
}
}

let frodo = {
name: "Frodo's Flapjacks",
min_order: 35,
delivery_fee: 6,
menu: {
"Breakfast": {
0: {
name: "Hobbit Hash",
description: "Five flapjacks, potatoes, leeks, garlic, cheese.",
price: 9.00
},
1: {
name: "The Full Flapjack Breakfast",
description: "Eight flapjacks, two sausages, 3 eggs, 4 slices of bacon, beans, and a coffee.",
price: 14.00
},
2: { 
name: "Southfarthing Slammer",
description: "15 flapjacks and 2 pints of syrup.",
price: 12.00
}

},
"Second Breakfast": {
3: {
name: "Beorning Breakfast",
description: "6 flapjacks smothers in honey.",
price: 7.50
},
4: {
name: "Shire Strawberry Special",
description: "6 flapjacks and a hearty serving of strawberry jam.",
price: 8
},
5: {
name: "Buckland Blackberry Breakfast",
description: "6 flapjacks covered in fresh blackberries. Served with a large side of sausage.",
price: 14.99
}
},
"Elevenses": {
6: {
name: "Lembas",
description: "Three pieces of traditional Elvish Waybread",
price: 7.70
},
7: {
name: "Muffins of the Marish",
description: "A variety of 8 different types of muffins, served with tea.",
price: 9.00
},
8: {
name: "Hasty Hobbit Hash",
description: "Potatoes with onions and cheese. Served with coffee.",
price: 5.00
}
},
"Luncheon": {
9: {
name: "Shepherd's Pie",
description: "A classic. Includes 3 pies.",
price: 15.99
},
10: {
name: "Roast Pork",
description: "An entire pig slow-roasted over a fire.",
price: 27.99
},
11: {
name: "Fish and Chips",
description: "Fish - fried. Chips - nice and crispy.",
price: 5.99
}
},
"Afternoon Tea": {
12: {
name: "Tea",
description: "Served with sugar and cream.",
price: 3
},
13: {
name: "Coffee",
description: "Served with sugar and cream.",
price: 3.50
},
14: {
name: "Cookies and Cream",
description: "A dozen cookies served with a vat of cream.",
price: 15.99
},
15: {
name: "Mixed Berry Pie",
description: "Fresh baked daily.",
price: 7.00
}
},
"Dinner": {
16: {
name: "Po-ta-to Platter",
description: "Boiled. Mashed. Stuck in a stew.",
price: 6
},
17: {
name: "Bree and Apple",
description: "One wheel of brie with slices of apple.",
price: 7.99
},
18: {
name: "Maggot's Mushroom Mashup",
description: "It sounds disgusting, but its pretty good",
price: 6.50
},
19: {
name: "Fresh Baked Bread",
description: "A whole loaf of the finest bread the Shire has to offer.",
price: 6
},
20: {
name: "Pint of Ale",
description: "Yes, it comes in pints.",
price: 5
}
},
"Supper": {
21: {
name: "Sausage Sandwich",
description: "Six whole sausages served on a loaf of bread. Covered in onions, mushrooms and gravy.",
price: 15.99
},
22: {
name: "Shire Supper",
description: "End the day as you started it, with a dozen flapjacks, 5 eggs, 3 sausages, 7 pieces of bacon, and a pint of ale.",
price: 37.99
}
}
}
}

//This should also be removed. The restaurant names should also come from the server.
let restaurants = {"Aragorn's Orc BBQ": aragorn, "Lembas by Legolas": legolas, "Frodo's Flapjacks": frodo};

let ordersPlaced = [["Lembas by Legolas",{"1":4,"2":3}],["Aragorn's Orc BBQ",{"2": 2, "4":2}],["Frodo's Flapjacks",{"0":1,"1":1,"2":1}],["Lembas by Legolas",{"0":6,"1":1}]]

// initialize restaurant total orders
let orderTotals = {}
for (const key in restaurants) {
    orderTotals[key] = 0;
}

// populate total orders for each restaurant
function getTotalOrders(ordersPlaced) {
    for(let i = 0; i < Object.keys(ordersPlaced).length; i++) {
        let rest = ordersPlaced[i][0]
        let num = Object.values(ordersPlaced[i][1]).reduce((x, y) => x + y, 0)
        orderTotals[rest] += num
    }
    return orderTotals
}

// calculate the total orders for each restaurant
getTotalOrders(ordersPlaced);

// initialize restaurant average order totals
let AvgTotals = {}
for (const key in restaurants) {
    AvgTotals[key] = [];
}

// calculate average order total of restaurant orders
function avgOrderTotals(ordersPlaced) {
    for(let i = 0; i < Object.keys(ordersPlaced).length; i++) {
        let subTotal = 0
        for(let j = 0; j < Object.keys(ordersPlaced[i][1]).length; j++) {
            let restName = restaurants[ordersPlaced[i][0]]
            let restItem = getItemById(restName, Object.keys(ordersPlaced[i][1])[j])
            subTotal += restItem.price * Object.values(ordersPlaced[i][1])[j]
        }
        let total = subTotal * 1.10 + restaurants[ordersPlaced[i][0]].delivery_fee
        AvgTotals[ordersPlaced[i][0]].push(Math.round((total + Number.EPSILON) * 100) / 100)
    }
    // average the totals for each restaurant
    for(let k = 0; k < Object.keys(AvgTotals).length; k++) {
        let lstTotals = AvgTotals[Object.keys(AvgTotals)[k]]
        const sum = lstTotals.reduce((x, y) => x + y, 0);
        AvgTotals[Object.keys(AvgTotals)[k]] = Math.round((((sum / lstTotals.length) || 0) + Number.EPSILON) * 100) / 100
    }
    return AvgTotals
}

// calculate the average order total for each restaurant
avgOrderTotals(ordersPlaced);

// initialize placeholder for restaurant items
let items = {}
for (const key in restaurants) {
    items[key] = ["0", 0];
}

// get most popular item based on past orders placed
function generateItems(ordersPlaced) {
    for(let i = 0; i < Object.keys(ordersPlaced).length; i++) {
        let restName = ordersPlaced[i][0]
        let item = getMax(ordersPlaced[i][1])
        if (items[restName][1] >= item[1]) {
            let itemName = getItemById(restaurants[restName], item[0])
            orderTotals[restName] += itemName
        }
        else {
            items[restName] = item
        }
    }
    // get names of most popular items for each restaurant
    for(let j = 0; j < Object.keys(items).length; j++) {
        let restName = Object.keys(AvgTotals)[j]
        items[restName] = getItemById(restaurants[restName], items[restName][0]).name
    }
    return items
}

// calculate the most popular item for each restaurant
generateItems(ordersPlaced);

// display statistics for each restaurant
function displayStatistics() {

let output = "";

//Add the summary fields to the output HTML
output += `Total Orders: 0 <br>`;
output += `Average Total Order: 0 <br>`;
output += `Most Popular: item <br> <br>`;

// condition if orderTotals contains some orders submitted
if (Object.values(orderTotals).reduce((x, y) => x + y, 0) > 0) {
    output = "";
    for(let i = 0; i < Object.keys(orderTotals).length; i++) {
        let restName = Object.keys(orderTotals)[i]
        output += `Restaurant Name: ${restName} <br>`;
        output += `Total Orders: ${orderTotals[restName]} <br>`;
        output += `Average Total Order: ${AvgTotals[restName]} <br>`;
        output += `Most Popular: ${items[restName]} <br> <br>`;
    }
}
return output
}

displayStatistics();

// #################### Helper Functions ####################

// return an item name by its ID number if it exists in the current restaurant's menu.
function getItemById(currentRestaurant, id){
    let categories = Object.keys(currentRestaurant.menu);
    for(let i = 0; i < Object.keys(categories).length; i++){
        if(currentRestaurant.menu[categories[i]].hasOwnProperty(id)){
            return currentRestaurant.menu[categories[i]][id];
        }
    }
    return null;
}

// get key, value of max number of items placed from order dictionary
function getMax(obj) {
    // const k = Math.max.apply(null,Object.keys(obj));
    const v = Math.max.apply(null,Object.values(obj));
    const k = Object.keys(obj).find(key => obj[key] === v);
    // const v = Math.max.apply(null,Object.values(obj));
    return [k, v]
}
