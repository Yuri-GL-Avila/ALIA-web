
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../services/supabase";

function ProtectedRoute({ children }) {
    const [estado, setEstado] = useState("verificando");

    useEffect(() => {
        let ativo = true;

        async function verificarAcesso() {
            const { data, error } = await supabase.auth.getUser();

            if (error || !data.user) {
                if (ativo) setEstado("negado");
                return;
            }

            const { data: autorizado, error: erroPermissao } =
                await supabase.rpc("is_alia_operator");

            if (ativo) {
                setEstado(
                    !erroPermissao && autorizado === true
                        ? "autorizado"
                        : "negado"
                );
            }
        }

        verificarAcesso();

        return () => {
            ativo = false;
        };
    }, []);

    if (estado === "verificando") {
        return (
            <div className="container" role="status" style={{ padding: 60 }}>
                Verificando acesso à Central ALIA...
            </div>
        );
    }

    if (estado === "negado") {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;
