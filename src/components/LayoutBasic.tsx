import React from "react";
import logo from '../logo.svg';
import "./LayoutBasic.scss";

interface LayoutBasicProps {
    children: React.ReactNode;
}

export default function LayoutBasic(props: LayoutBasicProps) {
    const { children } = props;
    return (
        <div className="LayoutBasic App">
            <header className="LayoutBasic-header">
                <img src={logo} className="LayoutBasic-logo" alt="logo" />
                <h2 className='saludo'>Bienvenidos a mi primera aplicación de React</h2>
            </header>
            <div className="LayoutBasic-content">
                {children}
            </div>
            <div className="LayoutBasic-footer">
                <p>© 2026 Mi Primera App. Todos los derechos reservados.</p>
            </div>
        </div>
    );
}