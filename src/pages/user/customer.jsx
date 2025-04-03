import { useTheme } from "../../hooks/use-theme";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetCustomersData, DeleteCustomersData } from "../../services/calls";
import { Footer } from "../../components/footer/footer";
import { handleNavigate } from "../../utils/constants";

import { PencilLine, Trash } from "lucide-react";

const CustomerPage = () => {
    const { theme } = useTheme();
    const [inputSearchData, setInputSearchData] = useState({name: '', email: ''})
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true); // Inicialmente, está carregando
    const [error, setError] = useState('');
    const [customerData, setCustomerData] = useState([]);

    const filteredData = customerData.filter((item) =>
        item.name?.toLowerCase().includes(inputSearchData.name.toLowerCase()) &&
        item.email?.toLowerCase().includes(inputSearchData.email.toLowerCase()) || false
    );

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await GetCustomersData();
                if (result) {
                    setCustomerData(result.data);
                }
            } catch (err) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false); // Dados carregados, então setar como false
            }
        };
        loadData();
    }, [navigate]);

    const handleDelete = async(id) => {
        event.preventDefault();

        const conf = window.confirm("Do you want to delete this customer?")

        if(conf) {
            try {
                const result = await DeleteCustomersData(id)
                if (result) {
                    alert("Customer Deleted")
                    setLoading(true)
                    const result = await GetCustomersData();
                    if (result) {
                        setCustomerData(result.data);
                        setLoading(false)
                    }
                }
            } catch (err) {
                alert(err)
    
            }
        }
    }

    return (
        <div className="flex flex-col gap-y-4">
            {loading ? (
                <p className="text">Loading...</p> // Exibindo um indicador de carregamento
            ) : error ? (
                <p className="text">{error}</p>
            ) : (
                <>
                    <h1 className="title">Customers</h1>


                    <div className="card">
                        <div className="card-header">
                            <p className="card-title">All Customers</p>
                        </div>
                        <div className="card-body p-0">
                            <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                                <table className="table h-auto">
                                    <thead className="table-header">
                                        <tr className="table-row2">
                                            <th className="table-head">id</th>
                                            <th className="table-head">Name</th>
                                            <th className="table-head">Email</th>
                                            <th className="table-head">Actions</th>
                                        </tr>
                                        <tr className="table-row">
                                            <th className="table-head">
                                            </th>
                                            <th className="table-head">
                                            <div className="inputTable">
                                                    <input
                                                        type="text"
                                                        name="id"
                                                        id="id"
                                                        value={inputSearchData.name}
                                                        onChange={e => setInputSearchData({...inputSearchData, name: e.target.value})}
                                                        placeholder="Name..."
                                                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50 py-2"
                                                    />
                                                </div>
                                            </th>
                                            <th className="table-head">
                                            <div className="inputTable">
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        id="email"
                                                        value={inputSearchData.email}
                                                        onChange={e => setInputSearchData({...inputSearchData, email: e.target.value})}
                                                        placeholder="Email..."
                                                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50 py-2"
                                                    />
                                                </div>
                                            </th>
                                            <th className="table-head"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-body">
                                        {filteredData.length > 0 ? filteredData.map((customer, idx) => (
                                            <tr
                                                key={idx}
                                                className="table-row max-h-9"
                                            >
                                                <td className="table-cell ">{customer.id}</td>
                                                <td className="table-cell">{customer.name}</td>
                                                <td className="table-cell">{customer.email}</td>

                                                <td className="table-cell">
                                                    <div className="flex items-center gap-x-4">
                                                        <button className="text-blue-500 dark:text-blue-600 btn-ghost"
                                                                onClick={() => {
                                                                    handleNavigate(customer.id, customer, navigate)
                                                                }}
                                                        >
                                                            <PencilLine size={20} />
                                                        </button>
                                                        <button className="text-red-500 btn-ghost"
                                                            onClick={ e => {
                                                                handleDelete(customer.id)
                                                            }}
                                                        >
                                                            <Trash size={20} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                        :
                                        <tr className="">
                                            <td colSpan={4} className="py-5 text-center text">Nenhum usuario encontrado</td>
                                        </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Footer />

                </>
            )}

        </div>
    );
}

export default CustomerPage