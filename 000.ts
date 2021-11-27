import _ from "lodash";

class DayZero{
    RunA(array: number[]) {
        array.map(x => {
            console.log(x);
            return x + 1;
        });

        let test =_.chunk(array, 2);

        test.map(x => {
            console.log(x);
        });

        console.log("Answer A");
    }

    RunB(){
        console.log("Answer B")
    }
}   

const array =  [0,2,1,3,4]
const dayZero = new DayZero();
dayZero.RunA(array);
dayZero.RunB();