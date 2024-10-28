import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  temporadasP:number = 0;

  constructor(private serieService:SerieService) { }

  ngOnInit() {
    this.getSeries();
  }
  
  getSeries():void{
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.temporadasP = this.temporadasPromedio(this.series);
    })
    
  }

  temporadasPromedio(ser:Serie[]):number{ 
    let promedio:number = 0;
    for(let serie of ser)
    {
        promedio+=serie.seasons;
    }

    promedio=Math.floor(promedio/ser.length);
    return promedio;
  }

}
