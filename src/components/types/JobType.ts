import SkillType from './SkillType';
import CompanyType from './CompanyType';
import LocationType from './LocationType';

export default class JobType {
    private _id: string;
    private _title: string;
    private _summary: string;
    private _description: string;
    private _requirementsId: string[];
    private _plusId: string[];
    private _companyId: string;
    private _locationId: string;
    private _created: string;

    constructor(
        id: string = '',
        title: string = '',
        summary: string = '',
        description: string = '',
        requirementsId: string[] = [],
        plusId: string[] = [],
        companyId: string = '',
        locationId: string = '',
        created: string = ''
    ) {
        this._id = id;
        this._title = title;
        this._summary = summary;
        this._description = description;
        this._requirementsId = requirementsId;
        this._plusId = plusId;
        this._companyId = companyId;
        this._locationId = locationId;
        this._created = created;
    }

    toJSON() {
        return {
            title: this._title,
            summary: this._summary,
            description: this._description,
            requirements: this._requirementsId.map(o => o),
            plus: this._plus.map(o => o),
            company: this._companyId,
            locationId: this._locationId,
            created: this._created,
        };
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
     * Getter requirementsId
     * @return {string[]}
     */
    public get requirementsId(): string[] {
        return this._requirementsId;
    }

    /**
     * Getter plusId
     * @return {string[]}
     */
    public get plusId(): string[] {
        return this._plusId;
    }

    /**
     * Getter companyId
     * @return {string}
     */
    public get companyId(): string {
        return this._companyId;
    }

    /**
     * Getter location
     * @return {LocationType}
     */
    public get locationId(): string {
        return this._locationId;
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
     * Setter requirementsId
     * @param {string[]} value
     */
    public set requirementsId(value: string[]) {
        this._requirementsId = value;
    }

    /**
     * Setter plusId
     * @param {string[]} value
     */
    public set plusId(value: string[]) {
        this._plusId = value;
    }

    /**
     * Setter companyId
     * @param {string} value
     */
    public set companyId(value: string) {
        this._companyId = value;
    }

    /**
     * Setter location
     * @param {LocationType} value
     */
    public set locationId(value: string) {
        this._locationId = value;
    }

    /**
     * Setter created
     * @param {string} value
     */
    public set created(value: string) {
        this._created = value;
    }
}
