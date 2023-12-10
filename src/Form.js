
const Form = ({onSubmit, onChange, value}) => {
  return (
   
    <form className="search-form" onSubmit={onSubmit}>

        <input

        id="search"
        type="text"
        placeholder="Enter username or email"
        onChange={onChange}
        value = {value}
        
        />

        <button type="submit">Search</button>

    </form>
  )
}

export default Form