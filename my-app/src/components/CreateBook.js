const CreateBook = ({ onChangeForm, handleSubmit }) => {


    // return(
    //     <div className="form-wrapper">
    //         <div className="form">
    //             <form>
    //                 <div className="input-group">
    //                     <label>book</label>
    //                     <input 
    //                         type="text" 
    //                         onChange={(e) => onChangeForm(e)} 
    //                         name="book" 
    //                         placeholder="book" 
    //                     />
    //                 </div>
    //                 <div className="input-group">
    //                     <label>category</label>
    //                     <input 
    //                         type="text" 
    //                         onChange={(e) => onChangeForm(e)} 
    //                         name="category" 
    //                         placeholder="category" 
    //                     />
    //                 </div>
    //                 <div className="input-group">
    //                     <label>author</label>
    //                     <input 
    //                         type="text" 
    //                         onChange={(e) => onChangeForm(e)} 
    //                         name="author"
    //                         placeholder="author" 
    //                     />
    //                 </div>
    //                 <button 
    //                     className="submit-button"
    //                     onClick= {() => handleSubmit()}
    //                 >Submit
    //                 </button>
    //             </form>
    //         </div>
    //     </div>
    // )

    //todo test
    return(
        <div className="form-wrapper">
            <div className="form">
                <form>
                    <div className="input-group">
                        <label>todo</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name="todo" 
                            placeholder="todo" 
                        />
                    </div>
                    <div className="input-group">
                        <label>category</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name="category" 
                            placeholder="category" 
                        />
                    </div>
                    <div className="input-group">
                        <label>isComplete</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name="isComplete"
                            placeholder="isComplete" 
                        />
                    </div>
                    <button 
                        className="submit-button"
                        onClick= {() => handleSubmit()}
                    >Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateBook;