

interface Destination {
    name : string,
    image : {
        png : string,
        webp : string
    }
    description : string,
    distance : string,
    travel : string
}

interface Crew {
    name : string,
    image : {
        png : string,
        webp : string
    },
    role : string,
    bio : string
}

interface Technology {
    name : string,
    image : {
        portrait : string,
        landscape : string
    }
    description : string,
}


export interface PageFile {
    destinations : Destination[],
    crew : Crew[],
    technology : Technology[]
}

