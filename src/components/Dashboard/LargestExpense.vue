<template>
    <div class="largest-expense">
        <h2 class="largest-expense__title">Самый большой расход</h2>
        <div v-if="expenses.length === 0" class="largest-expense__empty">
            <p>Ещё нет расходов</p>
        </div>
        <div v-else class="largest-expense__data">
            <p class="largest-expense__category">Категория: {{ largestExpense.category }}</p>
            <p class="largest-expense__amount">Сумма: {{ largestExpense.amount }}</p>
            <p class="largest-expense__date">Дата: {{ largestExpense.date }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LargestExpense',
    computed: {
        expenses() {
            return this.$store.state.expenses;
        },
        largestExpense() {
            return this.expenses.reduce((prev, current) => (Number(prev.amount) > Number(current.amount)) ? prev : current, {});
        }
    }
}
</script>