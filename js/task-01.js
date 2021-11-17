const listItem = document.querySelectorAll(".item");

console.log(`Number of categories: ${listItem.length}
`);


listItem.forEach((elem) => {
    let title = elem.firstElementChild.textContent;   
    let itemsLength = elem.lastElementChild.children.length;
    console.log(`Категория: ${title} \n Количество элементов: ${itemsLength}`);
});







//Category: Animals
//Elements: 4

//Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5
