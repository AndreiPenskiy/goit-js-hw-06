const listItem = document.querySelectorAll(".item");

console.log(`Number of categories: ${listItem.length}
`);


listItem.forEach((element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title} / Elements: ${itemsLength}`);
});




//Category: Animals
//Elements: 4

//Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5
