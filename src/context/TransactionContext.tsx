import { ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface ReqResponseTypes {
    id: number;
    description: string;
    price: number;
    // 'income' | 'outcome'
    category: string;
    type: 'income' | 'outcome';
    createdAt: string;
}

interface ContextTransactionType {
    posts: ReqResponseTypes[];
    filterPosts: ReqResponseTypes[];
    setPosts: (state: ReqResponseTypes[]) => void;
    setFilterPosts: (state: ReqResponseTypes[]) => void;
    createTransaction: (state: ReqResponseTypes) => void;

}
interface ContextChildren {
    children: ReactNode;
}


export const contextTransactions = createContext({} as ContextTransactionType);


function TransactionContext({ children }: ContextChildren) {

    const [posts, setPosts] = useState<ReqResponseTypes[]>([]);

    const [filterPosts, setFilterPosts] = useState<ReqResponseTypes[]>([])

   const fetchTransactions = useCallback( async () =>{
    try {
      const response = await api.get('/transactions');
      setPosts(response.data)
      setFilterPosts(response.data)
      
      console.log(response.data)
      console.log(filterPosts)

    } catch (error) {
      console.error("erro ao buscar transactions", error)
    }

  }, [])

    useEffect(() => {
        fetchTransactions();
        
    }, [fetchTransactions])

    // function addTransaction(newTransaction: ReqResponseTypes) {

    //     setPosts([...posts, newTransaction]); // Adiciona nova transação aos posts
    //     setFilterPosts([...filterPosts, newTransaction]); // Atualiza filterPosts também
        
    // } 

    const createTransaction = useCallback( async (data: ReqResponseTypes) => {

        const { description, category, price, type } = data;

        const response = await api.post('transactions', {
            description,
            category,
            price,
            type,
            createdAt: new Date()
            // descricao: data.descricao,
            // categoria: data.categoria,
            // preco: data.preco,
            // type: data.type
          })

          setPosts(posts => [...posts, response.data])
          setFilterPosts(posts => [...posts, response.data])

    }, [])




    return (
        <contextTransactions.Provider value={{ posts, setPosts, filterPosts, setFilterPosts, createTransaction }}>
            {children}
        </contextTransactions.Provider>
    )
}

export default TransactionContext;