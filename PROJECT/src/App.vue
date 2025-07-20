<script setup>
import Header from "@/components/Header.vue";
import Balance from "@/components/Balance.vue";
import IncomeExpense from "@/components/IncomeExpense.vue";
import TransactionList from "@/components/TransactionList.vue"
import TransactionForm from "@/components/TransactionForm.vue";
import { ref, computed } from "vue";
const transactions = ref([ //want this to reactive
  {id: 1, item: 'Milk', amount: -5},
  {id: 2, item: 'Food', amount: -20},
  {id: 3, item: 'Fruit', amount: -30},
  {id: 4, item: 'skirt', amount: -100},
  {id: 4, item: 'basic salary', amount: 1000},
])
//just log, for learning
console.log(transactions);
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
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
}

</script>
<template>
  <Header/>
  <div class="container">
    <Balance :total/>
    <IncomeExpense :total-income="+totalIncome" :total-expense="+totalExpense"/>
    <TransactionList :transactions="transactions"/>
    <TransactionForm @transactions-submitted="handleSubmitTransaction"/>
  </div>
</template>