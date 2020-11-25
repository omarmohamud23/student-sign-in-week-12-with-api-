<template>
  <div id="app">
    
  <new-student-form v-on:student-added="newStudentAdded"></new-student-form>
     
      <student-table
      v-bind:students="students" 
      v-on:student-arrived-or-left="studentArrivedOrLeft"
      v-on:delete-student="studentDeleted">
      </student-table>
  <student-message v-bind:student="mostRecentStudent"></student-message>
 
  </div>
</template>

<script>
import NewStudentForm from './components/NewStudentForm.vue'
import StudentMessage from './components/StudentMessage.vue'
import StudentTable from './components/StudentTable.vue'

export default {
  name: 'app',
  data(){
    return{
      students: [],
      message: '',
      name: '',
      mostRecentStudent: {}
    }
  },
  components: {
    NewStudentForm,
    StudentTable,
    StudentMessage
  },
  mounted() {
    this.updateStudent()
  },
  methods: {
    newStudentAdded(student) {
      this.$student_api.addStudent(student).then(student => {
        this.updateStudent()
      }).catch( err => {
        let message = err.response.data.join(',')
        alert('Error adding student,' , message)
      })
    },
    studentArrivedOrLeft(student, arrived) {
      student.present  = arrived
      this.$student_api.updateStudent(student).then( () => {
        this.mostRecentStudent = student
        this.updateStudent()
      })
    },
    studentDeleted (student) {
      this.$student_api.deleteStudent(student).then ( () => {
        this.updateStudent()
      })
    },
    updateStudent() {
      this.$student_api.getAllStudents().then(students => {
        this.students = students  
      })
    }
  }
}


</script>

<style>

</style>
