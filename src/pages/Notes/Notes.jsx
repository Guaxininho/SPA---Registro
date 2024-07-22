import React from 'react'
import { Link } from "react-router-dom";
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'
import { StyledNotes } from '../../styles/Notes';


function Notes() {
  // COMPONENTE RESPONSÁVEL PELA ABA DOCUMENTAÇÃO
  return (
    <StyledNotes>
      <h1>Escolha qual tecnologia você quer acessar</h1>
      <div className="flexIconesDeDocumentacao">
        <button>
          <Link to="/documentacao/react">
            <img src={react} alt="react" />
            <h3>React</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/javascript">
            <img src={javascript} alt="javascript" />
            <h3>Javascript</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/css">
            <img src={css} alt="css" />
            <h3>CSS</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/html">
            <img src={html} alt="html" />
            <h3>HTML</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/python">
            <img src={python} alt="python" />
            <h3>Python</h3>
          </Link>
        </button>
      </div>
    </StyledNotes>
  );
}

export default Notes