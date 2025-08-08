"use client"

import { useEffect, useState } from "react"
import { usuarioFindAll } from "../lib/api/usuarios"
import UsuarioEditar from "./usuarioEditar";

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState<any[]>([]);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState<any | null>();

    useEffect(() => {
        const fetchBuscaUsuario = async () => {
            const response = await usuarioFindAll()
            if (response) {
                setUsuarios(response)
            } else {
                return []
            };
        };

        fetchBuscaUsuario();
    }, []);

    const handleEditar = (usuario: any) => {
        setUsuarioSelecionado(usuario);
    }

    const handleExcluir = (id: number) => {
        alert(id);
    }

    return (
        <>
            <div>
                <h2>Lista de Uusários</h2>
                <table border={1} cellPadding={5} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Senha</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nome_usua}</td>
                                <td>{usuario.email_usua}</td>
                                <td>{usuario.senha_usua}</td>
                                <td>
                                    <button onClick={() => handleEditar(usuario)}>Editar</button>
                                    <button onClick={() => handleExcluir(usuario.id)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {usuarioSelecionado && (
                <UsuarioEditar 
                usuario={usuarioSelecionado} 
                onClose={() => setUsuarioSelecionado(null)}/>
            )}
        </>
    );
};

export default Usuarios