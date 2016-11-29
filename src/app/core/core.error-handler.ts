
import { ErrorHandler } from "@angular/core";
import { forwardRef } from "@angular/core";
import { Inject } from "@angular/core";
import { Injectable } from "@angular/core";
 
import { ErrorLogService } from "./core.error-log.service";

export interface CoreErrorHandlerOptions {
    rethrowError : boolean;
    unwrapError: boolean;
}

export var CORE_ERROR_HANDLER_OPTIONS: CoreErrorHandlerOptions = {
    rethrowError: false,
    unwrapError: false
};

@Injectable()
export class CustomErrorHandler implements ErrorHandler{
    
    private errorLogService : ErrorLogService;
    private options : CoreErrorHandlerOptions;

    constructor( errorLogService : ErrorLogService ){
        this.errorLogService = errorLogService;
    }

    public handleError( error : any ) : void {
        this.errorLogService.logError( error );
    }

}

export var CORE_ERROR_HANDLER_PROVIDERS = [
    {
        provide:  CORE_ERROR_HANDLER_OPTIONS,
        useValue: CORE_ERROR_HANDLER_OPTIONS
    },
    {
        provide: ErrorHandler,
        useClass: CustomErrorHandler
    }
];