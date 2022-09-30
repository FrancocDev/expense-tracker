import filtered from '../signals/filtered'
import expenses from '../signals/expenses'

function CategoryFilter() {
    function handleSelect(event){
        filtered.value = event.target.value
        console.log(filtered.value)
    }

  return (
    <div className='w-full p-4 rounded-md shadow-lg mb-6 bg-white'>
        <form className='flex'>
            <label htmlFor="categoryExpense" className='text-xl font-semibold text-blue-500 mr-4 w-2/5'>Filter by category</label>
          <select
            name="categoryExpense"
            id="categoryExpense"
            className="p-1 rounded-md pl-3 text-black w-full bg-gray-100 font-medium cursor-pointer"
            onChange={handleSelect}
          >
            <option value="">All</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="bills">Bills</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="shopping">Shopping</option>
            <option value="others">Others</option>
          </select>
        </form>
    </div>
  )
}

export default CategoryFilter




