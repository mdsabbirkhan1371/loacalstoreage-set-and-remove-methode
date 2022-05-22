let db = {};

const addToDb = item => {
    // db[item] = 1;
    const storeTracker = localStorage.getItem('additem')
    if (storeTracker) {
        db = JSON.parse(storeTracker)
    }

    if (item in db) {
        db[item] = db[item] + 1
    }
    else {
        db[item] = 1;
    }
    localStorage.setItem('additem', JSON.stringify(db))
    console.log(db)
}
const removeItem = item => {
    const storeTracker = localStorage.getItem('additem')
    if (storeTracker) {
        const storeObject = JSON.parse(storeTracker)

        delete storeObject[item]
        localStorage.setItem('additem', JSON.stringify(storeObject))
    }
}





// const removeItem = item => {
//     const storeTracker = localStorage.getItem('additem')
//     if (storeTracker) {
//         const storeObject = JSON.parse(storeTracker)
//         delete storeObject[item];
//         localStorage.setItem('additem', JSON.stringify(storeObject))
//     }
// }