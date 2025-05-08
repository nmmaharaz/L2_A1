// problem 1

function formatString(input: string, toUpper?: boolean): string {
  if (typeof toUpper !== "boolean" || toUpper === true) {
    const result = input.toUpperCase();
    return result;
  } else {
    const result = input.toLowerCase();
    return result;
  }
}


// problem 2

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const result = items.filter((item) => item.rating >= 4);
  return result;
}

filterByRating(books);


// problem 3

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  arrays.forEach((array) => result.push(...array));
  return result;
}


// problem 4

class Car {
    constructor(
        private make: string,
        private year: number,
        private model: string
    ){}
    getInfo():void {
        console.log(`Make: ${this.make}, Year: ${this.year}`)
    }
    getModel():void{
        console.log(`Model: ${this.model}`)
    }
}


//problem 5

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}


// problem 6

interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0){
        return null;
    }else{
        const result = products.reduce((acc, curr)=>{return(curr.price>acc.price)? curr: acc});
        return result;
    }
  }


// problem 7

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    switch (day) {
      case Day.Saturday:
      case Day.Sunday:
        return "Weekend";
      default:
        return "Weekday";
    }
  }


// problem 8

async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            } else {
                resolve(n * n);
            }
        }, 1000);
    });    
}
