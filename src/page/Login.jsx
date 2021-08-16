import '../css/Login.css'
import { Input } from '../components/Input'
import { Botao } from '../components/Botao'

import { useState } from 'react'

export function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [user] = useState([])


  function changeEmail(e) {
    setEmail(e.target.value)
    console.log(email)
  }
  function changeSenha(e) {
    setSenha(e.target.value)
    console.log(senha)
  }

  function limparDados() {
    setEmail('')
    setSenha('')
  }

  function login() {
    user.push({ "email": email, "senha": senha })

    console.log(user)
    limparDados()
    if (email && senha) {
      return console.log('Logado')
    } else {
      return console.log('Use um email e senha')
    }
  }

  return (
    <div className="Login">
      <header className="container">
        <h1 className="d-flex justify-content-center">Login</h1>
      </header>
      <menu className="container">
        <Input name="E-mail" type="email" value={email} change={changeEmail} />
        <Input name="Senha" type="password" value={senha} change={changeSenha} />
      </menu>
      <footer className="container d-flex justify-content-between">
        <Botao name="Criar conta" />
        <Botao name="Entrar" event={login} />
      </footer>
    </div>
  )
}