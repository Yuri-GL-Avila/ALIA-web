
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, LogIn } from "lucide-react";
import { supabase } from "../services/supabase";
import "../styles/login.css";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);

    const fazerLogin = async (event) => {
        event.preventDefault();
        setErro("");
        setCarregando(true);

        try {
            const { data, error } =
                await supabase.auth.signInWithPassword({
                    email,
                    password: senha,
                });

            if (error) throw error;

            const { data: autorizado, error: erroPermissao } =
                await supabase.rpc("is_alia_operator");

            if (erroPermissao || autorizado !== true) {
                await supabase.auth.signOut();
                setErro("Esta conta não possui acesso à Central ALIA.");
                return;
            }

            if (!data.session) {
                throw new Error("Não foi possível iniciar a sessão.");
            }

            navigate("/central", { replace: true });
        } catch (error) {
            setErro(
                error.message === "Invalid login credentials"
                    ? "E-mail ou senha incorretos."
                    : "Não foi possível entrar. Verifique suas credenciais."
            );
        } finally {
            setCarregando(false);
        }
    };

    return (
        <section className="login-page">
            <div className="login-card">
                <div className="login-icon">
                    <LockKeyhole size={30} aria-hidden="true" />
                </div>

                <span className="eyebrow">ACESSO RESTRITO</span>

                <h1>Central ALIA</h1>

                <p>
                    Entre com sua conta autorizada para acessar
                    o painel de acompanhamento demonstrativo.
                </p>

                <form onSubmit={fazerLogin}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        autoComplete="username"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="senha">Senha</label>
                    <input
                        id="senha"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />

                    {erro && (
                        <p className="login-error" role="alert">
                            {erro}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="login-button"
                        disabled={carregando}
                    >
                        <LogIn size={19} aria-hidden="true" />
                        {carregando ? "Entrando..." : "Entrar na Central"}
                    </button>
                </form>

                <small>
                    Ambiente acadêmico de demonstração.
                    Não realiza atendimento real de emergências.
                </small>
            </div>
        </section>
    );
}

export default Login;
