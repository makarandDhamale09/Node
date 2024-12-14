class User {
    email: string
    name: string
    city: string = ""

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const mak = new User("mak@md.com", "mak")
mak.city = "Pune"