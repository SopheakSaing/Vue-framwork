<script setup>
import Header from "@/components/Header.vue";
import Balance from "@/components/Balance.vue";
import IncomeExpense from "@/components/IncomeExpense.vue";
import TransactionList from "@/components/TransactionList.vue"
import TransactionForm from "@/components/TransactionForm.vue";
import {ref} from "vue";
const transactions = ref([ //want this to reactive
  {id: 1, item: 'Milk', amount: -5},
  {id: 2, item: 'Food', amount: -20},
  {id: 3, item: 'Fruit', amount: -30},
  {id: 4, item: 'skirt', amount: -100},
  {id: 4, item: 'basic salary', amount: 10000},
])

</script>
<template>
  <Header/>
  <div class="container">
    <Balance/>
    <IncomeExpense/>
    <TransactionList :transactions="transactions"/>
    <TransactionForm/>
  </div>
</template>