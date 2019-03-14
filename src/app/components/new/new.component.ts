import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CampsService } from '../../services/camps.services';
import { SqlService } from '../../services/sql.service';
import { Camp } from '../../interfaces/camp.interface';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html'
})
export class NewComponent implements OnInit {

  tirada_camp: any;
  tirada_arc: any;

  camps: any;
  categories: any;


  constructor(  private _campsService: CampsService,
                private _sqlService: SqlService,
                private router: Router,
                private route: ActivatedRoute ) { }

  ngOnInit() {
    this._campsService.getCamps(0, 1)
    .subscribe( data => {
      this.camps = data;
    });

    this._sqlService.consultaCategoria( 0 )
    .subscribe( dataCat => {
      this.categories = dataCat;
    });
  }

  guardar (forma: NgForm) {
    // Guardem dades d'usuari
    // const UsrNick = localStorage.getItem ('profileNick');
    // const UsrId = localStorage.getItem ('profileId');

    // localStorage.clear();

    // Recupero i guardo dades usuari
    // localStorage.setItem ('profileNick', UsrNick);
    // localStorage.setItem ('profileId', UsrId);
    // Guarda dades partida
    localStorage.setItem ('camp', this.tirada_camp);
    localStorage.setItem ('arc', this.tirada_arc);
    localStorage.setItem ('totalDianes', '24');
    localStorage.setItem ('dianaActual', '1');
    localStorage.setItem ('puntsTotals', '0');
    localStorage.setItem ('plensTotals', '0');

    // Redirigir a la següent pagina
    this.router.navigate(['/formTirada']);
  }
}
