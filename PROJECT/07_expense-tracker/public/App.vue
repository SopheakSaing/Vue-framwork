<script setup>
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpense from "./components/IncomeExpense.vue";
import TransactionList from "./components/TransactionList.vue"
import TransactionForm from "./components/TransactionForm.vue";
import {useToast} from "vue-toastification";
const toast = useToast();
import { ref, computed, onMounted } from "vue";
const transactions = ref([ //want this to reactive
  // {id: 1, item: 'Milk', amount: -5},
  // {id: 2, item: 'Food', amount: -20},
  // {id: 3, item: 'Fruit', amount: -30},
  // {id: 4, item: 'skirt', amount: -100},
  // {id: 4, item: 'basic salary', amount: 1000},
])
//just log, for learning
console.log(transactions);
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
})

onMounted(() => {
  const saveTransaction = JSON.parse(localStorage.getItem("transactions"));

  if(saveTransaction) {
    transactions.value = saveTransaction;
  }
})



//get total income
const totalIncome = computed(() => {
  return transactions.value
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0).toFixed(2);//to get 2 dec value
})
// get total expense
const totalExpense = computed(() => {
  return transactions.value
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => {
        return acc + transaction.amount;
      }, 0).toFixed(2);//to get 2 dec value
})

const handleSubmitTransaction = (transaction) => {
  console.log('transactionData', transaction);
  transactions.value.push({
    id: generateUniqueId,
    item: transaction.text,
    amount: transaction.amount,
  })
  saveTransactionToLocalStorage()
  console.log(generateUniqueId)
}

const generateUniqueId = () => {
  return Math.floor(Math.random() * 100000)
}

const handleDeleteTransaction = (id) => {
 transactions.value = transactions.value.filter((transaction) => transaction.id !== id); //each tran filter out transact id that not equal to id that parse int
 saveTransactionToLocalStorage()
  toast.success("transaction removed!");
}

//save to local storage
const  saveTransactionToLocalStorage = (transaction) => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
}

</script>
<template>
  <Header/>
  <div class="container">
    <Balance :total/>
    <IncomeExpense :total-income="+totalIncome" :total-expense="+totalExpense"/>
    <TransactionList :transactions="transactions" @transactionDeleted="handleDeleteTransaction"/>
    <TransactionForm @transactions-submitted="handleSubmitTransaction"/>
  </div>
</template>