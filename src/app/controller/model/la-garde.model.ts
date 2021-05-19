import {ListeGarde} from './liste-garde.model';

export class LaGarde {
  public id:number;
  public  ref:string;
  public  code:string;
  public  intitule:string;
  public  typeGarde:string;
  public nbrHeursdeGarde:number;
  public   listeGarde=new Array<ListeGarde>();
}

