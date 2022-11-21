import { transportModel } from "./transport-model";

export class flightModel{
  transporte = new transportModel()
  origin?: string;
  destination?: string;
  price?: number;
  rute?: string;

}
