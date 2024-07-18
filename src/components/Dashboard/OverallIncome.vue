<template>
    <div class="overall-income">
        <h2 class="overall-income__title">Общие доходы</h2>
        <div v-if="incomes.length === 0" class="overall-income__empty">
            <p>Ещё нет доходов</p>
        </div>
        <div v-else>
            <ul class="space-y-2 overall-income__list">
                <li v-for="(income, index) in incomes" :key="index"
                    class="overall-income__item flex items-center py-2 rounded">
                    <div class="w-4 h-full bg-green-500 mr-2"></div>
                    <span>{{ income.category }} - {{ income.amount }} - {{ income.date }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OverallIncome',
    computed: {
        incomes() {
            return this.$store.state.incomes;
        }
    }
}
</script>

<style scoped>
.overall-income {
    margin-top: 20px;
}

.overall-income__title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.overall-income__empty {
    color: #666;
}

.overall-income__item {
    position: relative;
    padding-left: 10px;
    border-left: 4px solid #34d399;
}

.overall-income__item:nth-child(even) {
    background-color: #f3f4f6;
}

.overall-income__list {
    max-height: 400px;
    /* задаем максимальную высоту списка */
    overflow-y: auto;
    /* добавляем вертикальную прокрутку при необходимости */
}
</style>
