import {Fonctionnaire} from './fonctionnaire.model';
import {Pole} from './pole.model';

export class Etablissemment {
  public  id:number;
  public  ref:string;
  public  intitule:string;
  public   pole=new Array<Pole>();

}
