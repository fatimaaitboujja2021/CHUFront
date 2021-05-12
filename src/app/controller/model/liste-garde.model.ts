import {LaGarde} from './la-garde.model';
import {Fonctionnaire} from './fonctionnaire.model';

export class ListeGarde {
  public id:number;
  public  ref:string;
  public dureDeGarde:number;
  public dateGarde:Date;
  public   garde=new LaGarde();
  public fonctionnaires =new Array<Fonctionnaire>();

}
