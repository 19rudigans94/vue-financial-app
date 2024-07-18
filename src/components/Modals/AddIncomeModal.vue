<template>
    <div class="modal fixed inset-0 flex items-center justify-center z-50">
        <div class="modal-content bg-white p-8 rounded shadow-lg max-w-md w-full">
            <span class=" close absolute top-0 right-0 p-4 cursor-pointer" @click="$emit('close')">&times;</span>
            <h2 class=" text-2xl font-bold mb-4">Добавить доход</h2>
            <form @submit.prevent="addIncome">

                <div class="mb-4">
                    <label for="incomeAmount" class="block text-sm font-medium text-gray-700">Сумма:</label>
                    <input id="incomeAmount" type="number" v-model="income.amount" required
                        class="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 sm:text-sm">
                </div>

                <div class="mb-4">
                    <label for="incomeDate" class="block text-sm font-medium text-gray-700">Дата:</label>
                    <input id="incomeDate" type="date" v-model="income.date" required
                        class="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 sm:text-sm">
                </div>

                <div class="mb-4">
                    <label for="incomeSource" class="block text-sm font-medium text-gray-700">Источник:</label>
                    <input id="incomeSource" type="text" v-model="income.category" required
                        class="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 sm:text-sm">
                </div>

                <button type="submit"
                    class="form-button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                    Добавить
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            income: {
                amount: null,
                date: null,
                category: ''
            }
        };
    },
    methods: {
        addIncome() {
            this.$store.dispatch('addIncome', this.income);
            this.$emit('close');
            this.income = {
                amount: null,
                date: null,
                category: ''
            };
        }
    }
};
</script>

<style scoped>
.modal {
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    position: relative;
}

.close {
    font-size: 24px;
    color: #888;
    cursor: pointer;
    transition: color 0.3s ease;
}

.close:hover {
    color: #333;
}

.form-input {
    /* Дополнительные стили для инпутов могут быть добавлены здесь */
}

.form-button {
    /* Дополнительные стили для кнопки могут быть добавлены здесь */
}
</style>
