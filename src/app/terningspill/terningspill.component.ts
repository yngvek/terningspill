import { Component, OnInit } from '@angular/core';
import { Dropdown } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import  {ButtonModule} from 'primeng/primeng';
import * as _ from 'lodash';

export class Spiller{
navn: string;
}

export class Resultat{
  spillerId: number;
  spillerNavn: string;
  runde: number;
  resultatRaa: number;
  resultat: number;
  resultatTotal: number;
}

export class ResultatAkkumulert{
  spillerId: number;
  spillerNavn: string;
  resultat: number;
}

@Component({
  selector: 'tsp-terningspill',
  templateUrl: './terningspill.component.html',
  styleUrls: ['./terningspill.component.css']
})
export class TerningspillComponent implements OnInit {

  title = 'terningspillet Nærmest 1';
  readonly antallRunder: number = 6;
  readonly maksAntallSpillere: number = 4;
  antallSpillere1: SelectItem[];
  valgtAntallSpillere: number;
  spillere: Spiller[] = [];
  denneRunde: number;
  resultater: Resultat[] = [];
  resultaterAkkumulert: ResultatAkkumulert[] = [];
  terningResultat: number;  
  spillerSomSkalLeggesTil: Spiller;
  resultatSomSKalLeggesTil = Resultat;
  antallSpillere : number = 0;
  spilletStartet: boolean = false;
  spilletOver: boolean = false;
  aktivSpiller: number;
  simulertResultatEnDesimalDenneRunde: number;
  simulertResultatToDesimalerDen
    
  constructor() { 
    this.spillerSomSkalLeggesTil = new Spiller();
  }
   
     leggTilSpiller(){
      this.spillere = [...this.spillere, {navn: this.spillerSomSkalLeggesTil.navn}]
      this.spillerSomSkalLeggesTil.navn = null;
      this.antallSpillere = this.spillere.length;
          }

     maksAntallSpillereOversteget() : boolean {
      return this.antallSpillere >= this.maksAntallSpillere;
            }
     
     sjekkOmNavnErDuplikat(nySpiller:string) : boolean
     {
       const navnEksisterer = _.some(this.spillere,(m:any) => m.navn === nySpiller);
      return navnEksisterer;
     }

     ingenSpillere(): boolean
     {
       return this.spillere.length == 0;
     }
     
     startSpillet()
     {
      this.spilletStartet = true;
      this.denneRunde = 1;
      this.aktivSpiller = _.indexOf(this.spillere, _.head(this.spillere));
     }
     startSpilletPaNytt()
     {
      this.spilletOver = false;
      this.resultater = [];
      this.startSpillet();
     }

     startSpilletPaNyttMedNyeSpillere()
     {
      this.spilletOver = false;
      this.spillere = [];
      this.resultater = [];
      this.denneRunde = 1;
      this.spilletStartet = false;
     }

     trillTerning(): number{
      return this.terningResultat = Math.floor(( Math.random()*6 )+ 1 );
    }

     leggTilResultatEnDesimal()
     {
      this.beregnResultat(1);
      this.fortsettSpillet();
     }

     leggTilResultatToDesimaler()
    {
      this.beregnResultat(2);
      this.fortsettSpillet();
     }
   
     beregnResultat(antallDesimaler: number)
     {
       var resultat = antallDesimaler == 1 ? this.terningResultat/10 : this.terningResultat/100;
       var resultaterUsortert = [...this.resultater, {spillerId: this.aktivSpiller, 
                                              spillerNavn: this.spillere[this.aktivSpiller].navn,
                                              runde: this.denneRunde, 
                                              resultatRaa: this.terningResultat,
                                              resultat: resultat,
                                              resultatTotal: this.summerForSpiller(resultat)}];
      this.resultater =   _.orderBy(resultaterUsortert,['spillerId', 'runde'],['asc','desc']);
      
      this.beregnResultatAkkumulert();
       }

      beregnResultatAkkumulert()
      {
        var resultatAkkumulertTmp = this.resultater.map(function(o){return o.spillerNavn, o.resultat;});
        
        var resultaterAkkumulert = _.sumBy(this.resultater,function(o){return o.resultat});
        var resultaterGroupBy = _.groupBy(this.resultater, 'spillerNavn') ;
        var resultatChain = _.chain(resultaterGroupBy).groupBy(o => o.spillerNavn). map(_.size).value();

        var resultReduce = _.reduce(this.resultater, function(result, value, key) {
          (result[value] || (result[value] = [])).push(key);
          return result;
        }, {});
        
      }
           

     private summerForSpiller(resultatDenneRunde: number):number
     {
      var spiller = this.aktivSpiller;
      var resultatFilter = _.filter(this.resultater, function(o){return (o.spillerId === spiller);}).map(function(o){return o.resultat;});
      //var resultatTotalt = _.reduce(resultatFilter,function(sum,n){return sum + n + resultatDenneRunde},0);
      var resultatTotalSum = Number((_.sum(resultatFilter)+resultatDenneRunde).toFixed(2));
      return resultatTotalSum;
     }

     fortsettSpillet()
     {
       this.terningResultat = null;

       if(this.antallSpillere > this.aktivSpiller+1)
       {
       this.aktivSpiller++;
       return;
       }
             
       if(this.denneRunde < this.antallRunder)  
      {
       this.denneRunde++ 
       this.aktivSpiller = _.indexOf(this.spillere, _.head(this.spillere));  //også kjent som 0
       return;
      }
      
      else
      {
      this.spilletOver = true;
      return;
      }
     }

  ngOnInit() {
  }
}
// var a1=[1,1,2];
//      var a2=[1,2,1];
//      var a3=[1,3,2];
//      var a4=[1,4,3];
//      var b1=[2,1,2];
//      var b2=[2,2,3];
//      var b3=[2,3,5];
//      var b4=[2,4,1];

//      var alldata=[a1,a2,a3,a4,b1,b2,b3,b4]

//      var initVerdi=[0,0,0];

//     //  var accumulator = (sum = [], currentResult) => (sum[currentResult[0]]+=currentResult[2],sum);
//     //  var resultat= alldata.reduce((accumulator),initVerdi);
    
//      var resultat = alldata.reduce((sum = [], currentResult) => (sum[currentResult[0]]+=currentResult[2],sum),initVerdi);
    
//     // var resultat= alldata.reduce( 
//     //     function(sum = [], n) {
//     //         sum[n[0]]+=n[2]
//     //         return sum ;
//     //     }, initVerdi);

//     //  var resultat= _.reduce(alldata, 
//     //     function(sum = [], n) {
//     //         sum[n[0]]+=n[2]
//     //         return sum ;
//     //     }, initVerdi);

//     //  var resultat= _.reduce(alldata, 
//     //     function(sum:number[], n):number[] {
//     //         sum[n[0]]+=n[2]
//     //         return sum ;
//     //     }, initVerdi);

//       resultat