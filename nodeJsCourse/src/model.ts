export class User {
    constructor(
        private _id: number,
        private _first_name: string,
        private _last_name: string,
        private _gender: string,
        private _email: string,
        private _job_title: string) {
    }

    get getId(): number {
        return this._id;
    }
}