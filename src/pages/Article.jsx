import {React, useState} from 'react'
import BlocoDeCodigo from '../ui/BlocoDeCodigo'

const topicos = [
  {
    "titulo": "Regras",
    "paragrafos": [
      {
        "texto": "Para o react entender o que é um componente, a função deve ter nome maiúsculo e retornar um JSX. Exemplo:",
        "code": "function App() { return <h1>Hello World</h1> }" 
      },
      {
        "texto": "No react é obrigatório fechar a tag, mas quando não há nada dentro do elemento vemos a tag de fechamento vem omitida. A regra se aplica para tudo que no html não era fechado, como as tags img, input, br e etc. No React, TUDO, literalmente tudo tem que ser fechado. Exemplo:",
        "code": "<Input/>"
      },
      {
        "texto": "JSX sempre deve retornar apenas um elemento, então se for mais de um elemento deve estar encapsulado em apenas um. Se não quiser que este elemento apareça no html, pode usar um react fragment. Exemplo:",
        "code": "<React.Fragment>\n<label>Nome:</label>\n<Input/>\n</React.Fragment>"
      }
    ]
  }
]

function Article() {
  const [content, setContent] = useState(null)
  return (
    <section>
        <aside>
            <ul>
                {topicos.map((item, index)=>{
                  console.log(item)
                    return <li onClick={()=>setContent(item.paragrafos)} key={index}>{item.titulo}</li>
                })}
            </ul>
        </aside>
        <article>
            {content ? content.map((item, index)=>{
              return (
              <>
                <p key={index}>{item.texto}</p>
                <BlocoDeCodigo codigo={item.code}/>
              </>
            )
            }) : null}
        </article>
    </section>
  
  )
}

export default Article

