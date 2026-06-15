# Login

Preencha os dados abaixo para acessar a plataforma.

<div class="login-container">
  <form class="login-form" @submit.prevent="handleLogin">
    <h2>Acesse sua Conta</h2>
    
<div class="input-group">
      <label for="email">E-mail</label>
      <input type="email" id="email" v-model="email" placeholder="Digite seu e-mail" required />
    </div>

<div class="input-group">
      <label for="password">Senha</label>
      <input type="password" id="password" v-model="password" placeholder="Digite sua senha" required />
    </div>

<button type="submit" class="btn-login">Entrar</button>
  </form>
</div>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const logado = ref(false) // Variável para controlar se o usuário logou

const handleLogin = () => {
  if (email.value && password.value) {
    // Esconde o formulário e mostra uma mensagem de sucesso na tela
    logado.value = true 
  }
}
</script>
<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
}

.login-form {
  background: var(--vp-c-bg-soft);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 400px;
  border: 1px solid var(--vp-c-divider);
}

.login-form h2 {
  margin-top: 0;
  margin-bottom: 24px;
  text-align: center;
  border: none;
  font-size: 1.5rem;
}

.input-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.input-group label {
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 0.9rem;
}

.input-group input {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 1rem;
  transition: border-color 0.2s;
}

.input-group input:focus {
  border-color: var(--vp-c-brand-1);
  outline: none;
}

.btn-login {
  width: 100%;
  padding: 12px;
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}

.btn-login:hover {
  background: var(--vp-c-brand-2);
}

.btn-login:active {
  transform: scale(0.98);
}
</style>