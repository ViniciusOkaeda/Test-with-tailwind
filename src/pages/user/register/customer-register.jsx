import { useTheme } from "../../../hooks/use-theme";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RegisterCustomersData } from "../../../services/calls";
import { Footer } from "../../../components/footer/footer";

const CustomerRegisterPage = () => {
    const { theme } = useTheme();
    const [inputNewData, setInputNewData] = useState({ name: '', email: '' })
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false); // Inicialmente, está carregando

    const handleSubmit = async() => {
        event.preventDefault();

        try {
            setLoading(true)
            const result = await RegisterCustomersData(inputNewData)
            if (result) {
                setLoading(false)
                alert("Usuário Criado")
                navigate("../customers")
            }
        } catch (err) {
            alert(err)
            setLoading(false)

        }
    }



    return (
        <div className="flex flex-col gap-y-4">
            {loading ? (
                <p className="text">Loading...</p> // Exibindo um indicador de carregamento
            ) : (
                <>
                    <h1 className="title">New Customer</h1>


                    <div className="card">
                        <div className="card-body p-0">
                            <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                                <form onSubmit={handleSubmit}>
                                    <div className="my-8">
                                        <p className="my-2 text">Customer Name</p>
                                        <div className="inputForm">
                                            <input
                                                type="text"
                                                name="name"
                                                value={inputNewData.name}
                                                onChange={e => setInputNewData({...inputNewData, name: e.target.value})}
                                                id="name"
                                                placeholder="Name..."
                                                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50 py-2"
                                            />
                                        </div>

                                    </div>

                                    <div className="my-8">
                                        <p className="my-2 text">Customer Email</p>
                                        <div className="inputForm">
                                            <input
                                                type="text"
                                                name="email"
                                                value={inputNewData.email}
                                                onChange={e => setInputNewData({...inputNewData, email: e.target.value})}
                                                id="email"
                                                placeholder="Email..."
                                                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50 py-2"
                                            />
                                        </div>
                                    </div>

                                    <div className="my-5">
                                        <button type="submit" className="bg-blue-600 px-5 py-2 w-full rounded-lg text-white btn-ghost">Save</button>
                                    </div>

                                </form>
                                


                            </div>
                        </div>
                    </div>
                    <Footer />

                </>
            )}

        </div>
    );
}

export default CustomerRegisterPage