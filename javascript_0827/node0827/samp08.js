var people = {
    name: 'gilgong',
    say:function(){
        console.log(this);
    }
}

people.say();
var sayPeople = people.say.bind(people);
sayPeople();