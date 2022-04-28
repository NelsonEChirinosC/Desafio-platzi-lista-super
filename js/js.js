let listFood = document.querySelectorAll('.list-food li');
let body = document.querySelector('body')

listFood.forEach((list) =>{
    list.addEventListener('mouseenter',backgroundChange)
})

function backgroundChange(e){

    // console.log(e.target.parentNode)

    switch(e.target.id){
        case 'Apple':
            toChange(e,e.target.id);
            break;

        case 'Orange':
            toChange(e,e.target.id);
            break;

        case 'Watermelon':
            toChange(e,e.target.id);
            break;

        case 'Mango':
            toChange(e,e.target.id);
            break;

        case 'Carrot':
            toChange(e,e.target.id);
            break;

        case 'Onion':
            toChange(e,e.target.id);
            break;

        case 'Tomato':
            toChange(e,e.target.id);
            break;

        case 'Potato':
            toChange(e,e.target.id);
            break;

        case 'Meat':
            toChange(e,e.target.id);
            break;

        case 'Chicken':
            toChange(e,e.target.id);
            break;

        case 'Fish':
            toChange(e,e.target.id);
            break;

        case 'Egg':
            toChange(e,e.target.id);
            break;
        
    }

}

function toChange(e,name){
    console.log(e.target.parentNode)
    console.log(name)

    console.log(`url('../images/${name}.jpg')`)

    e.target.parentNode.style.backgroundImage = `url('./images/${name}.jpg')`;

}