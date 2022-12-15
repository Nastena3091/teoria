function getDateWithDash(time) {
    date = new Date(time);
    year = date.getFullYear();
    day = date.getDate();
    month = date.getMonth() + 1;
    return year+"-"+month+"-"+day;
}

let cars = [ 
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2022-12-08'),
        "capacity": 7
    }, 
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2022-12-08'),
        "capacity": 5
    }, 
    {
        "color": "black",
        "type" : "coupe",
        "registration" : new Date('2022-02-24'),
        "capacity": 2
    },
    {
        "color": "white",
        "type" : "pickup",
        "registration" : new Date('2021-04-27'),
        "capacity": 2
    },
    {
        "color": "silver",
        "type" : "pony car",
        "registration" : new Date('2021-02-14'),
        "capacity": 5
    }, //заповніть власними прикладами
]
// реалізуйте фільтрацію по даті, в даному прикладі по даті 2022-12-08 функція повинна повернути перші 2 об'єкта

let filterByDate = cars.filter((item)=>getDateWithDash(item.registration)==getDateWithDash('2022-12-08'));
console.log(cars);
console.log("--------------------------------");
console.log(filterByDate);

cars = cars.filter((item)=>item.registration.getMonth()!=11);
console.log("--------------------------------");
console.log(cars);