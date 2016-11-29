import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";

@Injectable()
export class ErrorLogService{

    private http : Http;
    private errorLoggereUrl = '/yourlog/api';

    constructor ( http : Http ){
        this.http = http;
    }

    public logError( error : any ) : void {     
        this.sendToConsole( error );
        /* use this to integrate with your backend end point to save logsUI */
        //this.sendToServer( error );

    }

    private sendToConsole( error : any ) : void{
        if ( console && console.group && console.error ) {
            var msg =  this.getMessageFromLog( error );   
            console.group( "Error Log Service" );
            console.error( msg );
            console.groupEnd();    
        }
    }

    private sendToServer( error: any ) : void {
        this.http
            .post(
                this.errorLoggereUrl,
                {
                    type: error.name,
                    message: error.message,
                    stack: error.stack,
                    location: window.location.href
                }
            )
            .subscribe(
                ( httpResponse: Response ) : void =>{

                },

                ( httpError : any ) : void =>{

                }
            )
    }

    /*  Pc information and group message tools From Sencha LoggerUI */
    private getMessageFromLog( error ){
        var me = this;
        return { 
            message : {
                browser: navigator.appVersion,
                viewport: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) + ' x ' + Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                issueTime: new Date(),
                operatingSystem: me.getOperatingSystem(),
                url: document.URL,
                message: error.message,
                exception: me.getStackTraceFromException( error )
            }
        }
    }

    private getStackTraceFromException( exception ) : void{
		return exception.stack || exception.backtrace || exception.stacktrace;
	}


    private getOperatingSystem(): string{
			var OSName = "Unknown";
			if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
			if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
			if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
			if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
			if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
			if (window.navigator.userAgent.indexOf("Mac")!=-1) OSName="Mac/iOS";
			if (window.navigator.userAgent.indexOf("X11")!=-1) OSName="UNIX";
			if (window.navigator.userAgent.indexOf("Linux")!=-1) OSName="Linux";
			return OSName;
	}


}