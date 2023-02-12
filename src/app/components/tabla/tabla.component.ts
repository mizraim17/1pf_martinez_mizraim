import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Estudiante } from '../../models/estudiante';

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
      grupo: 2,
      curso: 'ANGULAR',
      calificacion: 4.6,
      aprobado: false,
      sexo: 'Masculino',
    },
    {
      nombre: 'Amy ',
      apellido: 'Poopybutthole',

      sexo: 'femenino',
      grupo: 2,
      curso: 'REACT',
      calificacion: 8.6,
      aprobado: true,
    },
    {
      nombre: 'Karen ',
      apellido: 'Entity',

      sexo: 'femenino',
      grupo: 2,
      curso: 'NODE ',
      calificacion: 7.7,
      aprobado: true,
    },
    {
      nombre: 'Bearded ',
      apellido: 'Lady',

      sexo: 'masculino',
      grupo: 2.8,
      curso: 'ANGULAR',
      calificacion: 8.4,
      aprobado: true,
    },
    {
      nombre: 'Michael ',
      apellido: 'Jackson',
      sexo: 'masculino',
      grupo: 4.7,
      curso: 'NODE',
      calificacion: 4,
      aprobado: false,
    },
    {
      nombre: 'Evil ',
      apellido: 'Morty',
      sexo: 'masculino',
      grupo: 2,
      curso: 'REACT',
      calificacion: 5.4,
      aprobado: false,
    },
  ];

  dataSource: MatTableDataSource<Estudiante> =
    new MatTableDataSource<Estudiante>(this.estudiantes);

  columnas: string[] = ['Nombre', 'Curso', 'Calificacion', 'Aprobado'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
