import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';


const ListadoMascotas: Mascota[] = [
  { nombre: 'Milo', edad: 1, raza: 'Bretón', color: 'Blanco', peso: 10 },
  { nombre: 'Taison', edad: 5, raza: 'Pitbull', color: 'Blanco', peso: 20 },
  { nombre: 'Tor', edad: 1, raza: 'Mastin', color: 'Negro', peso: 7 },
  { nombre: 'Luna', edad: 3, raza: 'Bulldog', color: 'Blanco', peso: 15 },
  { nombre: 'Max', edad: 1, raza: 'Hasky', color: 'Gris', peso: 12 },
  { nombre: 'Scott', edad: 10, raza: 'Lagotto', color: 'Blanco', peso: 8 },
  {
    nombre: 'Cloe',
    edad: 6,
    raza: 'Golden Retriever',
    color: 'Dorado',
    peso: 18,
  },
  { nombre: 'Bakugan', edad: 3, raza: 'Bulldog', color: 'Negro', peso: 15 },
  { nombre: 'Scooby', edad: 1, raza: 'Gran Danés', color: 'Blanco', peso: 12 },
  { nombre: 'Hachiko', edad: 6, raza: 'Shiba-inu', color: 'Beige', peso: 12 },
];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.scss'],
})
export class ListadoMascotaComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso', 'acciones'];
  dataSource = new MatTableDataSource<Mascota>(ListadoMascotas);
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Mascotas por página';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteMascota() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this._snackBar.open('La Mascota fue eliminada con exito', '', {
        duration: 2000,
        horizontalPosition: 'right',
      });
    }, 1500);
  }
}
