/**
 * Created by USER on 10/06/2017.
 */
/**
 * Person class for displaying login details
 */
var Person = (function () {
    function Person(username, password) {
        this._username = username;
        this._password = password;
    }
    Person.prototype.display = function () {
        console.log("My username is " + this._username + ",My password is " + this._password);
    };
    return Person;
}());
//object creation for Person class
var karthik = new Person("Karthik", 12345);
karthik.display();
