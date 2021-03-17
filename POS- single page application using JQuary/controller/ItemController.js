$('#btnSaveItem').click(function () {
    let itemID = $("#InputIID").val();
    let itemName = $("#InputIName").val();
    let itemType = $("#InputType").val();
    let itemQty = $("#InputQty").val();
     let itemPrice= $("#InputPrice").val();

    let res = saveItem(itemID,itemName,itemType,itemQty,itemPrice);
    if(res)clearAllItemText();
});

function saveItem(id, name, type, qty,) {
    let item = new CustomerDTO(id, name, type, qty,price);
   itemDB.push(item);// item aded

    // load the table
    loadAllItemToTheTable();
    return true;
}

//get all customers
function getAllItems() {
    return itemDB;
}


//Other function
function loadAllItemToTheTable() {
    let allItems = getAllItems();
    $('#tblItem').empty();
    for (var i in allItems) {
        let id = allItems[i].getItemID();
        let name = allItems[i].getItemName();
        let type = allItems[i].getItemType();
        let qty =allItems[i].getItemType();
       let price= allItems[i].getItemPrice();
        var row = `<tr><td>${id}</td><td>${name}</td><td>${type}</td><td>${qty}</td><td>${price}</td></tr>`;
        $('#tblItem').append(row);
    }
}

function clearAllItemText() {
 $("#InputIID").val("");
    $("#InputIName").val("");
     $("#InputType").val("");
    $("#InputQty").val("");
     $("#InputPrice").val("");
}

