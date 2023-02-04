import { projects } from "../data/data";

export const filterProjects_ByCategory = (category) => {
  let filteredProjects = projects.filter(project => project.category == category);

  return filteredProjects.map(item => 
          <div key={item.id} id={item.id} className="column__card" 
            draggable='true' 
            onDrag={(e) => onStart_Drag_Item(e,item.id)}
          >
            <h5>{item.client}</h5>
          </div>
  )
}