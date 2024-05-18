// Collection of data for the fast and furious 1 cast

// constructor to reduce redundancy of declaring variables
function Character(name, age, birthplace, mainCar, movies){
    this.name = name;
    this.age = age;
    this.birthplace = birthplace;
    this.mainCar = mainCar;
    this.movies = movies;
}

// data for some fast and furious characters
const characters = {
    'Brian O\'Conner': new Character(
        'Paul Walker', 
        '40', 
        'Glendale, California', 
        'Green Eclipse', 
        ['The Fast and the Furious', '2 Fast 2 Furious', 'Fast & Furious', 'Fast Five', 'Fast & Furious 6', 'Furious 7']
    ),
    'Dominic Toretto': new Character(
        'Vin Diesel', 
        '56', 
        'Alameda County, California', 
        'Red RX-7', 
        ['The Fast and the Furious', 'Fast & Furious', 'Fast Five', 'Fast & Furious 6', 'Furious 7', 'The Fate of the Furious', 'F9', 'Fast X']
    ),
    'Letty Ortiz': new Character(
        'Michelle Rodriguez', 
        '45', 
        'San Antonio, Texas', 
        'Red Acura Integra', 
        ['The Fast and the Furious', 'Fast & Furious', 'Fast & Furious 6', 'Furious 7', 'The Fate of the Furious', 'F9', 'Fast X']
    ),
    'Mia Toretto': new Character(
        'Jordana Brewster', 
        '43', 
        'Panama City, Panama', 
        'Blue Acura Integra', 
        ['The Fast and the Furious', 'Fast & Furious', 'Fast Five', 'Fast & Furious 6', 'F9', 'Fast X']
    ),
    'Johnny Tran': new Character(
        'Rick Yune', 
        '52', 
        'Washington, D.C.', 
        'Honda S2000', 
        ['The Fast and the Furious']
    ),
    'Jesse': new Character(
        'Chad Lindberg', 
        '47', 
        'Mount Vernon, Washington', 
        'Volkswagen Jetta', 
        ['The Fast and the Furious']
    ),
    'Leon': new Character(
        'Johnny Strong', 
        '49', 
        'Los Angeles, California', 
        'Nissan Maxima', 
        ['The Fast and the Furious']
    ),
    'Vince': new Character(
        'Matt Schulze', 
        '51', 
        'St. Louis, Missouri', 
        'Nissan 240SX', 
        ['The Fast and the Furious', 'Fast Five']
    ),
    'Sgt. Tanner': new Character(
        'Ted Levine', 
        '66', 
        'Bellaire, Ohio', 
        'N/A', 
        ['The Fast and the Furious']
    ),
    'Edwin': new Character(
        'Ja Rule', 
        '48', 
        'Queens, New York', 
        'Acura Integra', 
        ['The Fast and the Furious']
    )
}

module.exports = characters;