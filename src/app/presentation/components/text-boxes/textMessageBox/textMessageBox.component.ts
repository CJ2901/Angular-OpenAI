import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-message-box',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './textMessageBox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxComponent {
  @Input() placeholder: string='';
  @Input() disableCorrections: boolean=false;

  @Output() onMessage = new EventEmitter<string>();

  // Formulario reactivo
  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt:['', Validators.required]
  });

  // Enviar mensaje
  handleSubmit() {
    if (this.form.invalid) return;

    const  {prompt} = this.form.value;
    console.log({prompt});

    this.onMessage.emit(prompt ?? '');
    this.form.reset();
  }

}
