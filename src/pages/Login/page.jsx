import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import logoTea from '../../assets/logo-tea.svg';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/admin/dashboard');
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <img src={logoTea} alt="AcolheTEA" style={styles.logo} />
          <h1 style={styles.title}>
            Acolhe<span style={styles.highlight}>TEA</span>
          </h1>
          <p style={styles.subtitle}>Painel Administrativo e Operacional</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>E-mail</label>
            <div style={styles.inputWrapper}>
              <Mail size={18} color="#94A3B8" style={styles.inputIcon} />
              <input
                type="email"
                required
                placeholder="operador@acolhetea.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Senha</label>
            <div style={styles.inputWrapper}>
              <Lock size={18} color="#94A3B8" style={styles.inputIcon} />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                style={styles.input}
              />
            </div>
          </div>

          <button type="submit" style={styles.button}>
            <span>Acessar Painel</span>
            <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
    padding: '20px'
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '36px 32px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    border: '1px solid #E2E8F0'
  },
  header: {
    textAlign: 'center',
    marginBottom: '28px'
  },
  logo: {
    width: '52px',
    height: '52px',
    marginBottom: '12px'
  },
  title: {
    margin: 0,
    fontSize: '24px',
    fontWeight: '700',
    color: '#0F172A',
    letterSpacing: '-0.5px'
  },
  highlight: {
    color: '#2563EB'
  },
  subtitle: {
    margin: '6px 0 0 0',
    fontSize: '13px',
    color: '#64748B'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#334155'
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  inputIcon: {
    position: 'absolute',
    left: '12px',
    pointerEvents: 'none'
  },
  input: {
    width: '100%',
    padding: '10px 12px 10px 38px',
    borderRadius: '8px',
    border: '1px solid #CBD5E1',
    fontSize: '14px',
    color: '#0F172A',
    outline: 'none',
    backgroundColor: '#FFFFFF'
  },
  button: {
    marginTop: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    padding: '11px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer'
  }
};