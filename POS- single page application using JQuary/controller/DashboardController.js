hideAll();
$("#dash").css('display', 'block');
$("#nav")

$('#lnkHome').click(function () {
    hideAll();
    $("#dash").css('display', 'block');
    $("#nav")
});


$('#lnkCustomerSave').click(function () {
    $("#txtCustomerID").focus();
    hideAll();
    $("#customerSave").css('display', 'block');

});
$('#lnkCustomer').click(function () {
    $("#tblCust").focus();
    hideAll();
    $("#AllCust").css('display', 'block');

});
$('#lnkItemSave').click(function () {
    $("#InputIID").focus();
    hideAll();
    $("#ItemSave").css('display', 'block');

});

$('#lnkItem').click(function () {
    $("#tblItem").focus();
    hideAll();
    $("#allItem").css('display', 'block');

});
$('#lnkMakeOrder').click(function () {

    hideAll();
    $("#addOrder").css('display', 'block');

});
$('#lnkOrder').click(function () {

    hideAll();
    $("#showOrders").css('display', 'block');

});
$('#viewRice').click(function () {
    hideAll();
    $("#Rice").css('display', 'block');

});
$('#viewOthers').click(function () {
    hideAll();
    $("#OtherFood").css('display', 'block');

});
$('#viewDrinks').click(function () {
    hideAll();
    $("#drinks").css('display', 'block');

});

function hideAll() {
    $("#dash,#customerSave,#AllCust,#ItemSave,#allItem,#addOrder,#showOrders ,#drinks,#Rice,#OtherFood").
    css('display', 'none');
}
