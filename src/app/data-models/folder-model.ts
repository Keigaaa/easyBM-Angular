/**
 * Represent the model data for a folder
 */
export class Folder {
    public id?: number;
    public name?: string;
    public created_at?: Date;
    public updated_at?: Date;
    public idParent?: number;
    public idOwnerFolder?: number;
}