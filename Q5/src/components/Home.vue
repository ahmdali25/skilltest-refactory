<template>
   <div class="container-fluid">
    <div class="row mt-4">
        <div class="col-lg-4">
            <div class="card text-white card-todo">
                <div class="row card-body">
                   <div class="col-lg-4">
                       <img src="../assets/to-do-list.png" alt="">
                   </div>
                   <div class="col-lg-8">
                        <h5 class="card-title">Hallo, Sam!</h5>
                        <p class="card-text">You have 2 tasks left for today, Already completed Task today?</p>
                   </div>
                </div>
            </div>
        </div>
        <div class="col-lg-7 ml-5">
            <h2 class="title">Task For Today</h2>
            <div class="row">
                <div class="col-lg-4">
                    <button class="btn btn-add" data-toggle="modal" data-target="#newTaskModal" title="Create new task">+ Create New</button>
                </div>
                <div class="col-lg-8">
                    <div class="input-group input-search">
                        <input type="text" class="form-control form-rounded text-center" placeholder="Cari" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    </div>
                    <div class="input-group">
                         <button class="btn btn-search">
                            <img src="../assets/search.png" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-4">
       <div class="col-lg-4">
           <Calendar class="calendar" title-position="left" trim-weeks :attributes='attrs' :masks=" { weekdays: 'WWW' }" />
       </div>
       <div class="col-lg-8">
            <div class="row row-top">
                <div class="card text-white card-task">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-4">
                            <h5 class="card-title">Daily Stand Up</h5>
                            </div>
                            <div class="col-lg-8">
                                <p class="status status-complete">Complete</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8">
                                <ol type="1" class="card-text">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                </ol>
                            </div>
                            <div class="col-lg-2 action">
                                <div class="row justify-content-end">
                                    <div class="col-lg-3">
                                        <button class="btn btn-action" data-toggle="modal" data-target="#editTaskModal" title="Edit task">
                                            <img src="../assets/edit.png" alt="">
                                        </button>
                                    </div>
                                    <div class="col-lg-3">
                                        <button @click="deleteTask" class="btn btn-action" title="Delete task">
                                            <img src="../assets/delete.png" alt="">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row row-task">
                <div class="card text-white card-task">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-4">
                            <h5 class="card-title">Meeting With Client A</h5>
                            </div>
                            <div class="col-lg-8">
                                <p class="status">Set as Complete</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8">
                                <ol type="1" class="card-text">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                </ol>
                            </div>
                            <div class="col-lg-2 action">
                                <div class="row justify-content-end">
                                    <div class="col-lg-3">
                                        <button  class="btn btn-action" data-toggle="modal" data-target="#editTaskModal" title="Edit task">
                                            <img src="../assets/edit.png" alt="">
                                        </button>
                                    </div>
                                    <div class="col-lg-3">
                                        <button @click="deleteTask" class="btn btn-action" title="Delete task">
                                            <img src="../assets/delete.png" alt="">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row row-task">
                <div class="card text-white card-task">
                    <div class="card-body">
                       <div class="row">
                            <div class="col-lg-4">
                            <h5 class="card-title">Meeting With Client B</h5>
                            </div>
                            <div class="col-lg-8">
                                <p class="status">Set as Complete</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8">
                                <ol type="1" class="card-text">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                </ol>
                            </div>
                            <div class="col-lg-2 action">
                                <div class="row justify-content-end">
                                    <div class="col-lg-3">
                                        <button  class="btn btn-action" data-toggle="modal" data-target="#editTaskModal" title="Edit task">
                                            <img src="../assets/edit.png" alt="">
                                        </button>
                                    </div>
                                    <div class="col-lg-3">
                                        <button @click="deleteTask" class="btn btn-action" title="Delete task">
                                            <img src="../assets/delete.png" alt="">
                                        </button>
                                    </div>>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>

    <!-- New Task Modal Dialog -->
    <div class="modal fade" id="newTaskModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">New Task</h5>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="Title">Title</label>
                        <input type="email" class="form-control" placeholder="Fill Title">
                    </div>
                    <div class="form-group">
                        <label for="Description">Description</label>
                        <textarea class="form-control" rows="3" placeholder="Fill Description"></textarea>
                    </div>
                    <div clas="form-group">
                       <div class="label">
                            <label for="Datepicker">Choose Date</label>
                       </div>
                       <div class="date-picker">
                           <Calendar title-position="left" trim-weeks :attributes='attrs' :masks=" { weekdays: 'WWW' }" />
                       </div>
                    </div>
                </form>
            </div>
            <div class="row modal-footer justify-content-center">
                <button type="button" class="btn btn-cancel" data-dismiss="modal">Cancel</button>
                <button type="button" @click="createTask" class="btn btn-create">Create Task</button>
            </div>
            </div>
        </div>
    </div>

    <!-- Edit Task Modal -->
     <div class="modal fade" id="editTaskModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit Task</h5>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="Title">Title</label>
                        <input type="email" class="form-control" placeholder="Daily Standup">
                    </div>
                    <div class="form-group">
                        <label for="Description">Description</label>
                        <textarea class="form-control" rows="3" placeholder="Lorem ipsum dolor sit amet"></textarea>
                    </div>
                    <div clas="form-group">
                       <div class="label">
                            <label for="Datepicker">Choose Date</label>
                       </div>
                       <div class="date-picker">
                           <Calendar title-position="left" trim-weeks :attributes='attrs' :masks=" { weekdays: 'WWW' }" />
                       </div>
                    </div>
                </form>
            </div>
            <div class="row modal-footer justify-content-center">
                <button type="button" class="btn btn-cancel" data-dismiss="modal">Cancel</button>
                <button type="button" @click="createTask" class="btn btn-create">Edit Task</button>
            </div>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
