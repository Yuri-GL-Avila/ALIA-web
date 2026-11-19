
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";
import {
    LayoutDashboard,
    BellRing,
    Clock3,
    CheckCircle2,
    ClipboardList,
    ArrowLeft,
    ShieldCheck,
    Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/central.css";



const statusLabels = {
    sent: "Enviado",
    waiting: "Pendente",
    accepted: "Aceito",
    in_progress: "Em acompanhamento",
    finished: "Concluída",
};

const statusClasses = {
    sent: "status-pending",
    waiting: "status-pending",
    accepted: "status-progress",
    in_progress: "status-progress",
    finished: "status-done",
};

function formatarData(data) {
    return new Date(data).toLocaleString("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
    });
}



function Central() {
    const [ocorrencias, setOcorrencias] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");
    const navigate = useNavigate();
    const [filtro, setFiltro] = useState("Todas");
    const [busca, setBusca] = useState("");
    const [mensagem, setMensagem] = useState("");

    const total = ocorrencias.length;

    const pendentes = ocorrencias.filter(
        (item) => ["sent", "waiting"].includes(item.status)
    ).length;

    const acompanhamento = ocorrencias.filter(
        (item) => ["accepted", "in_progress"].includes(item.status)
    ).length;

    const concluidas = ocorrencias.filter(
        (item) => item.status === "finished"
    ).length;


    const atualizarStatus = async (id, novoStatus) => {
        setMensagem("");
        setErro("");

        const { data, error } = await supabase
            .from("occurrences")
            .update({ status: novoStatus })
            .eq("id", id)
            .select("id, status")
            .single();

        if (error) {
            console.error(error);
            setErro("Não foi possível atualizar a ocorrência.");
            return;
        }

        if (!data) {
            setErro("Ocorrência não encontrada ou acesso negado.");
            return;
        }

        setMensagem("Status atualizado com sucesso.");
        await carregarOcorrencias();
    };

    const sair = async () => {
        await supabase.auth.signOut();
        navigate("/login", { replace: true });
    };



    const carregarOcorrencias = async () => {
        setCarregando(true);
        setErro("");

        const { data, error } = await supabase
            .from("occurrences")
            .select("id, status, source, created_at, updated_at")
            .order("created_at", { ascending: false });

        if (error) {
            console.error(error);
            setErro("Não foi possível carregar as ocorrências.");
        } else {
            setOcorrencias(data ?? []);
        }

        setCarregando(false);
    };

    useEffect(() => {
        carregarOcorrencias();
    }, []);


    const filtradas = ocorrencias.filter((item) => {
        const correspondeFiltro =
            filtro === "Todas" ||
            (filtro === "Pendente" &&
                ["sent", "waiting"].includes(item.status)) ||
            (filtro === "Em acompanhamento" &&
                ["accepted", "in_progress"].includes(item.status)) ||
            (filtro === "Concluída" && item.status === "finished");

        const correspondeBusca = item.id
            .toLowerCase()
            .includes(busca.toLowerCase());

        return correspondeFiltro && correspondeBusca;
    });

    return (
        <div className="central-page">
            <div className="container">
                <div className="central-top">
                    <Link to="/" className="central-back">
                        <ArrowLeft size={18} />
                        Voltar ao início
                    </Link>

                    <span className="central-demo-label">
                        <ShieldCheck size={16} />
                        Ambiente demonstrativo
                    </span>
                </div>

                <div className="central-heading">
                    <div>
                        <span className="eyebrow">PAINEL DE GESTÃO</span>
                        <h1>Central ALIA</h1>
                        <p>
                            Acompanhamento de ocorrências e alertas registrados
                            na plataforma.
                        </p>
                    </div>
                </div>

                <div className="central-stats">
                    <div className="stat-card">
                        <div className="stat-icon">
                            <ClipboardList size={25} />
                        </div>
                        <span>Total de ocorrências</span>
                        <strong>{total}</strong>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon">
                            <BellRing size={25} />
                        </div>
                        <span>Pendentes</span>
                        <strong>{pendentes}</strong>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon">
                            <Clock3 size={25} />
                        </div>
                        <span>Em acompanhamento</span>
                        <strong>{acompanhamento}</strong>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon">
                            <CheckCircle2 size={25} />
                        </div>
                        <span>Concluídas</span>
                        <strong>{concluidas}</strong>
                    </div>
                </div>

                <section className="occurrences-panel">
                    <div className="panel-heading">
                        <div>
                            <h2>
                                <LayoutDashboard size={23} />
                                Ocorrências registradas
                            </h2>
                            <p>Consulte e atualize os registros demonstrativos.</p>
                        </div>
                    </div>

                    <div className="panel-filters">
                        <div className="search-field">
                            <Search size={19} aria-hidden="true" />
                            <input
                                type="search"
                                aria-label="Buscar ocorrência pelo identificador"
                                placeholder="Buscar pelo identificador..."
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                            />
                        </div>

                        <select
                            aria-label="Filtrar por status"
                            value={filtro}
                            onChange={(e) => setFiltro(e.target.value)}
                        >
                            <option>Todas</option>
                            <option>Pendente</option>
                            <option>Em acompanhamento</option>
                            <option>Concluída</option>
                        </select>
                    </div>

                    <p className="status-feedback" role="status" aria-live="polite">
                        {mensagem}
                    </p>

                    <div className="occurrences-list">
                        {filtradas.length === 0 ? (
                            <div className="empty-state">
                                Nenhuma ocorrência encontrada.
                            </div>
                        ) : (
                            filtradas.map((item) => (
                                <article className="occurrence-card" key={item.id}>
                                    <div className="occurrence-main">
                                        <div className="occurrence-title">
                                            <strong>
                                                ALIA-{item.id.slice(0, 8).toUpperCase()}
                                            </strong>

                                            <span
                                                className={`status-badge ${statusClasses[item.status]}`}
                                            >
                                                {statusLabels[item.status]}
                                            </span>
                                        </div>

                                        <p>{formatarData(item.created_at)}</p>

                                        <small>
                                            Origem:{" "}
                                            {item.source === "mobile"
                                                ? "Aplicativo mobile"
                                                : "Web"}
                                        </small>
                                    </div>

                                    <div className="occurrence-actions">
                                        {["sent", "waiting"].includes(item.status) && (
                                            <button
                                                type="button"
                                                className="action-primary"
                                                onClick={() =>
                                                    atualizarStatus(item.id, "accepted")
                                                }
                                            >
                                                Aceitar ocorrência
                                            </button>
                                        )}

                                        {item.status === "accepted" && (
                                            <button
                                                type="button"
                                                className="action-primary"
                                                onClick={() =>
                                                    atualizarStatus(item.id, "in_progress")
                                                }
                                            >
                                                Iniciar acompanhamento
                                            </button>
                                        )}

                                        {item.status === "in_progress" && (
                                            <button
                                                type="button"
                                                className="action-secondary"
                                                onClick={() =>
                                                    atualizarStatus(item.id, "finished")
                                                }
                                            >
                                                Concluir ocorrência
                                            </button>
                                        )}

                                        {item.status === "finished" && (
                                            <span className="finished-label">
                                                <CheckCircle2 size={18} />
                                                Finalizada
                                            </span>
                                        )}
                                    </div>
                                </article>
                            ))

                        )}
                    </div>
                </section>

                <p className="central-disclaimer">
                    Os registros exibidos nesta etapa são fictícios. Esta
                    plataforma não realiza atendimento real de emergências.
                </p>
            </div>
        </div>
    );
}

export default Central;
