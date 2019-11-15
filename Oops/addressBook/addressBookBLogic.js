const fs=require('fs');
const prompt=require('prompt-Sync')();
class Address {
    //create a constructor to initialize and store values
    constructor(address) {
        this.address=address;
    }
    createAddress() {
        //command line prompt takes user input
        let name = prompt("Please enter your first name: ");
        if (nameRestriction.test(name) == false) throw "invalid name"
        let lastName = prompt("Please enter your last name: ");
        //validating last name
        if (nameRestriction.test(lastName) == false) throw "invalid lastname"
        //add the address information
        console.log("***Address Info***");
        let street = prompt("Street: ");
        let city = prompt("City: ");
        if (nameRestriction.test(city) == false) throw "invalid city name"
        //validating state
        let state = prompt("State: ");
        if (nameRestriction.test(state) == false) throw "invalid state name"
        //validating nationality
        let nation = prompt("Nationality: ");
        if (nameRestriction.test(nation) == false) throw "invalid nationality"
        //validating zip code
       let zip = prompt("Zip code: ");
        //zip code validation that should not exceed length 6
        if (contactRestriction.test(zip) == false || zip.length != 6) throw "invalid zip"
        //validating phone number
       let phoneNum = prompt("Phone number: ");
       try{
        (contactRestriction.test(phoneNum) == false || phoneNum.length != 10)
    }
    catch(err){
        console.log("invalid phone number");
    }
        //push each value into json
        this.address.Person.push({
            "Name": name,
            "LastName": lastName,
            "Address": {
                "Street": street,
                "City": city,
                "State": state,
                "Nationality": nation,
                "Zip": zip,
                "PhoneNum": phoneNum
            }
        })
        // write file into json
        fs.writeFile('addressook.json', JSON.stringify(this.address), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!');
        })
        console.log("Address updated succesfully!");
        console.log("Your information as per our record is: \r\n First Name: " + name + "\r\nLast Name: " + lastName + "\r\nStreet: " + street + "\r\nCity: " + city + "\r\nState: " + state + "\r\nNationality: " + nation);
    }
    //comaparing name of each object and sort alphabetically
    compare1(a, b) {
        if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
            return -1;
        }
        if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
            return 1;
        }
        return 0;
    }
    sorting() {
        console.log(this.address.Person.sort(this.compare1));
    }
    //open profile for given name
    openProfile() {
       let temp = -1;
        if (this.address.Person.length > 0) {
            for (let i = 0; i < this.address.Person.length; i++) {
                console.log(this.address.Person[i]);
            }
            console.log("Welcome!!");
           let update = prompt("Please enter the name of profile: ");
            for (let k = 0; k < this.address.Person.length; k++) {
                if (update == this.address.Person[k].Name) {
                    temp = k;
                    console.log("What you want to do?");
                    console.log("1: Update");
                    console.log("2: Delete");
                    console.log("3: Sort");
                    console.log("4: Save");
                    console.log("5: Exit");
                   let choice2 = prompt("Please enter your choice: ");
                    switch (parseInt(choice2)) {
                        case 1:
                            // update profile
                            console.log("What do you want to update? ");
                            console.log("1: Street");
                            console.log("2: City");
                            console.log("3: State");
                            console.log("4: Nationality");
                            console.log("5: Zip code");
                            console.log("6: Phone");
                            console.log("7: Exit");
                           let choice3 = prompt("Please enter your choice: ");
                            switch (parseInt(choice3)) {
                                case 1:
                                   let sUpdate = prompt("Enter the new street number: ");
                                    if (nameRestriction.test(sUpdate) == false && sUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    // update whole data after changes
                                   var obj = {
                                        "Name": this.address.Person[k].Name,
                                        "LastName": this.address.Person[k].LastName,
                                        "Address": {
                                            "Street": sUpdate,
                                            "City": this.address.Person[k]["Address"].City,
                                            "State": this.address.Person[k]["Address"].State,
                                            "Nationality": this.address.Person[k]["Address"].Nation,
                                            "Zip": this.address.Person[k]["Address"].Zip,
                                            "PhoneNum": this.address.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    this.address.Person[k] = obj;
                                    //save into json every time after update
                                    save();
                                    break;
                                case 2:
                                   let cUpdate = prompt("Enter the new city name: ");
                                    if (nameRestriction.test(cUpdate) == false && cUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                   var obj = {
                                        "Name": this.address.Person[k].Name,
                                        "LastName": this.address.Person[k].LastName,
                                        "Address": {
                                            "Street": this.address.Person[k]["Address"].Street,
                                            "City": cUpdate,
                                            "State": this.address.Person[k]["Address"].State,
                                            "Nationality": this.address.Person[k]["Address"].Nation,
                                            "Zip": this.address.Person[k]["Address"].Zip,
                                            "PhoneNum": this.address.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    this.address.Person[k] = obj;
                                    save();
                                    break;
                                case 3:
                                   let stUpdate = prompt("Enter the new state name: ");
                                    if (nameRestriction.test(stUpdate) == false && stUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                   var obj = {
                                        "Name": this.address.Person[k].Name,
                                        "LastName": this.address.Person[k].LastName,
                                        "Address": {
                                            "Street": this.address.Person[k]["Address"].Street,
                                            "City": this.address.Person[k]["Address"].City,
                                            "State": stUpdate,
                                            "Nationality": address.Person[k]["Address"].Nation,
                                            "Zip": this.address.Person[k]["Address"].Zip,
                                            "PhoneNum": this.address.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    this.address.Person[k] = obj;
                                    save();
                                    break;
                                case 4:
                                   let nUpdate = prompt("Enter the new nation name: ");
                                    if (nameRestriction.test(nUpdate) == false && nUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                   var obj = {
                                        "Name": this.address.Person[k].Name,
                                        "LastName": this.address.Person[k].LastName,
                                        "Address": {
                                            "Street": this.address.Person[k]["Address"].Street,
                                            "City": this.address.Person[k]["Address"].City,
                                            "State": this.address.Person[k]["Address"].State,
                                            "Nationality": nUpdate,
                                            "Zip": this.address.Person[k]["Address"].Zip,
                                            "PhoneNum": this.address.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    this.address.Person[k] = obj;
                                    save();
                                    break;
                                case 5:
                                   let zUpdate = prompt("Enter the new zip code: ");
                                    if (contactRestriction.test(zUpdate) == false) {
                                        console.log("Invalid number!");
                                        return false;
                                    }
                                   var obj = {
                                        "Name": this.address.Person[k].Name,
                                        "LastName": this.address.Person[k].LastName,
                                        "Address": {
                                            "Street": this.address.Person[k]["Address"].Street,
                                            "City": this.address.Person[k]["Address"].City,
                                            "State": this.address.Person[k]["Address"].State,
                                            "Nationality": address.Person[k]["Address"].Nation,
                                            "Zip": zUpdate,
                                            "PhoneNum": this.address.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    this.address.Person[k] = obj;
                                    save();
                                    break;
                                case 6:
                                   let pUpdate = prompt("Enter the new phone number: ");
                                    if (contactRestriction.test(pUpdate) == false || pUpdate.length != 10) {
                                        console.log("Invalid number!");
                                        return false;
                                    }
                                   var obj = {
                                        "Name": this.address.Person[k].Name,
                                        "LastName": this.address.Person[k].LastName,
                                        "Address": {
                                            "Street": this.address.Person[k]["Address"].Street,
                                            "City": this.address.Person[k]["Address"].City,
                                            "State": this.address.Person[k]["Address"].State,
                                            "Nationality": address.Person[k]["Address"].Nation,
                                            "Zip": this.address.Person[k]["Address"].Zip,
                                            "PhoneNum": pUpdate
                                        }
                                    }
                                    this.address.Person[k] = obj;
                                    save();
                                    break;
                                case 7:
                                    console.log("ThankYou!");
                                    //address();
                                    break;
                            }
                            break;
                        case 2:
                            //to delete profile
                           let update = prompt("Please enter the index you want to delete: ");
                            delete this.address.Person[update];
                            for (let j = 0; j < address.Person.length; j++) {
                                if (this.address.Person[j] == null) {
                                    this.address.Person.splice(j, 1);
                                }
                            }
                            // write file
                            fs.writeFile('addressook.json', JSON.stringify(this.address), 'utf-8', function (err) {
                                if (err) throw err
                                console.log('Done!')
                            })
                            break;
                        case 3:
                            // sort the profile by name
                            this.sorting();
                            save();
                            break;
                        case 4:
                            //save file into json
                            function save() {
                                fs.writeFile('addressook.json', JSON.stringify(this.address), 'utf-8', function (err) {
                                    if (err) throw err
                                    console.log('File Saved!!')
                                })
                            }
                            save();
                            break;
                        case 5:
                            console.log("ThankYou!!");
                            //address();
                            break;
                        default:
                            console.log("Please enter valid option");
                            break;
                    }
                }
            } if (temp == -1) {
                //check if name is available in json or name
                console.log("Profile unavailable!!Please create new one.");
                //address();
            }
        }
        else {
            console.log("No profiles to display!!Please create a new profile!");
            this.createAddress();
        }
    }
}
module.exports=Address;