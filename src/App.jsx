// src/App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import "./styles/globals.css";
import "./styles/Toast.css";

/* ── Toast hook ── */
function useToast() {
  const [toasts, setToasts] = useState([]);
  const add = (msg, type = "success") => {
    const id = Date.now();
    setToasts(p => [...p, { id, msg, type }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 4500);
  };
  const remove = id => setToasts(p => p.filter(t => t.id !== id));
  return { toasts, add, remove };
}

/* ── Toast UI ── */
function ToastContainer({ toasts, remove }) {
  return (
    <div className="toast-container">
      {toasts.map(t => (
        <div key={t.id} className={`toast toast--${t.type}`} onClick={() => remove(t.id)}>
          <span className="toast__icon">{t.type === "success" ? "✓" : "✕"}</span>
          {t.msg}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const { toasts, add: addToast, remove } = useToast();

  const isProject = page.startsWith("project:");
  const projectId = isProject ? page.replace("project:", "") : null;

  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [page]);

  return (
    <>
      <Navbar page={isProject ? "portfolio" : page} setPage={setPage} />
      <main>
        {page === "home"      && <Home      setPage={setPage} />}
        {page === "portfolio" && <Portfolio setPage={setPage} />}
        {page === "contact"   && <Contact   addToast={addToast} />}
        {isProject            && <ProjectDetail projectId={projectId} setPage={setPage} />}
      </main>
      <ToastContainer toasts={toasts} remove={remove} />
    </>
  );
}
