let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");
let inputFrom = document.getElementById("inputItemForm");
let itemName = document.getElementById("item-name");
let itemType = document.getElementById("item-Type");
let itemDObuyed = document.getElementById("Dateofbuyed");
let itemExpiry = document.getElementById("expiryDate");
let itemCard = document.getElementById("item-card");
let errMsg = document.getElementById("err-msg");

document.getElementById("chatBotBtn").addEventListener("click", () => {
    document.getElementById('chatBotContainer').classList.toggle("d-none");
});

let dummyData = [{
    
}]

let cartList = localStorage.getItem("cardItem") === null ? [] : JSON.parse(localStorage.getItem("cardItem"));

console.log(cartList);

function clearInput() {
    itemName.value = "";
    itemExpiry.value = "";
    itemDObuyed.value = "";
}

clearBtn.addEventListener('click', clearInput);

function creatItemCard({
    nameItem,
    expDate,
    buyDate,
    timeToExp,
    id
}) {
    let itemDAta = document.createElement("li");
    itemDAta.classList.add("d-felx");
    itemCard.appendChild(itemDAta);
    itemDAta.id = "itemdata" + id;

    let div = document.createElement("div");
    itemDAta.appendChild(div);

    let nameTag = document.createElement("p");
    nameTag.textContent = "name :" + nameItem;
    div.appendChild(nameTag);

    let buyDateTag = document.createElement("p");
    buyDateTag.textContent = "Date of buyed :" + buyDate;
    div.appendChild(buyDateTag);

    let expDateTag = document.createElement("p");
    expDateTag.textContent = "Expiry Date : " + expDate;
    div.appendChild(expDateTag);

    console.log(timeToExp);
}


for (let data of cartList) {
    console.log(data);
    creatItemCard(data)
}



addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (itemName.value !== "" && itemExpiry.value !== "" && itemDObuyed.value !== "") {
        let itemDetial = {
            nameItem: itemName.value,
            expDate: itemExpiry.value,
            buyDate: itemDObuyed.value,
            timeToExp: Math.round(new Date(itemExpiry.value).getTime() - new Date(itemDObuyed.value).getTime() / (1000 * 3600 * 24)),
        }

        cartList.push(itemDetial);
        creatItemCard(itemDetial);
        errMsg.textContent = "";
        clearInput();
        localStorage.setItem("cardItem", JSON.stringify(cartList));
    } else {
        errMsg.textContent = "fill the all data";
    }
})

// cartList === [] ? document.getElementById("resetBtn").classList.add("d-none"): document.getElementById("resetBtn").classList.add("d-none");

document.getElementById("resetBtn").addEventListener("click", () => {
    cartList = [];
    itemCard.textContent = "";
    localStorage.setItem("cardItem", "[]");
})
console.log(localStorage.getItem("ridksds"))