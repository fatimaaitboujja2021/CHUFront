import {Fonctionnaire} from './fonctionnaire.model';

export class Conge {

  public  id:number;

  public  typeConge:string;

  public  dateDebutConge:Date;

  public  dateFinConge:Date;

  public  ref:string;
  public fonctionnaires =new Array<Fonctionnaire>();
  
}
