import {Fonctionnaire} from './fonctionnaire.model';

export class Specialite {
  public  id:number;
  public  ref:string;
  public  intitule:string;
  public fonctionnaires =new Array<Fonctionnaire>();

}
