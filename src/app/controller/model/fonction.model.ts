import {Pole} from './pole.model';
import {Fonctionnaire} from './fonctionnaire.model';

export class Fonction {
  public  id:number;
  public  ref:string;
  public  intitule:string;
  public   fonctionnaire=new Array<Fonctionnaire>();

}
