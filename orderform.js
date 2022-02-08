// have to list which json files are in the restaurant folder
let files = ["education.json", "self-help.json", "finance.json"]

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

let education = {
author: "An Introduction to Statistical Learning",
min_order: 5,
delivery_fee: 0,
menu: {
"Data Science and Big Data Analytics": {
0: {
author: "David Dietrich, Barry Heller, and Beibei Yang",
cover: "./Covers/Education/DSBDA.jpg",
book: "./Books/Education/Data Science and Big Data Analytics (2015).pdf",
description: `<br> "Data Science and Big Data Analytics is about harnessing the power of data for new insights. <br> \
The book covers the breadth of activities and methods and tools that Data Scientists use. The content focuses on <br> \
concepts, principles and practical applications that are applicable to any industry and technology environment, <br> \
and the learning is supported and explained with examples that you can replicate using open-source software." <br><br> \

"This book will help you: Become a contributor on a data science team Deploy a structured lifecycle approach to <br> \
data analytics problems Apply appropriate analytic techniques and tools to analyzing big data Learn how to tell a <br> 
compelling story with data to drive business action Prepare for EMC Proven Professional Data Science Certification <br> \
Corresponding data sets are available at www.wiley.com/go/9781118876138." <br> \
"Get started discovering, analyzing, visualizing, and presenting data in a meaningful way today!" <br>`,
price: 7.50
}
},
"Cognitive Robotics": {
1: {
author: "Hooman Samani",
cover: "./Covers/Education/CRHS.jpg",
book: "./Books/Education/Cognitive Robotics by Hooman Samani (2015).pdf",
description: `<br> "The kimono-clad android robot that recently made its debut as the new greeter at the entrance of Tokyo's <br> \
Mitsukoshi department store is just one example of the rapid advancements being made in the field of robotics." <br><br> \

"Cognitive robotics is an approach to creating artificial intelligence in robots by enabling them to learn from and respond <br> \
to real-world situations, as opposed to pre-programming the robot with specific responses to every conceivable stimulus." <br><br> \
  
"Presenting the contributions of international experts from various disciplines within the field, Cognitive Robotics provides novel <br> \
material and discusses advanced approaches in the field of intelligent robotics. It explains the various aspects of the topic to provide <br> \
readers with a solid foundation on the subject." <br><br> \

"This edited collection presents theoretical research in cognitive robotics. It takes a multidisciplinary approach that considers the <br> \
artificial intelligence, physical, chemical, philosophical, psychological, social, cultural, and ethical aspects of this rapidly emerging field. <br> \
The editor is a prominent researcher whose Lovotics research into emotional bonds with robots is widely recognized." <br><br> \

"Supplying an accessible introduction to cognitive robotics, the book considers computational intelligence for cognitive robotics based on <br> \
informationally structured space. It examines how people respond to robots and what makes robots psychologically appealing to humans." <br><br> \

"The book contextualizes concepts in the history of studies on intelligence theories and includes case studies of different types of robots in action. <br> \
Although ideal for robotics researchers and professionals, this book is also suitable for use as a supporting textbook in advanced robotics courses at <br> \
both the undergraduate and graduate levels." <br>`,
price: 10.00
},
},
"Rehabilitation Robotics: Technology and Application": {
0: {
author: " Roberto Colombo and Vittorio Sanguineti",
cover: "./Covers/Education/RRTA.jpg",
book: "./Books/Education/Rehabilitation Robotics (2018).pdf",
description: `<br> "Rehabilitation Robotics gives an introduction and overview of all areas of rehabilitation robotics, perfect for anyone new to the field. <br> \
It also summarizes available robot technologies and their application to different pathologies for skilled researchers and clinicians. The editors have been <br> \
involved in the development and application of robotic devices for neurorehabilitation for more than 15 years. This experience using several commercial devices <br> \
for robotic rehabilitation has enabled them to develop the know-how and expertise necessary to guide those seeking comprehensive understanding of this topic." <br><br> \

"Each chapter is written by an expert in the respective field, pulling in perspectives from both engineers and clinicians to present a multi-disciplinary view. <br> \
The book targets the implementation of efficient robot strategies to facilitate the re-acquisition of motor skills. This technology incorporates the outcomes of <br> \
behavioral studies on motor learning and its neural correlates into the design, implementation and validation of robot agents that behave as 'optimal' trainers, <br> \
efficiently exploiting the structure and plasticity of the human sensorimotor systems. In this context, human-robot interaction plays a paramount role, at both the <br> \
physical and cognitive level, toward achieving a symbiotic interaction where the human body and the robot can benefit from each other's dynamics." <br>`,
price: 12.50
}
},
}
}

