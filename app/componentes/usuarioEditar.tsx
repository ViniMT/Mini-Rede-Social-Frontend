import React, { useState } from "react";
import { usuarioUpdate } from "../lib/api/usuarios";

interface propsUsuario {
  usuario: any;
  onClose: () => void;
  onAtualizar: () => void;
}

export const UsuarioEditar = (props: propsUsuario) => {
  const [nome, setNome] = useState(props.usuario.nome_usua);
  const [email, setEmail] = useState(props.usuario.email_usua);
  const [senha, setSenha] = useState(props.usuario.senha_usua);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const usuarioAtualizado = {
      nome_usua: nome,
      email_usua: email,
      senha_usua: senha,
    };

    const response = await usuarioUpdate(props.usuario.id, usuarioAtualizado);
    if (response) {
      props.onAtualizar();
    }else{
        alert("Erro ao tentar atualizar o usuário");
    }
  }

  return (
    <div
      style={{
        border: "1px solid black",
        padding: 20,
        marginTop: 20,
        maxHeight: 200,
        maxWidth: 200,
      }}
    >
      <h2>Editar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input value={nome} onChange={(e) => setNome(e.target.value)}></input>
        </div>

        <div>
          <label>E-mail:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div>
          <label>Senha:</label>
          <input
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          ></input>
        </div>

        <button>Salvar</button>
        <button type="button" onClick={props.onClose}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default UsuarioEditar;
