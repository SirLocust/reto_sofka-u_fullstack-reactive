import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import Page from '../interfaces/models/Page'

export const HomePage: React.FC<Page & RouteComponentProps<any>> = () => {
  return (
    <section className="container flex_center_spece">
      <h1>Home</h1>

      <p>
        Bienvenido a mi App Empresarial creada para el reto de programacion
        reactiva en Sofka u
      </p>
      <Link to="/questions" className="button">
        View Questions
      </Link>
    </section>
  )
}
