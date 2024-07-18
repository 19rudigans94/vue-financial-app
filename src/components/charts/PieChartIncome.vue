<template>
    <div>
        <h3>Диаграмма доходов</h3>
        <div>
            <canvas ref="pieChartCanvasIncome" width="200" height="200"></canvas>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
import store from '../../store/index.js';
import { getRandomColor, debounce, aggregateData } from '../../constant/constant';

export default {
    name: 'PieChartIncome',
    computed: {
        incomes() {
            return store.state.incomes;
        }
    },
    mounted() {
        if (this.incomes && this.incomes.length > 0) {
            this.createPieChart();
        }

        store.subscribe((mutation, state) => {
            if (mutation.type === 'addIncome') {
                this.debouncedCreatePieChart();
            }
        });
    },

    methods: {
        createPieChart() {
            if (this.incomes.length === 0) {
                return;
            }

            const aggregatedIncomes = aggregateData(this.incomes, 'category');

            let labels = aggregatedIncomes.map(income => income.category);
            let data = aggregatedIncomes.map(income => income.amount);

            const ctx = this.$refs.pieChartCanvasIncome.getContext('2d');

            if (this.chartInstance) {
                this.chartInstance.destroy();
            }

            this.chartInstance = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        data: data,
                        backgroundColor: aggregatedIncomes.map(income => getRandomColor()),
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
