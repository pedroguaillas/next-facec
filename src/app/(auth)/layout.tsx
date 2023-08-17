import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}

export default AuthLayout;