let selfhelp = {
author: "Self",
min_order: 5,
delivery_fee: 0,
menu: {
"Rehabilitation Robotics: Technology and Application": {
0: {
author: " Roberto Colombo and Vittorio Sanguineti",
cover: "./Covers/Education/RRTA.jpg",
book: "./Books/Education/Rehabilitation Robotics (2018).pdf",
description: `<br> "Rehabilitation Robotics gives an introduction and overview of all areas of rehabilitation robotics, perfect for anyone new to the field. <br> \
It also summarizes available robot technologies and their application to different pathologies for skilled researchers and clinicians. The editors have been <br> \
involved in the development and application of robotic devices for neurorehabilitation for more than 15 years. This experience using several commercial devices <br> \
for robotic rehabilitation has enabled them to develop the know-how and expertise necessary to guide those seeking comprehensive understanding of this topic." <br><br> \

"Each chapter is written by an expert in the respective field, pulling in perspectives from both engineers and clinicians to present a multi-disciplinary view. <br> \
The book targets the implementation of efficient robot strategies to facilitate the re-acquisition of motor skills. This technology incorporates the outcomes of <br> \
behavioral studies on motor learning and its neural correlates into the design, implementation and validation of robot agents that behave as 'optimal' trainers, <br> \
efficiently exploiting the structure and plasticity of the human sensorimotor systems. In this context, human-robot interaction plays a paramount role, at both the <br> \
physical and cognitive level, toward achieving a symbiotic interaction where the human body and the robot can benefit from each other's dynamics." <br>`,
price: 12.50
}
},
}
}

