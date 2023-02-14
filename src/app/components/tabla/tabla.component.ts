import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Estudiante } from '../../models/estudiante';
import { MatDialog } from '@angular/material/dialog';
import { EditarEstudianteComponent } from '../editar-estudiante/editar-estudiante.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent {
  estudiantes: Estudiante[] = [
    {
      nombre: 'Baby ',
      apellido: 'Rick',
      curso: 'ANGULAR',
      calificacion: 4.6,
      correo: 'baby@gmail.com',
      sexo: 'Masculino',
      becado: true,
    },
    {
      nombre: 'Amy',
      apellido: 'Poopybutthole',
      sexo: 'femenino',
      correo: 'amy@gmail.com',
      curso: 'REACT',
      calificacion: 8.6,

      becado: true,
    },
    {
      nombre: 'Karen ',
      apellido: 'Entity',
      sexo: 'femenino',
      correo: 'karen@gmail.com',
      curso: 'NODE ',
      calificacion: 7.7,
      becado: false,
    },
    {
      nombre: 'Bearded ',
      apellido: 'Lady',
      sexo: 'masculino',
      correo: 'bearded@gmail.com',
      curso: 'ANGULAR',
      calificacion: 8.4,
      becado: true,
    },
    {
      nombre: 'Michael ',
      apellido: 'Jackson',
      sexo: 'masculino',
      correo: 'michael@gmail.com',
      curso: 'NODE',
      calificacion: 4,
      becado: false,
    },
    {
      nombre: 'Evil ',
      apellido: 'Morty',
      sexo: 'masculino',
      correo: 'evil@gmail.com',
      curso: 'REACT',
      calificacion: 5.4,
      becado: true,
    },
  ];

  dataSource: MatTableDataSource<Estudiante> =
    new MatTableDataSource<Estudiante>(this.estudiantes);

  constructor(private dialog: MatDialog) {}

  columnas: string[] = [
    'Nombre',
    'Curso',
    'Calificacion',
    'Aprobado',
    'Acciones',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editarDatos(estudiante: Estudiante) {
    const dialogRef = this.dialog.open(EditarEstudianteComponent, {
      data: estudiante,
    });
  }

  eliminarDatos(element: Estudiante) {
    console.log('entro a eliminar', element);

    let arr_copy = [...this.estudiantes];
    console.log('arr_copy ', arr_copy);

    arr_copy.forEach(function (currentValue, index, arr) {
      if (arr_copy[index] == element) {
        arr_copy.splice(index, 1);
      }
    });
    console.log('arr_copy ', arr_copy);

    this.estudiantes = arr_copy;
  }
}
