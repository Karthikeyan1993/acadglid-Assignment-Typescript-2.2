/**
 * Created by USER on 10/06/2017.
 */
/**
 * Person class for displaying login details
 */
class Person {
    private _username: string;
    private _password: number;

    constructor(username: string, password: number) {
        this._username = username;
        this._password = password;
    }

    display(): void {
        console.log(`My username is ${this._username},My password is ${this._password}`)
    }
}
//object creation for Person class
let karthik = new Person("Karthik", 12345);
karthik.display();