let finance = {
author: "Thomas Sowell",
min_order: 5,
delivery_fee: 0,
menu: {
"Basic Economics": {
1: {
author: "Thomas Sowell",
cover: "./Covers/Finance/BasicEco.jpg",
book: "./Books/Finance/Basic Economics by Thomas Sowell (2014).pdf",
description: `<br> "Basic Economics is a citizen's guide to economics-for those who want to understand <br/> \
how the economy works but have no interest in jargon or equations. Sowell reveals the general principles <br/> \
behind any kind of economy-capitalist, socialist, feudal, and so on. In readable language, he shows how to <br/> \
critique economic policies in terms of the incentives they create, rather than the goals they proclaim. <br/> \
With clear explanations of the entire field, from rent control and the rise and fall of businesses to the <br/> \
international balance of payments, this is the first book for anyone who wishes to understand <br> how the economy functions."`,
price: 9.00
}
},
"Capitalism and Freedom": {
2: {
author: "Milton Friedman",
cover: "./Covers/Finance/CandF.jpg",
book: "./Books/Finance/Capitalism and Freedom by Milton Friedman (2002).pdf",
description: `<br> "How can we benefit from the promise of government while avoiding the threat it poses to individual <br/> \
freedom? In this classic book, Milton Friedman provides the definitive statement of his immensely influential economic <br/> \
philosophy -- one in which competitive capitalism serves as both a device for achieving economic freedom and a necessary <br/> \
condition for political freedom. The result is an accessible text that has sold well over half a million copies in English, <br/> \
has been translated into eighteen languages, and shows every sign of becoming more and more influential as time goes on." <br>`,
price: 7.50
}
},
"Economics in one lesson": {
3: {
author: "Henry Hazlitt",
cover: "./Covers/Finance/EIOL.jpg",
book: "./Books/Finance/Economics In One Lesson by Henry Hazlitt (2008).pdf",
description: `<br> "A million copy seller, Henry Hazlitt's Economics in One Lesson is a classic economic primer. But it is also \
 much more, having become a fundamental influence on modern "libertarian" economics of the type espoused by Ron Paul and others." <br><br/>
 
 "Considered among the leading economic thinkers of the "Austrian School," which includes Carl Menger, Ludwig von Mises, Friedrich (F.A.) Hayek, \
 and others, Henry Hazlitt (1894-1993), was a libertarian philosopher, an economist, and a journalist. He was the founding vice-president of \
 the Foundation for Economic Education and an early editor of The Freeman magazine, an influential libertarian publication.  Hazlitt wrote \
 Economics in One Lesson, his seminal work, in 1946. Concise and instructive, it is also deceptively prescient and far-reaching in its efforts \
 to dissemble economic fallacies that are so prevalent they have almost become a new orthodoxy." <br><br>
 
"Many current economic commentators across the political spectrum have credited Hazlitt with foreseeing the collapse of the global economy which \
 occurred more than 50 years after the initial publication of Economics in One Lesson. Hazlitt's focus on non-governmental solutions, strong -- and \
 strongly reasoned -- anti-deficit position, and general emphasis on free markets, economic liberty of individuals, and the dangers of government \
 intervention make Economics in One Lesson, every bit as relevant and valuable today as it has been since publication." <br/>`,
price: 8
}
},
"The Bottom Billion": {
  4: {
    author: "Paul Collier",
    cover: "./Covers/Finance/BottomBillion.jpg",
    book: "./Books/Finance/The Bottom Billion by Paul Collier (2007).pdf",
    description: `<br> "In the universally acclaimed and award-winning The Bottom Billion, Paul Collier reveals that fifty failed <br> \
    states -- home to the poorest one billion people on Earth--pose the central challenge of the developing world in the twenty-first century. <br> \
    The book shines much-needed light on this group of small nations, largely unnoticed by the industrialized West, that are dropping further <br> \
    and further behind the majority of the world's people, often falling into an absolute decline in living standards. A struggle rages within <br> \
    each of these nations between reformers and corrupt leaders--and the corrupt are winning. Collier analyzes the causes of failure, pointing <br> \
    to a set of traps that ensnare these countries, including civil war, a dependence on the extraction and export of natural resources, and bad <br> \
    governance. Standard solutions do not work, he writes; aid is often ineffective, and globalization can actually make matters worse, <br> \
    driving development to more stable nations. What the bottom billion need, Collier argues, is a bold new plan supported by the Group of Eight <br> \
    industrialized nations. If failed states are ever to be helped, the G8 will have to adopt preferential trade policies, new laws against corruption, <br> \
    new international charters, and even conduct carefully calibrated military interventions. Collier has spent a lifetime working to end global poverty. <br> \
    In The Bottom Billion, he offers real hope for solving one of the great humanitarian crises facing the world today." <br> `,
    price: 10.00
    }
    },
"The Little Book of Economics": {
  1: {
    author: "Greg Ip",
    cover: "./Covers/Finance/TLBE.jpg",
    book: "./Books/Finance/The Little Book of Economics by Greg Ip (2013).pdf",
    description: `<br> "One positive side-effect of the recent financial market meltdown that toppled giant, century-old institutions and cost <br> \
    millions their jobs is that it created a strong desire among many Americans to better understand how the U.S. economy functions. In The Little <br> \
    Book of Economics, Greg, Ip, one of the country's most recognized and respected economics journalists, walks readers through how the economy really works. <br> \
    Written for the inquisitive layman who doesn't want to plow through academic jargon and Greek letters or pore over charts and tables, The Little Book <br> \
    of Economics offers indispensible insight into how the American economy works - or, doesn't. With engaging and accessible prose, the book provides a <br> \
    comprehensive understanding of each aspect of our economy from inflation and unemployment to international trade and finance Serves as an insider's <br> \
    guide to the people and institutions that control America's economy such as the Federal Reserve and the federal budget Explains the roots of America's <br> \
    current economic crisis and the risks the country faces in its aftermath, such as stratospheric government debt, while offering advice on overcoming <br> \
    these threats Walks readers through the basic concepts and terminology they need to understand economic news Punctures myths and political spin from <br> \
    both the left and the right with candid and often surprising insight A must read for anyone who wants a better grasp of the economy without taking a <br> \
    course in economics, The Little Book of Economics is a unique and engaging look at how the economy works in all its wonderful and treacherous ways." <br> `,
    price: 9.00
    }
    },
"The Undercover Economist": {
  1: {
    author: "Tim Harford",
    cover: "./Covers/Finance/TUE.jpg",
    book: "./Books/Finance/The Undercover Economist by Tim Harford (2005).pdf",
    description: `<br> "An economist's version of The Way Things Work, this engaging volume is part field guide to economics and part expose of the economic <br> \
    principles lurking behind daily events, explaining everything from traffic jams to high coffee prices. The Undercover Economist is for anyone who's <br> \
    wondered why the gap between rich and poor nations is so great, or why they can't seem to find a decent second-hand car, or how to outwit Starbucks. <br> \
    This book offers the hidden story behind these and other questions, as economist Tim Harford ranges from Africa, Asia, Europe, and of course the United <br> \
    States to reveal how supermarkets, airlines, and coffee chains--to name just a few--are vacuuming money from our wallets. Harford punctures the myths <br> \
    surrounding some of today's biggest controversies, including the high cost of health-care; he reveals why certain environmental laws can put a smile on <br> \
    a landlord's face; and he explains why some industries can have high profits for innocent reasons, while in other industries something sinister is going on. <br> \
    Covering an array of economic concepts including scarce resources, market power, efficiency, price gouging, market failure, inside information, and game theory, <br> \
    Harford sheds light on how these forces shape our day-to-day lives, often without our knowing it." <br><br>
    
    "Showing us the world through the eyes of an economist, Tim Harford reveals that everyday events are intricate games of negotiations, contests of strength, <br> \
    and battles of wits. Written with a light touch and sly wit, The Undercover Economist turns "the dismal science" into a true delight." <br>`,
    price: 9.00
    }
    },
}
}

