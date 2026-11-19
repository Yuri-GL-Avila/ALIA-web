
import {
    ArrowRight,
    ShieldCheck,
    HeartHandshake,
    Smartphone,
    Radio,
    Monitor,
    BookOpen,
    PhoneCall,
    LockKeyhole,
    BellRing,
    ClipboardCheck
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <section className="hero">
                <div className="container hero-content">
                    <div className="hero-text">
                        <span className="eyebrow">TECNOLOGIA E PROTEÇÃO</span>

                        <h1>
                            Sua segurança importa.
                            <span> Sua voz também.</span>
                        </h1>

                        <p>
                            O ALIA é uma iniciativa que une tecnologia,
                            informação e acolhimento para contribuir com
                            a segurança e a autonomia das mulheres.
                        </p>

                        <div className="hero-actions">
                            <a href="#como-funciona" className="btn btn-primary">
                                Conheça o ALIA <ArrowRight size={19} />
                            </a>

                            <a href="#rede-apoio" className="btn btn-outline">
                                Encontre apoio
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual" aria-hidden="true">
                        <div className="hero-symbol">
                            <ShieldCheck size={100} strokeWidth={1.3} />
                        </div>
                        <div className="hero-visual-text">
                            <strong>ALIA</strong>
                            <span>Segurança que conecta.</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="central-section" id="central">
                <div className="container central-layout">
                    <div className="central-text">
                        <span className="eyebrow eyebrow-light">
                            MONITORAMENTO E ACOMPANHAMENTO
                        </span>

                        <h2>Central ALIA</h2>

                        <p>
                            Uma plataforma integrada para acompanhar
                            alertas demonstrativos, organizar ocorrências
                            e visualizar atualizações em um só lugar.
                        </p>

                        <p>
                            A central conecta as informações do aplicativo
                            mobile a um ambiente web de acompanhamento.
                        </p>

                        <Link to="/central" className="btn btn-light">
                        Acessar Central ALIA <ArrowRight size={20} />
                        </Link>

                        <small>
                            Ambiente acadêmico demonstrativo. Não substitui
                            serviços oficiais de emergência.
                        </small>
                    </div>

                    <div className="central-preview">
                        <div className="preview-header">
                            <span className="preview-title">
                                <Monitor size={20} />
                                Painel de acompanhamento
                            </span>
                            <span className="demo-badge">DEMO</span>
                        </div>

                        <div className="preview-cards">
                            <div className="preview-card">
                                <BellRing size={28} />
                                <strong>Alertas</strong>
                                <span>Registro de ocorrências</span>
                            </div>

                            <div className="preview-card">
                                <ClipboardCheck size={28} />
                                <strong>Acompanhamento</strong>
                                <span>Atualização de status</span>
                            </div>
                        </div>

                        <div className="preview-footer">
                            <LockKeyhole size={17} />
                            <span>Área de acesso restrito</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="info-section" id="como-funciona">
                <div className="container">
                    <div className="section-heading">
                        <span className="eyebrow">NOSSA SOLUÇÃO</span>
                        <h2>Como funciona o ALIA?</h2>
                        <p>
                            Uma proposta que conecta proteção individual,
                            tecnologia e acompanhamento.
                        </p>
                    </div>

                    <div className="steps-grid">
                        <article className="info-card">
                            <div className="card-icon"><Radio size={30} /></div>
                            <span className="step-number">01</span>
                            <h3>Dispositivo discreto</h3>
                            <p>
                                Um dispositivo vestível proposto para permitir
                                o acionamento discreto de um alerta.
                            </p>
                        </article>

                        <article className="info-card">
                            <div className="card-icon"><Smartphone size={30} /></div>
                            <span className="step-number">02</span>
                            <h3>Aplicativo mobile</h3>
                            <p>
                                O aplicativo permite registrar alertas,
                                consultar o histórico e gerenciar contatos.
                            </p>
                        </article>

                        <article className="info-card">
                            <div className="card-icon"><Monitor size={30} /></div>
                            <span className="step-number">03</span>
                            <h3>Central integrada</h3>
                            <p>
                                A plataforma web permite acompanhar
                                ocorrências demonstrativas e seus status.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="awareness-section" id="conscientizacao">
                <div className="container awareness-layout">
                    <div className="awareness-icon" aria-hidden="true">
                        <BookOpen size={90} strokeWidth={1.2} />
                    </div>

                    <div>
                        <span className="eyebrow">INFORMAÇÃO E PREVENÇÃO</span>
                        <h2>Conhecimento também é proteção.</h2>
                        <p>
                            O acesso à informação é fundamental para
                            reconhecer situações de violência, conhecer
                            direitos e encontrar caminhos para buscar ajuda.
                        </p>
                        <a href="#rede-apoio" className="text-link">
                            Conheça os canais de apoio <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

            <section className="support-section" id="rede-apoio">
                <div className="container support-layout">
                    <div>
                        <span className="eyebrow">VOCÊ NÃO ESTÁ SOZINHA</span>
                        <h2>Uma rede de apoio faz a diferença.</h2>
                        <p>
                            Conheça os canais oficiais de orientação,
                            denúncia e atendimento disponíveis no Brasil.
                        </p>
                    </div>

                    <div className="support-cards">
                        <div className="support-card">
                            <PhoneCall size={26} />
                            <div>
                                <strong>Ligue 180</strong>
                                <span>Central de Atendimento à Mulher</span>
                            </div>
                        </div>

                        <div className="support-card">
                            <ShieldCheck size={26} />
                            <div>
                                <strong>Ligue 190</strong>
                                <span>Polícia Militar — emergência</span>
                            </div>
                        </div>

                        <div className="support-card">
                            <HeartHandshake size={26} />
                            <div>
                                <strong>Busque acolhimento</strong>
                                <span>Procure serviços especializados de apoio</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