import Calendar from 'v-calendar/lib/components/calendar.umd'

export default {
    components: {
        Calendar
    },
    data: () => ({
        date: new Date(),
        attrs: [
        // This is a single attribute
            {
                key: 'today',
                highlight: true,
                dates: new Date(),
            }
        ],
    }),
    methods: {
        createTask() {
             this.$toasted.info('Task berhasil disimpan!', {position: 'bottom-right', duration: 1500});
        },
        deleteTask() {
             this.$toasted.info('Task berhasil dihapus!', {position: 'bottom-right', duration: 1500});
        }
    }
}
</script>

<style lang="scss" scoped>
.card-todo {
    background-color: #0442D0;
    border-radius: 20px;
    width: 394px;
    height: 168px;
    .card-title {
        color: #FABE2C;
        font-weight: 900;
        font-size: 22px;
    }
    .card-text {
        font-size: 20px;
        font-weight: 400;
    }
}

.row {
     .card-task {
        background-color: #FFFFFF;
        width: 894px;
        height: 130px;
        box-shadow: 10px 10px 50px 10px #EEF3FD;
        border-radius: 15px;
        .card-title {
            color: #525C77;
            font-size: 25px;
            font-weight: 700;
        }
        .status {
            color: #D3D5DB;
            background-color: #FEEAEB;
            font-size: 10px;
            font-weight: 700;
            margin-left: -20px;
            padding: 6px 12px;
            border-radius: 5px;
            width: 110px;
            height: 25px;
        }

        .status-complete {
            color: #FB3453;
            width: 82px;
            margin-left: -80px;
        }
        .card-text {
            color: #525C77;
        }

        .row {
            .action {
                margin-top: 20px;
                margin-left: 120px;

                .btn-action {
                    background-color: transparent;
                    box-shadow: none;
                }
            }
        }
    }
}

.row-top {
    margin-top: -50px;
}

.row-task {
    margin-top: 20px;
}

.row {
    .title {
        font-size: 35px;
        font-weight: 700;
        color: #525C77;
        margin-left: -50px;
    }
    .row {
        .btn-add {
            background-color: #0442D0;
            color: #FFFFFF;
            margin-top: 20px;
            margin-left: -50px;
            border-radius: 15px;

            &:focus, &:active {
                outline: none;
                box-shadow: none;
            }

            &:hover {
                background-color: #6797f7;
                color: #FFFFFF;
            }
        }
    }
    .form-rounded {
        border-radius: 15px;
        border: 1px solid #0442D0;

        &:focus, &:active {
            outline: none;
            box-shadow: none;
        }
    }
    .input-search {
        margin-top: 20px;
        margin-left: -160px;
        width: 712px;
        height: 43px;

        input:focus::placeholder {
            color: transparent;
        }

        ::placeholder{
            color: #0442D0;
        }
    }
    .btn-search {
        position: absolute;
        margin-top: -42px;
        margin-left: 500px;
        background-color: transparent;
        box-shadow: none;
        border-radius: 1rem;
    }
}

// Custom size calendar

::v-deep .calendar {
    width: 393px;
    height: 376px;
    .vc-weekday {
        color: #525C77;
    }
    .vc-day {
        min-height: 60px;
        color: #525C77;
    }
}

// Modal
    .modal {
        .modal-dialog {
            .modal-title {
                color: #525C77;
                font-weight: 700;
            }
            .modal-body {
                label {
                    color: #525C77;
                    font-weight: 700;
                }
            }
            .modal-footer {
               .btn-cancel {
                   color: #0442D0
               }
               .btn-create {
                   color: #FFFFFF;
                   background-color: #0442D0;
                   border-radius: 10px;
                   margin-left: 40px;
               }
            }
        }
    }
</style>