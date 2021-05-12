import {Fonctionnaire} from './fonctionnaire.model';

export class Echelon {
  public  id:number;
  public  echelonnom:string;
  public  dTEchelon:string;
  public  ref:string;
  public fonctionnaires =new Array<Fonctionnaire>();

}
