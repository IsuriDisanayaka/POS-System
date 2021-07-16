function CustomerDTO(id, name, address, contact,salary) {
    var __id = id;
    var __name = name;
    var __address = address;
    var __contact=contact;
    var __salary=salary;

    this.getCustomerID = function () {
        return __id;
    }

    this.setCustomerID = function (newID) {
        __id = newID;
    }
    this.getCustomerName = function () {
        return __name;
    }

    this.setCustomerName = function (newName) {
        __name = newName;
    }
    this.getCustomerAddress = function () {
        return __address;
    }

    this.setCustomerAddress = function (newAddress) {
        __address = newAddress;
    }
    this.getCustomerContact = function () {
        return __contact;
    }

    this.setCustomerContact = function (newContact) {
        __contact = newContact;
    }

    this.getCustomerSalary = function () {
        return __salary;
    }

    this.setCustomerSalary = function (newSalary) {
        __salary = newSalary;
    }

}