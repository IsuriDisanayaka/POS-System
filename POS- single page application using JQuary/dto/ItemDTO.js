function ItemDTO(id,name,type,qty,price) {
    var __id=id;
    var __name=name;
    var __type=type;
    var __qty=qty;
    var __price=price;


    this.getItemID= function () {
        return __id;
    }
    this.setItemID=function (newID) {
        __id=newID;

    }
    this.getItemName=function () {
        return __name
    }
    this.setItemName=function (newName) {
        __name=newName;
    }
    this.getItemType= function () {
        return __type;
    }
    this.setItemType=function (newType) {
        __type=newType;

    }
    this.getItemQty=function () {
        return __qty
    }
    this.setItemQty=function (newQty) {
        __qty=newQty;
    }

    this.getItemPrice=function () {
        return __price
    }
    this.setItemPrice=function (newPrice) {
        __price=newPrice;
    }
}