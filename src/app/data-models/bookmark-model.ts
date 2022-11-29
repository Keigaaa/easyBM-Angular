/**
 * Represent the model data for a bookmark
 */
export class Bookmark {
    public id?: BigInteger;
    public name?: string;
    public url?: string;
    public commentary?: string;
    public created_at?: Date;
    public updated_at?: Date;
    public idFolder?: BigInteger;
    public idOwnerBookmark?: BigInteger;
}