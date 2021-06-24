// parent element to store card simple as cool
const taskcontainer=document.querySelector(".task_container");
console.log(taskcontainer);


const newcard=({id,imageurl,TaskTitle,TaskType,Taskarea})=>`<div class="col-md-6 col-lg-4" id=${id}>
<div class="card">
    <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success"><i
                class="fas fa-pencil-alt"></i></button>
        <button type="button" class="btn btn-outline-danger"><i
                class="fas fa-trash-alt"></i></button>
    </div>
    <img src=${imageurl}
        class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${TaskTitle}f</h5>
        <p class="card-text">${TaskType}
        </p>
        <span class="badge bg-primary">${Taskarea}</span>
    </div>
    <div class="card-footer text-muted">
        <button type="button" class="btn btn-outline-primary float-end">open task</button>
    </div>
</div>
</div>`



const savechanges=()=>
{
    const taskdata={
        id:`${Date.now()}`, /*unique number for card id*/
        imageurl:document.getElementById("imageurl").value,
        TaskTitle:document.getElementById("TaskTitle").value,
        TaskType:document.getElementById("TaskType").value,
        Taskarea:document.getElementById("Taskarea").value
    };
    const createnewcard=newcard(taskdata);
taskcontainer.insertAdjacentHTML("beforeend",createnewcard);

};

// issue
// the modal was not closing after done
// the cards were deleted after refresh


// feature
// open task
// edit task
// delete button