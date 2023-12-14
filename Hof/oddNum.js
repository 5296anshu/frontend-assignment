let arr = [3, 4, 5, 6, 7];

let output = "";

arr.forEach((element) => {
    if (element % 2 !== 0) {
        output += `${element} - `;
    }
});

// Remove the trailing hyphen and space
output = output.slice(0, -2);

console.log(output);