<template>
  <div class="container w-11/12 mx-auto p-4">
    <header class="w-full bg-emerald-500">
      <h1 class="text-3xl font-bold mb-4 text-center p-2">Контроль финансов</h1>
    </header>

    <div class="flex flex-col md:flex-row">
      <aside class="w-full md:w-1/3 mb-4 md:mb-0">
        <PieChartExpense class="mb-4" />
        <PieChartIncome />
      </aside>

      <div class="w-full md:w-2/3">
        <div class="flex items-center mb-4 border-b-2 border-gray-300">
          <Balance class="w-1/2 md:mr-4" />
          <LargestExpense class="w-1/2" />
        </div>

        <div class="flex items-center mb-4 justify-around">
          <button @click="openAddExpenseModal" class="btn btn-blue mr-4">Добавить расход</button>
          <button @click="openAddIncomeModal" class="btn btn-green">Добавить доход</button>
        </div>

        <div class="flex flex-col sm:flex-row">
          <OverallExpense class="w-full sm:w-1/2 md:mr-4 mb-4 sm:mb-0" />
          <OverallIncome class="w-full sm:w-1/2" />
        </div>
      </div>
    </div>

    <AddIncomeModal v-if="isAddIncomeModalOpen" @close="closeModal('addIncome')" />
    <AddExpenseModal v-if="isAddExpenseModalOpen" @close="closeModal('addExpense')" />

    <footer class="fixed bottom-0 left-0 w-full">
      <div class=" p-1 text-center">
        <p>&copy; 2024. Все права защищены.</p>
      </div>
    </footer>
  </div>
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


@media (min-width: 640px) {

  /* sm */
  .container {
    width: 95%;
  }

}

@media (min-width: 768px) {

  /* md */
  .flex-col {
    flex-direction: column;
  }


  .flex-row {
    flex-direction: row;
  }
}

@media (min-width: 1024px) {

  /* lg */
  .container {
    width: 90%;
  }

}

@media (min-width: 1280px) {

  /* xl */
  .container {
    width: 85%;
  }

}
</style>
