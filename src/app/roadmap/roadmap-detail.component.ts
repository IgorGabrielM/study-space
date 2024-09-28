import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoadmapService } from 'src/app/services/roadmap.service';

@Component({
  selector: 'app-roadmap',
  template: `
    <div class="p-4 max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold text-center mb-4">{{ roadmap?.nome }}</h2>
      <div class="bg-white shadow-md rounded-lg p-6">
        <div class="mermaid" [innerHTML]="roadmap?.codigo"></div>
      </div>
    </div>
  `,
  styles: [
    `
      .mermaid {
        background: #f9f9f9; /* opcional, para melhor visualização */
        padding: 10px;
        border: 1px solid #ddd; /* opcional */
        border-radius: 4px; /* opcional */
      }
    `,
  ],
})
export class RoadmapDetailComponent implements AfterViewInit {
  roadmap = {
    id: 1,
    nome: 'Roadmap Angular',
    codigo: `flowchart TB
      A[Início: O que é Angular?] --> B{Pré-requisitos}
      B -->|Conhecimento Básico em HTML/CSS| C[Instalar Angular CLI]
      B -->|Fundamentos de Javascript/Typescript| D[Entender Componentes]

      C --> E[Criação do primeiro projeto Angular]
      D --> E
      E --> F{Módulos Importantes}

      F -->|HttpClient| G[Consumir APIs]
      F -->|FormsModule| H[Trabalhar com Formulários]
      F -->|RouterModule| I[Configurar Rotas]
      F -->|RxJS| J[Programação Reativa com Observables]

      click A "https://angular.io/guide/what-is-angular" "Clique para mais informações"
      click C "https://angular.io/cli" "Clique para instalar o Angular CLI"
      click D "https://angular.io/guide/component-overview" "Leia sobre Componentes"
      click G "https://angular.io/guide/http" "Veja como consumir APIs"
      click H "https://angular.io/guide/forms-overview" "Formulários no Angular"
      click I "https://angular.io/guide/router" "Aprenda sobre Rotas"
      click J "https://rxjs.dev/guide/overview" "Documentação oficial do RxJS"`,
  };

  ngAfterViewInit() {
    // Inicializa o Mermaid
    // @ts-ignore
    if (typeof mermaid !== 'undefined') {
      // @ts-ignore
      mermaid.initialize({ startOnLoad: true });
      // @ts-ignore
      mermaid.contentLoaded();
    }
  }
}
