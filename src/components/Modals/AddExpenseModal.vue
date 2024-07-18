<template>
    <div class="modal fixed inset-0 flex items-center justify-center z-50">
        <div class="modal-content bg-white p-8 rounded shadow-lg max-w-md w-full">
            <span class="close absolute top-0 right-0 p-4 cursor-pointer" @click="$emit('close')">&times;</span>
            <h2 class="text-2xl font-bold mb-4">Добавить расход</h2>
            <form @submit.prevent="addExpense">

                <div class="mb-4">
                    <label for="amount" class="block text-sm font-medium text-gray-700">Сумма:</label>
                    <input id="amount" type="number" v-model="expense.amount" required
                        class="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                </div>

                <div class="mb-4">
                    <label for="date" class="block text-sm font-medium text-gray-700">Дата:</label>
                    <input id="date" type="date" v-model="expense.date" required
                        class="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                </div>

                <div class="mb-4">
                    <label for="category" class="block text-sm font-medium text-gray-700">Категория:</label>
                    <input id="category" type="text" v-model="expense.category" required
                        class="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                </div>

                <button type="submit"
                    class="form-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
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
            expense: {
                amount: null,
                date: null,
                category: ''
            }
        };
    },
    methods: {
        addExpense() {
            this.$store.dispatch('addExpense', this.expense);
            this.$emit('close');
            this.expense = {
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
