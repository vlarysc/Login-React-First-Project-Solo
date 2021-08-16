import '../css/Login.css'
import { Input } from '../components/Input'
import { Botao } from '../components/Botao'

export function Login() {
  return (
    <div className="Login">
      <header className="container">
        <h1 className="d-flex justify-content-center">Login</h1>
      </header>
      <menu className="container">
        <Input name="E-mail" type="email" />
        <Input name="Senha" type="password" />
      </menu>
      <footer className="container d-flex justify-content-between">
        <Botao name="Criar conta" />
        <Botao name="Entrar" />
      </footer>
    </div>
  )
}