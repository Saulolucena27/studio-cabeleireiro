import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found-container fade-in">
      <div class="error-code">
        <span class="number">4</span>
        <span class="icon">0</span>
        <span class="number">4</span>
      </div>
      <h2>Ops! Página não encontrada</h2>
      <p>
        Parece que você se perdeu no caminho. Vamos voltar para a página
        inicial?
      </p>
      <a routerLink="/schedules/month" class="btn-voltar">
        <span class="material-icons">home</span>
        Voltar para o início
      </a>
    </div>
  `,
  styles: [
    `
      .not-found-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 80vh;
        text-align: center;
        padding: 2rem;
      }

      .error-code {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
      }

      .number {
        font-size: 8rem;
        font-weight: 700;
        color: var(--primary-color);
        line-height: 1;
      }

      .icon {
        font-size: 8rem;
        font-weight: 700;
        color: var(--secondary-color);
        line-height: 1;
        margin: 0 1rem;
      }

      h2 {
        font-size: 2rem;
        color: var(--dark-gray);
        margin-bottom: 1rem;
      }

      p {
        color: var(--text-color);
        margin-bottom: 2rem;
        max-width: 500px;
      }

      .btn-voltar {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 2rem;
        background-color: var(--accent-color);
        color: white;
        border-radius: 8px;
        text-decoration: none;
        transition: all 0.3s ease;
        font-weight: 500;

        .material-icons {
          font-size: 1.2rem;
        }

        &:hover {
          background-color: var(--secondary-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      }
    `,
  ],
})
export class NotFoundComponent {}
