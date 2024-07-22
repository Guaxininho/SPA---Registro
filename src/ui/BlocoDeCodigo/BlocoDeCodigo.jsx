import {React, useState} from 'react'
import copiar from '../../assets/copiar.png'
import copiarcheck from '../../assets/copiarcheck.png'
import {StyledBlocoDeCodigo} from '../../styles/BlocoDeCodigo.js'


function BlocoDeCodigo({codigo}) {
    const [botaoClip, setBotaoclip] = useState(copiar);
    // const [valor, setValor] = useState(props.codigo);
  return (
    <StyledBlocoDeCodigo className="BlocoDeCodigo">
        <code className="codigoInterno">{codigo}</code>
            <button
                onClick={() => {
                navigator.clipboard.writeText(codigo);
                setBotaoclip(copiarcheck);
                setTimeout(() => {
                setBotaoclip(copiar);
                }, 500);
        }}
      >
                <img src={botaoClip} alt='copiar' />
            </button>
    </StyledBlocoDeCodigo>
  )
}

export default BlocoDeCodigo