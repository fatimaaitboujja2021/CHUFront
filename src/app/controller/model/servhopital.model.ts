import {Fonctionnaire} from './fonctionnaire.model';
import {Etablissemment} from './etablissemment.model';
import {Pole} from './pole.model';

export class Servhopital {
  public  id:number;
  public  ref:string;
  public  intitule:string;
  public pole= new Pole();
  public fonctionnaires =new Array<Fonctionnaire>();
}
