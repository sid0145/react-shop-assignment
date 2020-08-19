const items = [
  {
    image: "assets/cookies-item-1.jpg",
    name: "cookies",
    price: "$5",
  },
  {
    image: "assets/cookies-item-2.jpg",
    name: "sugar cookies",
    price: "$10",
  },
  {
    image: "assets/birthday-cake.jpg",
    name: "birthday cake",
    price: "$51",
  },
  {
    image:'assets/best-cookies.jpg',
    name:' best cookies',
    price:' $20'
  },
  {
    image:'assets/cup-cake.jpg',
    name: 'cup cake',
    price: '$30'
  },
  {
    image: 'assets/sweet-cake.jpg',
    name:'sweet cake',
    price:'$25'
  },
  {
     image:'assets/sweet-item.jpg',
     name:'sweet item',
     price:'$34'
  },
  {
  image:'assets/sweet-cupcake.jpg',
  name:'sweet cupcake',
  price:'$22'  
},
{
  image:'assets/best-cookies.jpg',
  name:' simple cookies',
  price:' $20'
},

];

loadItems = () => {
  try {
    displayList(items);
  } catch (err) {
    console.log(err);
  }
};

const itemList = document.getElementById("itemList");
const searchBar=document.getElementById('searchBar');

searchBar.addEventListener('keyup', (e)=>{
  searchItem=e.target.value.toUpperCase();
  const filteredItem=items.filter((item)=>{
      return (item.name.toUpperCase().includes(searchItem));
  });
  displayList(filteredItem);
})


const displayList = (items) => {
  const dataOfItem = items
    .map((item) => {
     return `
     <div class="card" style="width: 18rem;">
     <img src="${item.image}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-text">${item.name}<span>${item.price}</h5>
     </div>
   </div>`       
    })
    .join("");
  itemList.innerHTML = dataOfItem;
};

const allItem=()=>{

loadItems();
}


const cookiesItem=()=>{
  value='cookies';
  getItem=value.toUpperCase();
  const filteredItem=items.filter((item)=>{
    return (item.name.toUpperCase().includes(getItem));
});
displayList(filteredItem)
}

const cakeItem=()=>{
  value='cake';
  getItem=value.toUpperCase();
  const filteredItem=items.filter((item)=>{
    return (item.name.toUpperCase().includes(getItem));
});
displayList(filteredItem)
}

loadItems();

