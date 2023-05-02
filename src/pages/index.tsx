import Image from 'next/image'
import Layout from '../components/layout'
import Botao from '../components/Botao'
import Tabela from '../components/Tabela'
import Formulario from '../components/Formulario'

const {
  cliente,
  clientes,
  novoCliente,
  salvarCliente,
  selecionarCliente,
  excluirCliente,
  tabelaVisivel,
  exibirTabela
} = useClientes()

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4"
                onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}
