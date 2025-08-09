export async function usuarioFindAll(): Promise<any> {
    try {
        const response = await fetch('http://localhost:3000/usuarios', {
            method: 'GET',
            headers: {'Accept': '*/*'}
        }
        )

        if(response.ok) {
            const data = await response.json()
            return data
        }

    } catch { 
        alert('Erro ao consultar usuário')
        return []
    }
}

export async function usuarioUpdate(id: number, body: any): Promise<any> {
    try {
        const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        }
        )

        if(response.ok) {
            const data = await response.json()
            return data
        }

    } catch { 
        alert('Erro ao alterar o usuário')
        return []
    }
}
