const googleDatabase = [
    'cats.com',
    'dogs.com',
    "animal.com",
    "myfavoritecat.com",
    "blackcats.com"
];

const googleSearch = (searchString, db) => {
    const result = db.filter( web => {
        return web.includes(searchString);
    })

    return result.length >= 2 ? result.slice(0,2) : result; 
}

//console.log(googleSearch('cat', googleDatabase));

module.exports = googleSearch;