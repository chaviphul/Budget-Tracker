import { createContext, useReducer } from "react";

const initialState = {
  budget: 1000,
  expensesList: [
    { id: 1, name: "Food", cost: 200 },
    { id: 2, name: "transport", cost: 100 },
  ],
};

const appReducer = (state, action) => {
  if (action.type === "ADD_EXPENSE") {
    return {
      ...state,
      expensesList: [...state.expensesList, action.payload],
    };
  }
  return state;
};

export const BudgetContext = createContext({
  budget: 0,
  expensesList: [],
  addExpense: () => {},
});

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addExpense = (expenseName, expenseCost) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: {
        id: Date.now(),
        name: expenseName,
        cost: expenseCost,
      },
    });
  };
  return (
    <BudgetContext.Provider
      value={{
        budget: state.budget,
        expensesList: state.expensesList,
        addExpense: addExpense,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default AppContext;
