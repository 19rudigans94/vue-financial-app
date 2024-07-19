<template>
    <div class="overall-expenses">
        <div class="p-4 space-y-4">
            <div class="flex flex-col sm:flex-row sm:space-x-4">
                <div class="w-full sm:w-1/2">
                    <label for="dateExp" class="block text-sm font-medium text-gray-700 mb-1">По дате</label>
                    <input id="dateExp" type="date" v-model="date"
                        class="form-input block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 sm:text-sm">
                </div>
                <div class="w-full sm:w-1/2">
                    <label for="expensesType" class="block text-sm font-medium text-gray-700 mb-1">По типу</label>
                    <select id="expensesType" v-model="expensesType"
                        class="form-select block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 sm:text-sm">
                        <option value="all">Все</option>
                        <option v-for="(expenseType, index) in expenseTypes" :key="index" :value="expenseType">{{
                            expenseType }}</option>
                    </select>
                </div>
            </div>

            <div v-if="filteredExpenses.length === 0" class="overall-expenses__empty p-4">
                <p>Ещё нет расходов</p>
            </div>
            <div v-else>
                <ul class="space-y-2 overall-expenses__list">
                    <li  v-for="(expense, index) in sortedFilteredExpenses" :key="index"
                        class="overall-expenses__item flex items-center py-2 px-4 rounded">
                        <div class="w-4 h-full bg-red-500 md:mr-2"></div>
                        <span>{{ expense.category }} - {{ expense.amount }} - {{ expense.date }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OverallExpense',
    data() {
        return {
            date: null,
            expensesType: 'all'
        };
    },
    computed: {
        expenses() {
            return this.$store.state.expenses;
        },
        expenseTypes() {
            const expenseTypesArray = this.expenses.map(expense => expense.category);
            return [...new Set(expenseTypesArray)]; // Используем Set для уникальности значений
        },
        filteredExpenses() {
            if (this.expensesType === 'all') {
                return this.expenses;
            } else {
                return this.expenses.filter(expense => expense.category === this.expensesType);
            }
        },
        sortedFilteredExpenses() {
            if (this.date) {
                return this.filteredExpenses.filter(expense => new Date(expense.date).toDateString() === new Date(this.date).toDateString());
            } else {
                return [...this.filteredExpenses].sort((a, b) => new Date(b.date) - new Date(a.date));
            }
        }
    }
};
</script>

<style scoped>
.overall-expenses {
    margin-top: 20px;
    border: 1px solid #e2e8f0;
    border-radius: 0.375rem;
}

.overall-expenses__empty {
    color: #666;
}

.overall-expenses__item {
    position: relative;
    padding-left: 10px;
    border-left: 4px solid #4a90e2;
    background-color: #fff;
    transition: background-color 0.3s ease;
}

.overall-expenses__item:nth-child(even) {
    background-color: #f3f4f6;
}

.overall-expenses__list {
    max-height: 400px;
    overflow-y: auto;
}

@media (min-width: 768px) {
    .overall-expenses__item {
        padding-left: 20px;
    }
}
</style>
