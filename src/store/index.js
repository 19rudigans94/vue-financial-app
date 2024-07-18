import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        expenses: [],
        incomes: []
    },
    mutations: {
        addExpense(state, expense) {
            if (!expense.amount || !expense.date || !expense.category) {
                return;
            }
            state.expenses.push(expense);
        },
        addIncome(state, income) {
            if (!income.amount || !income.date || !income.category) {
                return;
            }
            state.incomes.push(income);
        }
    },
    actions: {
        addExpense({ commit }, expense) {
            if (!expense.amount || !expense.date || !expense.category) {
                return;
            }
            commit('addExpense', expense);
        },
        addIncome({ commit }, income) {
            if (!income.amount || !income.date || !income.category) {
                return;
            }
            commit('addIncome', income);
        }
    },
    getters: {
        totalExpenses(state) {
            return state.expenses.reduce((total, { amount }) => total + (Number(amount) || 0), 0);
        },
        totalIncomes(state) {
            return state.incomes.reduce((total, { amount }) => total + (Number(amount) || 0), 0);
        }
    }
});

