function OrderDTO(oId, cId, iId, qty,price) {
var __oId=oId;
var __cId=cId;
var __iId=iId;
var __qty=qty;
var __price=price;


this.getOrderID=function () {
    return __oId;

}
this.setOrderID=function (newOID) {
    __oId=newOID;

}

    this.getCusID=function () {
        return __cId;

    }
    this.setCusID=function (newCID) {
        __cId=newCID;

    }

    this.getItID=function () {
        return __iId;

    }
    this.setItID=function (newItID) {
        __iId=newItID;

    }

    this.getQty=function () {
        return __qty;

    }
    this.setQty=function (newQty) {
        __qty=newQty;

    }

    this.getTotal=function () {
        return __price;

    }
    this.setTotal=function (newTotal) {
        __price=newTotal;

    }

}