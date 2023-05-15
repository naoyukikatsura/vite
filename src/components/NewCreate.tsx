//  const handleSubmit:ComponentProps<'form'>['onSubmit'] = (event: { preventDefault: () => void; }) => {
//     event.preventDefault()

//     const newTask:Task = {
//       Value: inputValue,
//       description: inputDescription,
//       id: tasks.length+1,
//       done: false,
//       active: false,
//     }

//     setTasks([newTask, ...tasks])
//     setInputValue('')
//     setInputDescription('')
//   }

// const NewCreate = ({handleSubmit}) => {
//       return (
//         <form onSubmit={handleSubmit}>
//           <input type="submit" id='newcreate' value='+' className={`${styles.commonButton} ${styles.createButton}`}/>
//           <label htmlFor='newcreate' className={styles.newCreateString}>新規</label>
//         </form>
//       )
//     }


// export default NewCreate