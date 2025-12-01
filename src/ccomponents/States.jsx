

const States = () => {
    const probArr = ["Show / Hide Paragraph","Change Background Color","Form Input Live Preview","Add Item to a List"]
  return (
    <>
        <h1>State Problems Solving</h1>
        <ul>
            {
                probArr.map(problems => <li key={problems}><a href="http://">{problems}</a></li>)
            }
        </ul>
    </>
  )
}

export default States