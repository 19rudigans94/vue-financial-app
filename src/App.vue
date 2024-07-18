<template>
  <div class="container w-11/12 mx-auto p-4">
    <header class="w-full bg-emerald-500">
      <h1 class="text-3xl font-bold mb-4 text-center p-2">Контроль финансов</h1>
    </header>

    <div class="flex">
      <aside class="w-1/3">
        <PieChartExpense class="mb-4" />
        <PieChartIncome />
      </aside>

      <div class="w-2/3">
        <div class="flex items-center mb-4 border-b-2	border-gray-300">
          <Balance class="w-1/2 mr-4" />
          <LargestExpense class="w-1/2" />
        </div>

        <div class="flex items-center mb-4 justify-around">
          <button @click="openAddExpenseModal" class="btn btn-blue mr-4">Добавить расход</button>
          <button @click="openAddIncomeModal" class="btn btn-green">Добавить доход</button>
        </div>

        <div class="flex">
          <OverallExpense class="w-1/2 mr-4" />
          <OverallIncome class="w-1/2" />
        </div>
      </div>
    </div>

    <AddIncomeModal v-if="isAddIncomeModalOpen" @close="closeModal('addIncome')" />
    <AddExpenseModal v-if="isAddExpenseModalOpen" @close="closeModal('addExpense')" />

    
  </div>
  <footer class="bg-slate-400 fixed bottom-0 w-full">
    <p class="text-center">&copy; 2024. Все права защищены.</p>
  </footer>
</template>

<script>

import AddExpenseModal from './components/Modals/AddExpenseModal.vue';
import AddIncomeModal from './components/Modals/AddIncomeModal.vue';
import OverallExpense from './components/Dashboard/OverallExpense.vue';
import OverallIncome from './components/Dashboard/OverallIncome.vue';
import LargestExpense from './components/Dashboard/LargestExpense.vue';
import Balance from './components/Dashboard/Balance.vue';
import PieChartExpense from './components/charts/PieChartExpense.vue';
import PieChartIncome from './components/charts/PieChartIncome.vue';

export default {
  name: 'App',
  components: {
    AddExpenseModal,
    AddIncomeModal,
    OverallExpense,
    OverallIncome,
    LargestExpense,
    Balance,
    PieChartExpense,
    PieChartIncome,
  },
  data() {
    return {
      isAddExpenseModalOpen: false,
      isAddIncomeModalOpen: false,
    };
  },
  methods: {
    openAddExpenseModal() {
      this.isAddExpenseModalOpen = true;
    },
    openAddIncomeModal() {
      this.isAddIncomeModalOpen = true;
    },
    closeModal(modalType) {
      if (modalType === 'addExpense') {
        this.isAddExpenseModalOpen = false;
      } else if (modalType === 'addIncome') {
        this.isAddIncomeModalOpen = false;
      }
    },
  },
};
</script>

<style>
.btn {
  background-color: #4a90e2;
  color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #357bd8;
}
</style>