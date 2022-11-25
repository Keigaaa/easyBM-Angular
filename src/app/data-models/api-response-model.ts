/**
 * Représente la réponse générique de L'API BookMarks
 */
export class APIResponse<T>{
    /** 
     * Données de la reponse
    */
    public data?: T;
    public message?: string;
    public success: boolean = false;
}