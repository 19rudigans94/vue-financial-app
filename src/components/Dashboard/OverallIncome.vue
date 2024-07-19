<template>
    <div class="overall-income">
        <div class="p-4 space-y-4">
            <div class="flex flex-col sm:flex-row sm:space-x-4">
                <div class="w-full sm:w-1/2">
                    <label for="dateInc" class="block text-sm font-medium text-gray-700 mb-1">По
                        дате</label>
                    <input type="date" id="dateInc" v-model="date"
                        class="form-input block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 sm:text-sm">
                </div>
                <div class="w-full sm:w-1/2">
                    <label for="incomesType" class="block text-sm font-medium text-gray-700 mb-1">По типу</label>
                    <select id="incomesType" v-model="incomesType"
                        class="form-select block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 sm:text-sm">
                        <option value="all">Все</option>
                        <option v-for="(incomeType, index) in incomeTypes" :key="index" :value="incomeType">{{
                            incomeType }}</option>
                    </select>
                </div>
            </div>
        </div>

        <div v-if="filteredIncomes.length === 0" class="overall-income__empty p-4">
            <p>Ещё нет доходов</p>
        </div>
        <div v-else>
            <ul class="space-y-2 overall-income__list">
                <li v-for="(income, index) in sortedFilteredIncomes" :key="index"
                    class="overall-income__item flex items-center py-2 px-4 rounded">
                    <div class="w-4 h-full bg-green-500 md:mr-2"></div>
                    <span>{{ income.category }} - {{ income.amount }} - {{ income.date }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OverallIncome',
    data() {
        return {
            date: null,
            incomesType: 'all'
        };
    },
    computed: {
        incomes() {
            return this.$store.state.incomes;
        },
        incomeTypes() {
            const incomeTypesArray = this.incomes.map(income => income.category);
            return [...new Set(incomeTypesArray)]; // Используем Set для уникальности значений
        },
        filteredIncomes() {
            if (this.incomesType === 'all') {
                return this.incomes;
            } else {
                return this.incomes.filter(income => income.category === this.incomesType);
            }
        },
        sortedFilteredIncomes() {
            if (this.date) {
                return this.filteredIncomes.filter(income => new Date(income.date).toDateString() === new Date(this.date).toDateString());
            } else {
                return [...this.filteredIncomes].sort((a, b) => new Date(b.date) - new Date(a.date));
            }
        }
    }
};
</script>

<style scoped>
.overall-income {
    margin-top: 20px;
    border: 1px solid #e2e8f0;
    border-radius: 0.375rem;
}

.overall-income__empty {
    color: #666;
}

.overall-income__item {
    position: relative;
    padding-left: 10px;
    border-left: 4px solid #34d399;
    background-color: #fff;
    transition: background-color 0.3s ease;
}

.overall-income__item:nth-child(even) {
    background-color: #f3f4f6;
}

.overall-income__list {
    max-height: 400px;
    overflow-y: auto;
}

@media (min-width: 768px) {
    .overall-income__item {
        padding-left: 20px;
    }
}
</style>
