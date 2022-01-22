import React, { useState, useEffect } from 'react';
import * as Styled from './App.styles'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { items } from './data/items'
import { categories } from './data/categories'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilters'
import { Table } from './components/Table'
import { InfoArea } from './components/InfoArea'
import { InputArea } from './components/InputArea'

function App() {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExprense] = useState(0);
  
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) 
    {
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExprense(expenseCount);

  },[filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <>
      <Styled.Container>
        <Styled.Header>
          <Styled.H1>Sistema Financeiro</Styled.H1>
        </Styled.Header>
        <Styled.Body>

          <InfoArea 
            currentMonth={currentMonth} 
            onMonthChange={handleMonthChange} 
            income={income} 
            expense={expense}
           />

           <InputArea onAdd={handleAddItem} />

          <Table list={filteredList}/>

        </Styled.Body>
      </Styled.Container>
    </>
  );
}

export default App;
