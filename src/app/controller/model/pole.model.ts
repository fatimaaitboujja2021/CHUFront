import { Etablissemment } from "./etablissemment.model";
import {Servhopital} from './servhopital.model';

export class Pole {
  public  id:number;
  public  ref:string;
  public  intitule:string;
  public etablissemment= new Etablissemment();
  public services =new Array<Servhopital>();
}
