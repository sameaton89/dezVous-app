q = { "name": "Roman", "age": "24" };

function jsonReader(q) {

    for (n in q) {
        arr = [];
        arr1 = [];

        arr.push(n);
        arr1.push(q[n]);
    }
    console.log(arr);
    console.log(arr1);
};
 jsonReader();