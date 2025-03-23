import { Routes } from '@angular/router';
import { EditClientComponent } from './clients/edit-client/edit-client.component';
import { NewClientComponent } from './clients/new-client/new-client.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { SchedulesMonthComponent } from './schedules/schedules-month/schedules-month.component';

export const routes: Routes = [
  {
    path: 'clients',
    children: [
      {
        path: 'edit/:id',
        component: EditClientComponent,
        data: { title: 'Atualizar Cliente' },
      },
      {
        path: 'new',
        component: NewClientComponent,
        data: { title: 'Cadastrar Cliente' },
      },
      {
        path: 'list',
        component: ListClientsComponent,
        data: { title: 'Clientes Cadastrados' },
      },
    ],
  },
  {
    path: 'schedules',
    children: [
      {
        path: 'month',
        component: SchedulesMonthComponent,
        data: { title: 'Agendamentos' },
      },
    ],
  },
  {
    path: '',
    redirectTo: 'schedules/month',
    pathMatch: 'full',
  },
  {
    path: '404',
    loadComponent: () =>
      import('./commons/components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
    data: { title: 'Página não encontrada' },
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
