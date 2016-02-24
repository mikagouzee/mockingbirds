import {Injectable} from 'angular2/core' ;
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoggerService{
    constructor(){}
    
    isLogged = false;
    
    login(newState){
        console.log("Logger service says hi");
        this.isLogged = newState; 
        return Promise.resolve(this.isLogged);
    }
}