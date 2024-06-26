import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrl: './tarjeta-credito.component.css'
})
export class TarjetaCreditoComponent {
  listTarjetas: any[] = [
    {titular: 'Juan Perez', numeroTarjeta: '1234 1234 1234 1234', fechaExpiracion: '01/23', cvv: '123' },
    {titular: 'Maria Rodriguez', numeroTarjeta: '5674 1112 1234 1234', fechaExpiracion: '01/23', cvv: '121'}
  ];
  form: FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService) {

    this.form = this.fb.group({
      titular: ['',Validators.required],
      numeroTarjeta: ['',[Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    });
  }
  agregarTarjeta() {
    console.log(this.form);

    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value
    }
    this.listTarjetas.push(tarjeta);
    this.toastr.success('La tarjeta fue registrada con exito', 'Tarjeta Registrada!');
    this.form.reset();
  }
  eliminarTarjeta(index: number) {
    this.listTarjetas.splice(index, 1);
    this.toastr.error('La tarjeta fue eliminada con exito', 'Tarjeta Eliminada!');
  }

}
