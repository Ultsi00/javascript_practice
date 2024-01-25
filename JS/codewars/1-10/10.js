/*
Story
Your friend Bob is working as a taxi driver. After working for a month he is 
frustrated in the city's traffic lights. He asks you to write a program for a new type of traffic light. 
It is made so it turns green for the road with the most congestion.

Task
Given 2 pairs of values each representing a road (the number of cars on it and its name):
1) construct an object whose turngreen method returns the name of the road with the most cars
    at the moment of the method call
2) then removes the cars from that object (-> null)
3) when .turngreen() for the object has been called as many times as the constuctor has elements,
    calling .turngreen() should return null (all cars from each road have been removed)
4) if the number of cars on each road is same, return null 

Example
t = SmartTrafficLight([42, "27th ave"], [72, "3rd st"])
t.turngreen()  ==  "3rd st"
t.turngreen()  ==  "27th ave"
t.turngreen()  ==  null

t = SmartTrafficLight([10, "27th ave"], [10, "3rd st"])
t.turngreen()  ==  null
*/

class SmartTrafficLight {
    constructor(st1, st2, st3) {
        this.data = []
        this.data.push(st1)
        this.data.push(st2)
        this.data.push(st3)
    }
    turngreen() {
        // check if car count on each road is the same
        let diffCarCt = 0 
        for (let i = 0; i < this.data.length - 1; i++) {
            if (this.data[0][0] != this.data[i + 1][0])
                diffCarCt++
        }
        if (diffCarCt == 0)
            return null

        // check if all car counts are 0. (useless since diffCarCt checks this)
        let totalCars = this.data.reduce((accumulator, cars) => 
            accumulator + cars[0], 0)
        if (totalCars == 0)
            return null

        // find the street name with the highest amount of cars
        this.stMostTraffic = this.data[0][1]
        for (let i = 0; i < this.data.length - 1; i++) {
            if (this.data[i][0] < this.data[i + 1][0])
                this.stMostTraffic = this.data[i + 1][1]
        }

        // set null for the car amount of the street with highest amount of cars
        for (let i = 0; i < this.data.length; i++) {
            if (this.stMostTraffic == this.data[i][1]) {
                this.data[i][0] = null
                break;
            }
        }
        return this.stMostTraffic
    }
};

t = new SmartTrafficLight([1101, "27th ave"], [2000, "3rd st"], [400, "dsadsa"]);
console.log(t.turngreen())
console.log(t.turngreen())
console.log(t.turngreen())
console.log(t.turngreen())

