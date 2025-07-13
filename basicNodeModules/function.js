const add = (a, b) => {
    return a+b;
}

function subtract(a,b){
    return a-b;
}

// Common Js module Export
// module.exports = {
//     add,
//     sub: subtract
// }

// ES Module Export.
// Default Export
// Named Export

// export  {
//     add,
//     subtract
// }

export default subtract;
export {
    add
}