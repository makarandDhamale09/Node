interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number

    createStory(): String
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
    }

    createStory(): String {
        return "undefined";
    }
}

const insta = new Instagram("Burst", "Rio", 10)
let story = insta.createStory();
console.log(story)
