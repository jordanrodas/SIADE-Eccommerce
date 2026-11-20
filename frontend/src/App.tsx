import { NavLink, Route, Routes } from 'react-router-dom'

function Home() {
  return (
    <section className="panel">
      <p className="eyebrow">Sprint 1 · Gestor de productos</p>
      <h1>Catálogo maestro</h1>
      <p>Base inicial de SIADE. El siguiente incremento implementará CRUD, atributos normalizados y movimientos.</p>
      <div className="notice">Entorno de desarrollo. No hay conexión con marketplaces ni datos reales.</div>
    </section>
  )
}

export default function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="brand">SIADE</div>
        <p className="muted">Gestor de productos</p>
        <nav>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/productos">Productos</NavLink>
          <NavLink to="/movimientos">Movimientos</NavLink>
        </nav>
      </aside>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<section className="panel"><h1>Productos</h1><p>CRUD pendiente de implementación.</p></section>} />
          <Route path="/movimientos" element={<section className="panel"><h1>Movimientos</h1><p>Historial de solo lectura pendiente de implementación.</p></section>} />
        </Routes>
      </main>
    </div>
  )
}