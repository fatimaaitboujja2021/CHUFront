import {ListeGarde} from './liste-garde.model';
import {Echelon} from './echelon.model';

export class IndemniteGarde {
  public id:number;
  public  nbrGardes :number;
  public nbrHgardes :number;
  public  ref:string;
  public  Presence :boolean;
  public  trim:number;
  public  nbr_JrsFeries:number ;
  public  nbr_JrsOuvrable:number ;
  public  nbr_H_Regl :number;
  public  nbr_H_Supp :number;
  public  nbr_unite :number;
  public  unite :number;
  public  rlqt_reported :number;
  public  mnt_Brut :number;
  public  impot :number;
  public  mnt_Net :number;
  public  rlqt_A_reported :number;
  public  montantdindemniteparunite :number;

  public listeGardes =new Array<ListeGarde>();

}
