import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'cl-suche',
  styleUrl: 'cl-suche.css',
  shadow: true,
  assetsDirs: ['asset']
})

export class suchleiste {

@Prop() ort: HTMLElement = document.querySelector('.ort');
@Prop() checkin: HTMLElement = document.querySelector('.checkin');
@Prop() gaeste: HTMLElement = document.querySelector('.gaeste');
@Prop() menuleiste: HTMLElement = document.querySelector('.menuleiste');
@Prop() suche: HTMLElement = document.querySelector('.suche');

@Prop() heute = new Date();

@Prop() valuevt: number;
@Prop() valuevm: number;
@Prop() valuevj: number;
@Prop() valueo: string;
@Prop() valuen: number;
@Prop() valueg: number;



//Ortseingabe - Überprüfung
private ortIn = () => {
  if(this.valueo == null){
    this.valueo =  ". . .";
  }
}
private ortOut = () => {
  if(this.valueo === ". . ."){
    this.valueo =  null;
  }
}
private ortCl = () => {
  this.valueo = "";
}

//Datumseingabe - Überprüfung
private checkinIn = () => {
  if (this.valuevt == null){
    this.valuevt = 0;
  }
  if (this.valuevm == null){
    this.valuevm = 0;
  }
  if (this.valuevj == null){
    this.valuevj = 2000;
  }
}
private checkinOut = () => {
  if (this.valuevt === 0){
    this.valuevt = null;
  }
  if (this.valuevm === 0){
    this.valuevm = null;
  }
  if (this.valuevj === 2000){
    this.valuevj = null;
  }
}
private checkintCl = () => {
  this.valuevt = this.heute.getDate();
}
private checkinmCl = () => {
  this.valuevm = this.heute.getMonth()+1;
}
private checkinjCl = () => {
  this.valuevj = this.heute.getFullYear();
}

//Nächteeingabe - Überprüfung
private naechteIn = () => {
  if(this.valuen == null){
    this.valuen =  0;
  }
}
private naechteOut = () => {
  if(this.valuen === 0){
    this.valuen =  null;
  }
}
private naechteCl = () => {
  this.valuen =  1;
}

//Gästeeingabe - Überprüfung
private gaesteIn = () => {
  if(this.valueg == null){
    this.valueg =  0;
  }
}
private gaesteOut = () => {
  if(this.valueg === 0){
    this.valueg =  null;
  }
}
private gaesteCl = () => {
  this.valueg =  1;
}

//Mitteilung asuzufüllender Elemente
@Prop() texto: string = "";
@Prop() textc: string = "";
@Prop() textn: string = "";
@Prop() textg: string = "";

private goclick = () => {
    if (this.valueo == null) {
      this.texto = "!";
    } else if (this.valueo != null) {
      this.texto = "";
    }if (this.valuevt == null || this.valuevm == null || this.valuevj == null) {
      this.textc = "!";
    }else if (this.valuevt != null && this.valuevm != null && this.valuevj != null) {
      this.textc = "";
    }if (this.valuen == null) {
      this.textn = "!";
    }else if (this.valuen != null) {
      this.textn = "";
    }if (this.valueg == null) {
      this.textg = "!";
    }else if (this.valueg != null) {
      this.textg = "";
    }  if(this.valueo != null && this.valuevt != null && this.valuevm != null && this.valuevj != null && this.valueg != null && this.valuen != null){
      alert('Augen schließen und genießen... Danke und beehren Sie uns bald wieder, wir würden uns freuen. - Ihr ONbnb-Team.');
    }
}



  render() {
    return (
      <Host>
        <div class="suchleiste">
          <div class="menuleiste">
            <div class="ort" onMouseEnter={this.ortIn}  onMouseLeave={this.ortOut}>
                Ort: {this.texto}
                <input type="String" id="ort" name="Ort" value={this.valueo} onChange={this.ortCl} onClick={this.ortCl}/>
            </div>

            <div class="checkin" onMouseEnter={this.checkinIn} onMouseLeave={this.checkinOut}>
                Check-In: {this.textc}
                <div class="eingabe"><input type='number' id="vonTag" min={1} max={31} value={this.valuevt} onClick={this.checkintCl} onChange={this.checkintCl}/>/<input type='number' id="vonMonat" min={1} max={12} value={this.valuevm} onClick={this.checkinmCl} onChange={this.checkinmCl}/>/<input type='number' id="vonJahr" min={2021} max={2030} value={this.valuevj} onClick={this.checkinjCl} onChange={this.checkinjCl}/></div>
            </div>
            <div class="naechte" onMouseEnter={this.naechteIn} onMouseLeave={this.naechteOut}>
                Nächte: {this.textn}
                <div class="eingabe"> <input type='number' id="vonTag" min={1} max={100} value={this.valuen} onChange={this.naechteCl} onClick={this.naechteCl}/> </div>
            </div>

            <div class="gaeste" onMouseEnter={this.gaesteIn} onMouseLeave={this.gaesteOut}>
                Gäste: {this.textg}
                <input type='number' id='gaesteanzahl' name='Gästeanzahl' min={1} max={15} value={this.valueg} onChange={this.gaesteCl} onClick={this.gaesteCl}/>
            </div>
                <button class="suche" onClick={this.goclick}>GO</button>
          </div>
        </div>
      </Host>
    )
  }
}
