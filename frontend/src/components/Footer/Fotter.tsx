import React from 'react'

export const Fotter = () => {
  return (
    <footer className="flex_center_spece">
      <div className="flex_center_row">
        <div className="p-10">
          <p>
            este sito web es creado para el reto de programacion reactiva de
            sofka-U
          </p>
        </div>
        <div>
          <a
            className="fa "
            href="https://sirlocust.github.io/-Portafolio/home"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-portrait"></i>
          </a>

          <a
            className="fa "
            href="https://github.com/SirLocust"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com/devSirlocust"
            target="_blank"
            className="fa "
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/devsirlocust/"
            className="fa "
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div>
        <p className="text-center">Copyright &copy; Devpractical.com</p>
      </div>
    </footer>
  )
}
