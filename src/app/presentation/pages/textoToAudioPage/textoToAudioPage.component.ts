import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-texto-to-audio-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './textoToAudioPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TextoToAudioPageComponent { }