//This should also be removed. The restaurant names should also come from the server.
let books = {"Finance Books": finance, "Education Books": education, "Self-Help Books": selfhelp};

//The drop-down menu
let select = document.getElementById("restaurant-select");
//Stores the currently selected restaurant index to allow it to be set back when switching restaurants is cancelled by user
let currentSelectIndex = select.selectedIndex
//Stores the current restaurant to easily retrieve data. The assumption is that this object is following the same format as the data included above. If you retrieve the restaurant data from the server and assign it to this variable, the client order form code should work automatically.
let currentbook;
//Stored the order data. Will have a key with each item ID that is in the order, with the associated value being the number of that item in the order.
let order = {};
//Stores each of the orders placed from each restaurant in order to keep track of popular items.
let ordersPlaced = [];

//Generate new HTML for a drop-down list containing all restaurants.
//For A2, you will likely have to make an XMLHttpRequest from here to retrieve the array of restaurant names.
function genDropDownList(){
let result = '<select author="restaurant-select" id="restaurant-select">';
Object.keys(books).forEach(elem => {
result += `<option value="${elem}">${elem}</option>`
});
result += "</select>";
return result;
}

//Called when drop-down list item is changed.
//For A2, you will likely have to make an XMLHttpRequest here to retrieve the menu data for the selected restaurant
function selectRestaurant(){
let result = true;

//If order is not empty, confirm the user wants to switch restaurants.
if(!isEmpty(order)){
result = confirm("Are you sure you want to clear your order and switch menus?");
}

//If switch is confirmed, load the new restaurant data
if(result){
//Get the selected index and set the current restaurant
let selected = select.options[select.selectedIndex].value;
currentSelectIndex = select.selectedIndex;
//In A2, current restaurant will be data you received from the server
currentbook = books[selected];

//Update the page contents to contain the new menu
document.getElementById("left").innerHTML = getCategoryHTML(currentbook);
document.getElementById("middle").innerHTML = getMenuHTML(currentbook);

//Clear the current order and update the order summary
order = {};
updateOrder();

//Update the restaurant info on the page
//let info = document.getElementById("info");
//info.innerHTML = currentbook.name + "<br>Minimum Order: $" + currentbook.min_order + "<br>Delivery Fee: $" + currentbook.delivery_fee + "<br><br>";
}else{
//If they refused the change of restaurant, reset the selected index to what it was before they changed it
let select = document.getElementById("restaurant-select");
select.selectedIndex = currentSelectIndex;
}
}

//Given a restaurant object, produces HTML for the left column
function getCategoryHTML(rest){
let menu = rest.menu;
let result = "<b>Books<b><br>";
Object.keys(menu).forEach(key =>{
result += `<a href="#${key}">${key}</a><br>`;
// console.log(key);
});
return result;
}

//Given a restaurant object, produces the menu HTML for the middle column
function getMenuHTML(rest){
let menu = rest.menu;
let result = "";
//For each category in the menu
Object.keys(menu).forEach(key =>{
result += `<b>${key}</b><a name="${key}"></a><br>`;
//For each menu item in the category
Object.keys(menu[key]).forEach(id => {
item = menu[key][id];
//result += `<img src='Drive.jpg' style='height:50px;vertical-align:bottom;' onclick='stats.html'/> ${item.author} (\$${item.price}) <img src='add.png' style='height:20px;vertical-align:bottom;' onclick='addItem(${id})'/> <br>`;
//result += `<img src=${item.cover} style='height:100px;vertical-align:bottom;' onclick='viewBook(${item.book})'/> ${item.author} (\$${item.price}) <img src='add.png' style='height:20px;vertical-align:bottom;' onclick='addItem(${id})'/> <br>`;
result += `<img src=${item.cover} style='height:100px;cursor:pointer;' onclick="window.open('${item.book}', 'fullscreen=yes'); return false;"/> ${item.author} (\$${item.price}) <img src='add.jpg' style='height:20px;vertical-align:bottom;cursor:pointer;' onclick='addItem(${id})'/> <br>`;
result += item.description + "<br><br>";
});
});
return result;
}

