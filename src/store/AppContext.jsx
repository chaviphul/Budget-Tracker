import { createContext, useReducer } from "react";

const initialState = {
  budget: 2000,
  expensesList: [],
  searchTerm: "",
};
const appReducer = (state, action) => {
  if (action.type === "ADD_EXPENSE") {
    return {
      ...state,
      expensesList: [...state.expensesList, action.payload],
    };
  } else if (action.type === "DELETE_EXPENSE") {
    return {
      ...state,
      expensesList: state.expensesList.filter(
        (expense) => expense.id !== action.payload.id,
      ),
    };
  } else if (action.type === "SEARCH_EXPENSE") {
    return {
      ...state,
      searchTerm: action.payload.name,
    };
  } else if (action.type === "EDIT_BUDGET") {
    return {
      ...state,
      budget: action.payload.budget,
    };
  }
  return state;
};

export const BudgetContext = createContext({
  budget: 0,
  expensesList: [],
  searchTerm: "",
  addExpense: () => {},
  deleteExpense: () => {},
  showSearch: () => {},
  editBudget: () => {},
});

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addExpense = (expenseName, expenseCost) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: {
        id: crypto.randomUUID(),
        name: expenseName,
        cost: Number(expenseCost),
      },
    });
  };
  const deleteExpense = (expenseid) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: {
        id: expenseid,
      },
    });
  };
  const showSearch = (expenseName) => {
    dispatch({
      type: "SEARCH_EXPENSE",
      payload: {
        name: expenseName,
      },
    });
  };

  const editBudget = (newBudget) => {
    dispatch({
      type: "EDIT_BUDGET",
      payload: {
        budget: Number(newBudget),
      },
    });
  };
  return (
    <BudgetContext.Provider
      value={{
        budget: state.budget,
        expensesList: state.expensesList,
        searchTerm: state.searchTerm,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        showSearch: showSearch,
        editBudget: editBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default AppContext;
