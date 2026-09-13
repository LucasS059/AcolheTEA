import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, Car, Users, MessageSquare, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import logoTea from '../../assets/logo-tea.svg';

export default function Sidebar() {
  const [encolhida, setEncolhida] = useState(false);

  return (
    <aside style={{ ...styles.sidebar, width: encolhida ? '72px' : '250px' }}>
      <button
        onClick={() => setEncolhida(!encolhida)}
        style={styles.toggleBtn}
        title={encolhida ? 'Expandir menu' : 'Recolher menu'}
      >
        {encolhida ? (
          <ChevronRight size={14} color="#64748B" strokeWidth={2.5} />
        ) : (
          <ChevronLeft size={14} color="#64748B" strokeWidth={2.5} />
        )}
      </button>

      <div style={{ ...styles.header, justifyContent: encolhida ? 'center' : 'flex-start' }}>
        <img src={logoTea} alt="AcolheTEA" style={styles.logo} />
        {!encolhida && (
          <div style={styles.brandContainer}>
            <div style={styles.brandTitle}>
              Acolhe<span style={styles.brandHighlight}>TEA</span>
            </div>
            <span style={styles.brandSubtitle}>Painel de Controle</span>
          </div>
        )}
      </div>

      <nav style={styles.nav}>
        {!encolhida && <span style={styles.sectionLabel}>OPERAÇÃO</span>}

        <NavLink
          to="/admin/dashboard"
          title="Dashboard"
          style={({ isActive }) => ({
            ...styles.link,
            justifyContent: encolhida ? 'center' : 'flex-start',
            ...(isActive ? styles.linkActive : {})
          })}
        >
          {({ isActive }) => (
            <>
              <LayoutDashboard size={20} color={isActive ? '#2563EB' : '#64748B'} />
              {!encolhida && <span>Dashboard</span>}
              {isActive && !encolhida && <div style={styles.activeIndicator} />}
            </>
          )}
        </NavLink>

        <NavLink
          to="/admin/viagens"
          title="Viagens"
          style={({ isActive }) => ({
            ...styles.link,
            justifyContent: encolhida ? 'center' : 'flex-start',
            ...(isActive ? styles.linkActive : {})
          })}
        >
          {({ isActive }) => (
            <>
              <Car size={20} color={isActive ? '#2563EB' : '#64748B'} />
              {!encolhida && <span>Viagens</span>}
              {isActive && !encolhida && <div style={styles.activeIndicator} />}
            </>
          )}
        </NavLink>

        <NavLink
          to="/admin/motorista"
          title="Motoristas"
          style={({ isActive }) => ({
            ...styles.link,
            justifyContent: encolhida ? 'center' : 'flex-start',
            ...(isActive ? styles.linkActive : {})
          })}
        >
          {({ isActive }) => (
            <>
              <Users size={20} color={isActive ? '#2563EB' : '#64748B'} />
              {!encolhida && <span>Motoristas</span>}
              {isActive && !encolhida && <div style={styles.activeIndicator} />}
            </>
          )}
        </NavLink>

        {!encolhida && <span style={{ ...styles.sectionLabel, marginTop: '20px' }}>INTEGRAÇÕES</span>}

        <NavLink
          to="/admin/whatsapp"
          title="WhatsApp"
          style={({ isActive }) => ({
            ...styles.link,
            justifyContent: encolhida ? 'center' : 'flex-start',
            ...(isActive ? styles.linkActive : {})
          })}
        >
          {({ isActive }) => (
            <>
              <MessageSquare size={20} color={isActive ? '#2563EB' : '#64748B'} />
              {!encolhida && <span>WhatsApp</span>}
              {isActive && !encolhida && <div style={styles.activeIndicator} />}
            </>
          )}
        </NavLink>
      </nav>

      <div style={styles.footer}>
        <Link
          to="/login"
          title="Encerrar Sessão"
          style={{
            ...styles.logoutBtn,
            justifyContent: encolhida ? 'center' : 'flex-start'
          }}
        >
          <LogOut size={18} color="#94A3B8" />
          {!encolhida && <span>Encerrar Sessão</span>}
        </Link>
      </div>
    </aside>
  );
}

const styles = {
  sidebar: {
    height: '100vh',
    backgroundColor: '#FFFFFF',
    borderRight: '1px solid #E2E8F0',
    display: 'flex',
    flexDirection: 'column',
    position: 'sticky',
    top: 0,
    flexShrink: 0,
    transition: 'width 0.2s ease',
    zIndex: 10
  },
  toggleBtn: {
    position: 'absolute',
    top: '22px',
    right: '-13px',
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    border: '1px solid #CBD5E1',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: 0,
    zIndex: 20
  },
  header: {
    padding: '20px 14px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    borderBottom: '1px solid #F1F5F9',
    minHeight: '74px'
  },
  brandContainer: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  logo: {
    width: '32px',
    height: '32px',
    flexShrink: 0
  },
  brandTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#0F172A',
    letterSpacing: '-0.3px',
    lineHeight: 1.2
  },
  brandHighlight: {
    color: '#2563EB'
  },
  brandSubtitle: {
    fontSize: '11px',
    color: '#94A3B8',
    fontWeight: '500'
  },
  nav: {
    padding: '16px 10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    flexGrow: 1
  },
  sectionLabel: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#94A3B8',
    letterSpacing: '0.6px',
    paddingLeft: '12px',
    marginBottom: '6px',
    whiteSpace: 'nowrap'
  },
  link: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '11px 12px',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#64748B',
    fontSize: '14px',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    transition: 'background-color 0.15s ease, color 0.15s ease'
  },
  linkActive: {
    backgroundColor: '#EFF6FF',
    color: '#2563EB',
    fontWeight: '600'
  },
  activeIndicator: {
    position: 'absolute',
    right: '8px',
    width: '4px',
    height: '18px',
    borderRadius: '4px',
    backgroundColor: '#2563EB'
  },
  footer: {
    padding: '16px 10px',
    borderTop: '1px solid #F1F5F9'
  },
  logoutBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#64748B',
    fontSize: '14px',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }
};