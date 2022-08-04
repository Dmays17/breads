const React = require('react')
const Default = require('./layouts/default')

function Index({breads}){
 
    return(
        <Default>
  <h2>Index Page</h2>
 
  <ul>
  {
  breads.map((bread, index)=> {
    return (
      <li key={bread.id}>
        <a href={`/bread/${bread.id}`}>
          {bread.name}
        </a>
      </li>
    )
  })
}
<div className='newButton'>
      <a href='/breads/new'><button>Add a new bread</button></a>
    </div>
  </ul>
</Default>

    )
}
module.exports=Index