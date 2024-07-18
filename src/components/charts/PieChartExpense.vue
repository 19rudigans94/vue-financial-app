<template>
    <div>
        <h3>Диаграмма расходов</h3>
        <div>
            <canvas ref="pieChartCanvasExpense" width="200" height="200"></canvas>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
import store from '../../store/index.js';
import { getRandomColor, debounce, aggregateData } from '../../constant/constant';

export default {
    name: 'PieChartExpense',
    computed: {
        expense() {
            return store.state.expenses;
        }
    },
    mounted() {
        if (this.expense && this.expense.length > 0) {
            this.createPieChart();
        }

        store.subscribe((mutation, state) => {
            if (mutation.type === 'addExpense') {
                this.debouncedCreatePieChart();
            }
        });
    },

    methods: {
        createPieChart() {
            if (this.expense.length === 0) {
                return;
            }

            const aggregatedExpenses = aggregateData(this.expense, 'category');

            let labels = aggregatedExpenses.map(expense => expense.category);
            let data = aggregatedExpenses.map(expense => expense.amount);

            const ctx = this.$refs.pieChartCanvasExpense.getContext('2d');

            if (this.chartInstance) {
                this.chartInstance.destroy();
            }

            this.chartInstance = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        data: data,
                        backgroundColor: aggregatedExpenses.map(expense => getRandomColor()),
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        },

        debouncedCreatePieChart: debounce(function () {
            this.createPieChart();
        }, 300)
    }
}
</script>
