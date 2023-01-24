import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoriasService } from 'src/app/core/service/categorias/categorias.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent {

  categories: any[] = [];
  librosCategorias: any[] = [];
  idCategotia: String = "";
  categoriaFormulario: FormGroup;

  constructor(private readonly categoriaService: CategoriasService){
    this.categoriaFormulario = new FormGroup({
      categoria: new FormControl(null)
  });
  }

  ngOnInit(): void {
    this.categoriaService.getCategorias().then(data =>{
      this.categories = data;
    })
  }

  mostrarLibros(): void{
    this.idCategotia = this.categoriaFormulario.get('categoria')?.value;
    console.log(this.categoriaFormulario.get('categoria')?.value)
    this.categoriaService.getBusquedaCategoria(this.idCategotia).then(data =>{
      this.librosCategorias = data;
      console.log(this.librosCategorias)
    })
  }

  
}
