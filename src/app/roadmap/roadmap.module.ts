import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoadmapComponent } from './roadmap.component';
import { ButtonModule } from 'primeng/button';
import { RoadmapDetailComponent } from './roadmap-detail.component';

@NgModule({
  declarations: [RoadmapComponent, RoadmapDetailComponent],
  imports: [CommonModule, ButtonModule],
})
export class RoadmapModule {}
