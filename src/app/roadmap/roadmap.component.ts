import {Component, ElementRef, OnInit} from '@angular/core';
import {RoadmapService} from "../services/roadmap.service";
import * as go from 'gojs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  roadmaps: any[] = [];
  private diagram: go.Diagram;

  constructor(
    private roadmapService: RoadmapService,
    private el: ElementRef,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.loadRoadmaps();
    this.initDiagram();
  }

  loadRoadmaps(){
    this.roadmapService.listRoadmap().subscribe((roadmaps) => {
      this.roadmaps = roadmaps;
    })
  }

  private initDiagram() {
    const $ = go.GraphObject.make;

    this.diagram = $(go.Diagram, this.el.nativeElement.querySelector('#diagramDiv'), {
      initialContentAlignment: go.Spot.Center,
      'undoManager.isEnabled': true
    });

    console.log(this.el.nativeElement.querySelector('#diagramDiv'))

    this.diagram.nodeTemplate =
      $(go.Node, 'Auto',
        $(go.Shape, 'RoundedRectangle', new go.Binding('fill', 'color')),
        $(go.TextBlock, { margin: 5 }, new go.Binding('text'))
      );

    // Defina os dados do seu roadmap
    const model = $(go.GraphLinksModel);
    model.nodeDataArray = [
      { key: 1, text: "Introdução ao Angular", color: "lightblue" },
      { key: 2, text: "Componentes e Templates", color: "lightgreen" },
      { key: 3, text: "Diretivas", color: "lightyellow" },
      { key: 4, text: "Serviços e Injeção de Dependências", color: "lightcoral" },
      { key: 5, text: "Routing", color: "lightpink" },
      { key: 6, text: "Formulários", color: "lightgray" },
      { key: 7, text: "HTTP Client", color: "lightseagreen" },
      { key: 8, text: "State Management", color: "lightsteelblue" },
      { key: 9, text: "Testes", color: "lightsalmon" },
      { key: 10, text: "Deploy", color: "lightgoldenrodyellow" },
      { key: 11, text: "Lazy Loading", color: "lightcyan" },
      { key: 12, text: "Observables e RxJS", color: "lightpink" },
      { key: 13, text: "Interceptors", color: "lightgray" },
      { key: 14, text: "Pipes", color: "lightgoldenrodyellow" },
      { key: 15, text: "Angular Universal", color: "lightcoral" },
      { key: 16, text: "Performance e Melhores Práticas", color: "lightblue" },
      { key: 17, text: "Autenticação e Autorização", color: "lightgreen" },
      { key: 18, text: "Angular Material", color: "lightyellow" }
    ];

    model.linkDataArray = [
      { from: 1, to: 2 },
      { from: 1, to: 4 },
      { from: 2, to: 3 },
      { from: 2, to: 5 },
      { from: 3, to: 6 },
      { from: 4, to: 7 },
      { from: 5, to: 6 },
      { from: 6, to: 8 },
      { from: 7, to: 8 },
      { from: 8, to: 9 },
      { from: 9, to: 10 },
      { from: 8, to: 11 },
      { from: 12, to: 8 },
      { from: 12, to: 13 },
      { from: 2, to: 14 },
      { from: 10, to: 15 },
      { from: 9, to: 16 },
      { from: 8, to: 17 },
      { from: 11, to: 18 }
    ];

    this.diagram.model = model;
  }

  goTo(route: string) {
    this.router.navigate([`../${route}`]);
  }
}
