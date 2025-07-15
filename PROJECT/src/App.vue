<script>
import {defineComponent} from "vue";
import Header from "@/components/Header.vue";
import Balance from "@/components/Balance.vue";
import IncomeExpense from "@/components/IncomeExpense.vue";
import TransactionList from "@/components/TransactionList.vue"
import TransactionForm from "@/components/TransactionForm.vue";

export default defineComponent({
  components: {TransactionForm, TransactionList, IncomeExpense, Balance, Header}
})

</script>
<template>
  <Header/>
  <div class="container">
    <Balance/>
    <IncomeExpense/>
    <TransactionList/>
    <TransactionForm/>
  </div>
</template>