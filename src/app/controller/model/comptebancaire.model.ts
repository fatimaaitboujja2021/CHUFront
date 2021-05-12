import {Fonctionnaire} from './fonctionnaire.model';

export class Comptebancaire {

  public  id:number;
  public  ref:string;
public nom:string;
public nCompte:number;
public fonctionnaires =new Array<Fonctionnaire>();
}
