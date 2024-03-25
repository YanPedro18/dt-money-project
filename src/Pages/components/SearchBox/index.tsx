import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchBoxContainer } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod'
import { contextTransactions } from "../../../context/TransactionContext";
import { useContextSelector } from "use-context-selector";


interface typeSearchFilter {
  search: string;
}

  
const searchTransactionValidSchema = zod.object({

  search: zod.string().min(0, "Infome a busca!")
  
})


// /baixamos tambem o zod para validação, e para fazer o schema de validação


function SearchBox() {

  const { posts, setFilterPosts } = useContextSelector(contextTransactions, (context) => {
    return {
      posts: context.posts,
      setFilterPosts: context.setFilterPosts
    }
  })

  const {
    register,
    handleSubmit,
    reset,
  } = useForm({

    resolver: zodResolver(searchTransactionValidSchema),

    defaultValues: {
      search: ''
    }
  });

  // const searchControlled = watch('search')

  //posso transforma essa função em asincrona, com async/await e podemos simular aqui, uma requisição para uma API
  //fazer algo demorar ai dentro

  async function searchTransitionSubmit(data: typeSearchFilter) {
    //criei uma nova promisse, e vamos resolver ela depois de 2s, vamos no botão no styled-comp agr
   
    const inputValue = data.search.trim().toLowerCase();
    
    if(!inputValue) {
      setFilterPosts(posts)
    } else {
      const newFilter = posts
      .filter(item => item.description.toLowerCase().includes(inputValue) || item.category.toLowerCase().includes(inputValue) );
  
      setFilterPosts(newFilter);
    }
    reset();
  }


  return (
    <SearchBoxContainer onSubmit={handleSubmit(searchTransitionSubmit)}>

        <input
          type="text"
          id="search"
          placeholder="Busque por transações"
          {...register('search')}
          />

        <button type="submit"><MagnifyingGlass size={24} /> Buscar</button>

    </SearchBoxContainer>
  )
}

export default SearchBox