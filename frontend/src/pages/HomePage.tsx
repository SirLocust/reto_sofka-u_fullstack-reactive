import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import Page from '../interfaces/models/Page'

export const HomePage: React.FC<Page & RouteComponentProps<any>> = () => {
  return (
    <section className="container flex_center">
      <h1>Home</h1>

      <p>welcome to the question and answer app.</p>
      <Link to="/questions" className="button">
        View Questions
      </Link>
    </section>
  )
}
