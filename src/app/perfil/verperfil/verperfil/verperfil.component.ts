import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/usuario.model';
import { PerfilService } from '../../perfil.service';

@Component({
  selector: 'app-verperfil',
  templateUrl: './verperfil.component.html',
  styleUrls: ['./verperfil.component.css'],
})
export class VerPerfilComponent implements OnInit {
  usuario;
  usuarioData: Usuario;
  prueba: any;
  products: any;
  constructor(
    private _perfilService: PerfilService,
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.usuario = this._perfilService.getUsuario();
     this.getProductStock();
    
  }

  async getProductStock() {
    let supplier = await this._perfilService.getSupplier('Arts and Crafts Supplier'); 
    this.products = await this._perfilService.getProductsFromSupplier();
  }

  submit(){
    this.router.navigate(['/perfil/editarperfil'])
  }
}
