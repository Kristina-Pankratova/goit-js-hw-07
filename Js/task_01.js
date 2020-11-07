const itemlistEl = document.querySelectorAll('li.item');
console.log(`В списке ${itemlistEl.length} категории`);
itemlistEl.forEach(num =>
    console.log(
        `Категория: ${num.firstElementChild.textContent}
    Количество элементов: ${num.querySelectorAll('li').length}`
    ),
);