<template>

    <div>

         <div class="card student-list m-2 p-2">
            <h4 class="card-title">Student List</h4>
           
           <div class="edit-table-toggle form-check">
               <input id="edit-table" type="checkbox" class="form-check" v-model="editTable">
               <label for="edit-table" class="form-check-label">Edit table?</label>
           </div>
           
           
           
            <div id="student-table">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>StarID</th>
                        <th>Present?</th>
                        <th v-show="editTable">Delete</th>
                    </tr>

     <student-row 
        v-for ="student in students"
        v-bind:student="student"
        v-bind:edit="editTable"
        v-bind:key="student.starID"
        v-on:student-arrived-or-left="arrivedOrleft"
        v-on:delete-student="deleteStudent">
     </student-row>
         
         </table>
            </div>
        </div>
    </div>
</template>


<script>

import StudentRow from '@/components/StudentRow.vue'


export default {
    //create component here

    name: 'StudentTable',
    components: {
        StudentRow
    },
    data () {
        return {
            editTable: false
        }
    },
    props:{
        students: Array
    },
    methods: {
        arrivedOrleft (student, present) {
            //todo emit message to parent

            this.$emit('student-arrived-or-left',student, present)
        },
        deleteStudent(student) {
            this.$emit('delete-student', student)
        }
    }
}
 
</script>


<style scoped>




</style>