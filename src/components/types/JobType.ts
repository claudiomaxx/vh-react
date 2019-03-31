export default class JobType {
    private _id: string;
    private _title: string;
    private _city: string;
    private _summary: string;
    private _description: string;
    private _requirements: string[];
    private _plus: string[];
    private _created: string;

    constructor(
        id: string = '',
        title: string = '',
        city: string = '',
        summary: string = '',
        description: string = '',
        requirements: string[] = [],
        plus: string[] = [],
        created: string = ''
    ) {
        this._id = id;
        this._title = title;
        this._city = city;
        this._summary = summary;
        this._description = description;
        this._requirements = requirements;
        this._plus = plus;
        this._created = created;
    }

    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Getter title
     * @return {string}
     */
    public get title(): string {
        return this._title;
    }

    /**
     * Getter city
     * @return {string}
     */
    public get city(): string {
        return this._city;
    }

    /**
     * Getter summary
     * @return {string}
     */
    public get summary(): string {
        return this._summary;
    }

    /**
     * Getter description
     * @return {string}
     */
    public get description(): string {
        return this._description;
    }

    /**
     * Getter requirements
     * @return {string[]}
     */
    public get requirements(): string[] {
        return this._requirements;
    }

    /**
     * Getter plus
     * @return {string[]}
     */
    public get plus(): string[] {
        return this._plus;
    }

    /**
     * Getter created
     * @return {string}
     */
    public get created(): string {
        return this._created;
    }

    /**
     * Setter id
     * @param {string} value
     */
    public set id(value: string) {
        this._id = value;
    }

    /**
     * Setter title
     * @param {string} value
     */
    public set title(value: string) {
        this._title = value;
    }

    /**
     * Setter city
     * @param {string} value
     */
    public set city(value: string) {
        this._city = value;
    }

    /**
     * Setter summary
     * @param {string} value
     */
    public set summary(value: string) {
        this._summary = value;
    }

    /**
     * Setter description
     * @param {string} value
     */
    public set description(value: string) {
        this._description = value;
    }

    /**
     * Setter requirements
     * @param {string[]} value
     */
    public set requirements(value: string[]) {
        this._requirements = value;
    }

    /**
     * Setter plus
     * @param {string[]} value
     */
    public set plus(value: string[]) {
        this._plus = value;
    }

    /**
     * Setter created
     * @param {string} value
     */
    public set created(value: string) {
        this._created = value;
    }
}
