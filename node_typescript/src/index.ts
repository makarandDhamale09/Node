class User {
    readonly city: string = "Pune"
    private _courseCount: number = 1

    constructor(
        public email: string,
        public name: string) {
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    private deleteToken() {
        console.log("Token is deleted!!")
    }

    get getCourseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum: number) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true

    changeCourseCount() {
        this.courseCount = 4
    }
}

const mak = new User("mak@md.com", "mak")
// mak.city = "Pune"
mak.getAppleEmail

const mak2 = new SubUser("sb@Sb.com", "subUser");
mak2.changeCourseCount()