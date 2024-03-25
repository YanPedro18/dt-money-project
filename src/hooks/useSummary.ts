import { useContextSelector } from "use-context-selector";
import { contextTransactions } from "../context/TransactionContext";
import { useMemo } from "react";

export function useSummary() {
    const posts = useContextSelector(contextTransactions, context => {
        return context.posts
    });


    const transactionEntrada = useMemo(() => {
        return posts
        .filter(items => items.type === "income")
        .reduce((acumulador, items) => acumulador + items.price, 0); 

    }, [posts])

    const transactionSaida = useMemo(() => {
        return  posts
        .filter(items => items.type === "outcome")
        .reduce((acumulador, items) => acumulador + items.price, 0); 
    }, [posts])
  

    const transactionTotal = useMemo( () => {
        return transactionEntrada - transactionSaida;       
    }, [posts])

    return { transactionEntrada, transactionSaida, transactionTotal};
}