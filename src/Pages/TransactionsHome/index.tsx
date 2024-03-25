import CardResume from "../components/CardResume"
import SearchBox from "../components/SearchBox"
import { HomeContainer, PriceHighLight, TransactionsContainer } from "./styles"
import { contextTransactions } from "../../context/TransactionContext";
import { dateFormatter, priceFormatter } from "../../Utils/formatter";
import { useContextSelector } from "use-context-selector";


// interface ReqResponseTypes {
//   id: number;
//   description: string;
//   price: number;
//   type: 'income' | 'outcome';
//   category: string;
//   createdAt: string;
// }

// interface ContextTransactionType {
//   posts: ReqResponseTypes[];
// }



function TransactionsHome() {
  const filterPosts  = useContextSelector(contextTransactions, (context) => {
    return context.filterPosts
  });

 
  return (
    // <contextTransaction.Provider value={ { posts } }>
    <HomeContainer>
      <CardResume />
      {/* onFilterChange={handleFilterChange} */}
        <SearchBox />
        <TransactionsContainer>
            <table>
            <tbody>
              {filterPosts.map((items) => {
                return                 <tr key={items.id}>
                <td width="50%">{items.description}</td>
                <td>
                  <PriceHighLight variant={items.type} >
                    {/* //para colocar sinal de menos do lado do valor de saida poderiamos usar '&&' e vez de '?' */}
                    {items.type === 'outcome' ? "- " : "" }
                    {priceFormatter.format(items.price)}
                  </PriceHighLight>
                </td>
                <td>{items.category}</td>
                <td>{dateFormatter.format(new Date(items.createdAt))}</td>

              </tr>
              })}
            </tbody>
          </table>
        </TransactionsContainer>
    </HomeContainer>
    // </contextTransaction.Provider>
  )
}

export default TransactionsHome




  // const [posts, setPosts] = useState<ReqResponseTypes[]>([]);

  // useEffect(() => {

  //   async function loadTransactions() {
  //    const response = await fetch('http://localhost:3333/transactions')
  //    const data = await response.json();

  //    console.log(data)
  //    setPosts(data)
  //   }

  //   loadTransactions();
  // }, [])

  // function resetFilter() {
  //   setFilterPosts(posts)
  // }