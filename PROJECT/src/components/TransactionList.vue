
<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li v-for="transaction in transactions"
    :key="transaction.id"
    :class="transaction.amount < 0 ? 'minus' : 'plus'">
      {{transaction.item}} <span>{{transaction.amount}}</span>
      <button class="delete-btn">x</button>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      transactions: [
        {id: 1, item: 'Milk', amount: -5},
        {id: 2, item: 'Food', amount: -20},
        {id: 3, item: 'Fruit', amount: -30},
        {id: 4, item: 'skirt', amount: -100},
        {id: 4, item: 'basic salary', amount: 10000},
      ]
    }
  }
}
</script>