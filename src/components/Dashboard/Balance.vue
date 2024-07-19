<template>
    <div class="balance">
        <h2 class="balance__title">Баланс:</h2>
        <p class="balance__incomes">Общие доходы: {{ totalIncomes }}</p>
        <p class="balance__expenses">Общие расходы: {{ totalExpenses }}</p>
        <p class="balance__net-balance">Общий баланс: {{ netBalance }}</p>
    </div>
</template>

<script>
export default {
    name: 'Balance',
    computed: {
        totalExpenses() {
            return this.$store.getters.totalExpenses;
        },
        totalIncomes() {
            return this.$store.getters.totalIncomes;
        },
        netBalance() {
            return this.totalIncomes - this.totalExpenses;
        }
    }
}
</script>