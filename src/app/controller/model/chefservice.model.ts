import {Fonctionnaire} from './fonctionnaire.model';

export class Chefservice {

  public  id:number;
  public  ref:string;
  public  email:string;
  public  password:string;
  public  matricule:string;
  public fonctionnaires =new Array<Fonctionnaire>();

}
