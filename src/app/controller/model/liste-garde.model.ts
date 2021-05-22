import {LaGarde} from './la-garde.model';
import {Fonctionnaire} from './fonctionnaire.model';

export class ListeGarde {
  public id:number;
  public  ref:string;
  public dureDeGarde:number;
  public dateGarde:Date;
  public  jourounuit:string;
  public statue:string;
  public raisondabsence:string;

  public   garde=new LaGarde();
  public fonctionnaire =new Fonctionnaire();

}
