
function List(props) {
    const itemList=props.items;
    const category=props.category;
   
// fruits.sort((a,b) =>a.name.localeCompare(b.name));
// fruits.sort((a,b) =>b.name.localeCompare(a.name));
// fruits.sort((a, b)=>a.calories-b.calories);
// const lowCalFruits=fruits.filter(fruit => fruit.calories<100);
    const listItems=itemList.map(item => <li key={item.id}>{item.name}: &nbsp;{item.calories}</li>);
    // const listItems=lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp;{lowCalFruit.calories}</li>);
    return(
<list>
    <h3 className="list-category">{category}</h3>
    <ul className="list-items">{listItems}</ul>
</list>
    
);
}
export default List