//Responsible for adding one of the item with given id to the order and updating the summary
function addItem(id){
if(order.hasOwnProperty(id)){
order[id] += 1;
}else{
order[id] = 1;
}
updateOrder();
}

//Responsible for removing one of the items with given id from the order and updating the summary
function removeItem(id){
if(order.hasOwnProperty(id)){
order[id] -= 1;
if(order[id] <= 0){
delete order[id];
}
updateOrder();
}
}

//Return cover of book pdf given the book name
function showCover(cover){
  if(order.hasOwnProperty(cover)){
    // var img = document.createElement("img");
    // img.src = cover;
    // var src = document.getElementById("right").innerHTML;
    // src.appendChild(img);
  }
}

//Navigate to PDF reading page of book selected
function viewBook(book){
  window.open(book, 'fullscreen=yes');
  // if(order.hasOwnProperty(book)){
  //   pdfjsLib.getDocument(book).then((pdf) => {
  //     myState.pdf = pdf;
  //     render();
  //   });

  //   function render() {
  //     myState.pdf.getPage(myState.currentPage)
  //       // myState.pdf.getPage(myState.currentPage).then((page) => {
      
  //       //     var canvas = document.getElementById("pdf_renderer");
  //       //     var ctx = canvas.getContext('2d');

  //       //     var viewport = page.getViewport(myState.zoom);

  //       //     canvas.width = viewport.width;
  //       //     canvas.height = viewport.height;
      
  //       //     page.render({
  //       //         canvasContext: ctx,
  //       //         viewport: viewport
  //       //     });
  //       // });
  //   }
  // }
}

//Reproduces new HTML containing the order summary and updates the page
//This is called whenever an item is added/removed in the order
function updateOrder(){
let result = "";
let subtotal = 0;

//For each item ID currently in the order
Object.keys(order).forEach(id =>{
//Retrieve the item from the menu data using helper function
//Then update the subtotal and result HTML
let item = getItemById(id);
subtotal += (item.price * order[id]);
result += `${item.author} x ${order[id]} (${(item.price * order[id]).toFixed(2)}) <img src='remove.jpg' style='height:15px;vertical-align:bottom;' onclick='removeItem(${id})'/><br>`;
});

//Add the summary fields to the result HTML, rounding to two decimal places
result += `Subtotal: \$${subtotal.toFixed(2)}<br>`;
result += `Tax: \$${(subtotal*0.1).toFixed(2)}<br>`;
result += `Delivery Fee: \$${currentbook.delivery_fee.toFixed(2)}<br>`;
let total = subtotal + (subtotal*0.1) + currentbook.delivery_fee;
result += `Total: \$${total.toFixed(2)}<br>`;

console.log(JSON.stringify(order)); //////////////
console.log(subtotal, currentbook.delivery_fee); ////////////
console.log(JSON.stringify(ordersPlaced)); ////////////

//Decide whether to show the Submit Order button or the Order X more label
if(subtotal >= currentbook.min_order){
result += `<button type="button" id="submit" onclick="submitOrder()">Submit Order</button>`
}else{
result += `Add \$${(currentbook.min_order - subtotal).toFixed(2)} more to your order.`;
}

document.getElementById("right").innerHTML = result;
}

//Simulated submitting the order
//For A2, you will likely make an XMLHttpRequest here
function submitOrder(){
alert("Order placed!")
ordersPlaced.push([currentbook.author, order])
order = {}
selectRestaurant();
}

//Helper function. Given an ID of an item in the current restaurant's menu, returns that item object if it exists.
function getItemById(id){
let books = Object.keys(currentbook.menu);
for(let i = 0; i < books.length; i++){
if(currentbook.menu[books[i]].hasOwnProperty(id)){
return currentbook.menu[books[i]][id];
}
}
return null;
}

// ########## HELPER FUNCTIONS ###########

// returns true if object is empty, false otherwise.
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

// get key, value of max number of items placed from order dictionary
function getMax(obj) {
    const k = Math.max.apply(null,Object.keys(obj));
    const v = Math.max.apply(null,Object.values(obj));
    return [k, v]
}
