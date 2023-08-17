'use client'
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import React, { useState, useRef, useLayoutEffect } from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {

    const [menu, setMenu] = useState(false);
    const [width, setWidth] = useState<null | Number>(null);

    const elementRef = useRef<HTMLBodyElement>(null);

    useLayoutEffect(() => {
        if (elementRef.current) {
            setWidth(elementRef.current.offsetWidth);
            if (elementRef.current.offsetWidth > 640) {
                setMenu(elementRef.current.offsetWidth > 640);
            }
        }
    }, []);

    return (
        <html lang="es">
            <body ref={elementRef} className="bg-slate-200">
                <Sidebar menu={menu} />
                <Header menu={menu} setMenu={setMenu} />
                <main className={`ease-out duration-200 ${menu ? 'ml-[16em] w-[100%-16em]' : 'ml-0 w-full'}`}>
                    {children}
                </main>
            </body>
        </html>
    );
}

export default AdminLayout;