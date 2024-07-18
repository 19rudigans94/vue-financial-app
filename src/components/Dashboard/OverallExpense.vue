<template>
    <div class="overall-expenses">
        <h2 class="overall-expenses__title">Общие расходы</h2>
        <div v-if="expenses.length === 0" class="overall-expenses__empty">
            <p>Ещё нет расходов</p>
        </div>
        <div v-else>
            <ul class="space-y-2 overall-expenses__list">
                <li v-for="(expense, index) in expenses" :key="index"
                    class="overall-expenses__item flex items-center py-2 rounded">
                    <div class="w-4 h-full bg-red-500 mr-2"></div>
                    <span>{{ expense.category }} - {{ expense.amount }} - {{ expense.date }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OverallExpense',
    computed: {
        expenses() {
            return this.$store.state.expenses;
        }
    }
}
</script>

<style scoped>
.overall-expenses {
    margin-top: 20px;
}

.overall-expenses__title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.overall-expenses__empty {
    color: #666;
}

.overall-expenses__item {
    position: relative;
    padding-left: 10px;
    border-left: 4px solid #4a90e2;
}

.overall-expenses__item:nth-child(even) {
    background-color: #f3f4f6;
}

.overall-expenses__list {
    max-height: 400px;
    /* задаем максимальную высоту списка */
    overflow-y: auto;
    /* добавляем вертикальную прокрутку при необходимости */
}
</style>
