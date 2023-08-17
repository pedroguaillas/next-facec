"use client";

import { Fragment } from "react";
import { useAppSelector } from "@/hooks/store";

const Dashboard = () => {

    const orders = useAppSelector(state => state.app);

    return (
        <Fragment>
            <div className="bg-slate-100 p-4 flex gap-2">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <h1>PANEL</h1>
            </div>
            {/* Card */}
            <div className="m-4 p-4 bg-white rounded shadow-md">
                <h1>Busqueda</h1>
            </div>
            {/* Card */}
            <div className="m-4 p-4 bg-white rounded drop-shadow-md">
                <table className="table-auto w-full [&>tbody>tr>td]:pt-4">
                    <thead>
                        <tr>
                            <th>Emisión</th>
                            <th>Documento</th>
                            <th>Cliente</th>
                            <th>Estado</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order, index) => (
                            <tr key={`order${index}`}>
                                <td>{order.date}</td>
                                <td>Factura {order.serie}</td>
                                <td>{order.customer}</td>
                                <td>AUTORIZADO</td>
                                <td>$500.00</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}

export default Dashboard;