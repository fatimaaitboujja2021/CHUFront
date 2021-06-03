import {Fonctionnaire} from './fonctionnaire.model';
import {ListeGarde} from './liste-garde.model';

export class IndemniteAstreinte {

  public id:number;
  public  nbrAstreinte :number;
  public nbrHAstreinte :number;
  public  ref:string;
  public  Presence :boolean;
  public  Trim:number;
  public  Nbr_JrsFeries:number ;
  public  Nbr_H_Regl :number;
  public  Nbr_H_Supp :number;
  public  Nbr_unite :number;
  public  Unite :number;
  public  Rlqt_reported :number;
  public  Mnt_Brut :number;
  public  Impot :number;
  public  Mnt_Net :number;
  public  Rlqt_A_reported :number;
  public  Nbr_JrsOuvrable:number ;
  public  Montantdindemniteparunite :number;
  public listeGardes =new Array<ListeGarde>();


}
