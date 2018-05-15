import {Component, OnInit} from '@angular/core';
import {GameserverService} from '../../service/gameserver.service';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent implements OnInit {

  chartLabels: string[] = null;
  chartData: number[] = null;

  constructor(private gameserverService: GameserverService) {
  }

  ngOnInit() {
    this.gameserverService.getPopulation().subscribe(population => {
      this.chartLabels = [];
      this.chartData = [];
      for (const classPopulation of population) {
        this.chartLabels.push(classPopulation.className);
        this.chartData.push(classPopulation.count);
        console.log(classPopulation);
      }
    });
  }
}
