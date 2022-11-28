/**
 * Represent the generic response from the API easyBM
 */
export class APIResponse<T>{
    /** 
     * Data from the response
    */
    public data?: T;
    public message?: string;
    public success: boolean = false;
}