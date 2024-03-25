import { useState } from "react";
import imgLogo from "../../assets/logo.png";
import { HeaderContainer, TransactionButton, FormModal, TextModal, OptionTransaction, CloseModal, ButtonCadastrar, ButtonTransaction } from "./styles";
import Modal from 'react-modal';
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod'
import { contextTransactions } from "../../context/TransactionContext";
import { useContextSelector } from "use-context-selector";



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    border: 'none',
    background: "#202024",
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.853)', // Define a cor do overlay aqui
  }
};

Modal.setAppElement('#root');

interface formTypeTransaction {
  id: number;
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
  createdAt: string;
 
}

function Header() {
  let subtitle: any;

  const [modalIsOpen, setIsOpen] = useState(false);




  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#ffff';
  }

  function closeModal() {
    setIsOpen(false);
  }

  //nosso schema de validação de inputs
  const formValidTransactionSchema = zod.object({
    description: zod.string().min(1, "Informe a Descrição!"),
    price: zod.number().min(2, "Informe o preço!"),
    category: zod.string().min(1, "Informe a Categoria!"),
    type: zod.enum(['income', 'outcome'])
  })


  const { register, handleSubmit, watch, reset, control } = useForm<formTypeTransaction>({

    resolver: zodResolver(formValidTransactionSchema),

    //declarando valores iniciais dos inputs
    defaultValues: {
      description: '',
      price: 0,
      category: '',
      type: 'income'

    }
  });

  const  createTransaction = useContextSelector(contextTransactions, (context) => {
    return context.createTransaction
  })

  
  const desc = watch('description');


  async function submitTransition(data: formTypeTransaction) {



      createTransaction(data);
      
        
    // const newTransition = {
    //   id: Math.floor(Math.random() * 1000),
    //   description: data.descricao,
    //   price: data.preco,
    //   category: data.categoria,
    //   type: data.type,
    //   createdAt: data.createdAt || new Date().toString()
    // }

    // addTransaction(newTransition)
    
    reset();

    alert('Cadastrado!')
  }

  return (
    <HeaderContainer>
      <img src={imgLogo} alt="" />
      <nav>
        <TransactionButton id="main" onClick={openModal}>Nova transação</TransactionButton>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <CloseModal onClick={closeModal}> <X size={26} /></CloseModal>
          <TextModal ref={(_subtitle) => (subtitle = _subtitle)}>Nova Transação</TextModal>
          
          <FormModal onSubmit={handleSubmit(submitTransition)}>
            <input type="text" required placeholder="Descrição" {...register('description')} />
            <input type="text" required placeholder="Preço" {...register('price', { valueAsNumber: true })} />
            <input type="text" required placeholder="Categoria" {...register('category')} />

          {/* componente de controller, para controlar em tempo real o input type, para pegar o valor atual do input. */}
            <Controller 
            control={control}
            name="type"
            render={({ field }) => {
              // console.log(field)
              return(
                <OptionTransaction onValueChange={field.onChange} value={field.value}>

                <ButtonTransaction variant="income" id="r1" value="income">
                  <ArrowCircleUp size={30} />
                  Entrada
                </ButtonTransaction>
  
                <ButtonTransaction variant="outcome" id="r2" value="outcome">
                  <ArrowCircleDown size={30} />
                  Saída
                </ButtonTransaction>
              </OptionTransaction>
              )
            }}
            />

            <ButtonCadastrar type="submit" disabled={!desc}>Cadastrar</ButtonCadastrar>
          </FormModal>
        </Modal>
      </nav>
    </HeaderContainer>
  )
}

export default Header;
