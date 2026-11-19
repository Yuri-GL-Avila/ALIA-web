

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div>
                    <div className="footer-logo">
                        <strong>ALIA<span>.</span></strong>
                    </div>
                    <p>Tecnologia, acolhimento e proteção.</p>
                </div>

                <div className="footer-info">
                    <p>Projeto acadêmico CitizenTech</p>
                    <p>Protótipo demonstrativo — não é serviço de emergência.</p>
                    <small>© {new Date().getFullYear()} ALIA</small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
