//quetySelector

var items=document.querySelector('.list-group-item:nth-child(2)');
console.log(items)
items.style.backgroundColor='green'

var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color='white'

//querySelectorAll

var item=document.querySelectorAll('li')
console.log(item)
item[1].style.color='green'

var odd = document.querySelectorAll('li:nth-child(odd)');
for(i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='green'
}

/* queryselector do impact on first element among all element
while queryselectorall impact on all element */