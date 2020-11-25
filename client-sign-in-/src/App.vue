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
      name: ''
    }
  },
  components: {
    NewStudentForm,
    StudentTable,
    StudentMessage
  },
  mounted() {
    this.UpdateStudents()
  },
  methods: {
    newStudentAdded(student) {
      this.$student_api.addStudent(student).then(student => {
        this.UpdateStudents()
      }).catch( err => {
        let message = err.response.data.join(',')
        alert('Error adding student,' , message)
      })
    },
    studentArrivedOrLeft(student) {
      this.$student_api.UpdateStudent(student).then( () => {
        this.name = student.name 
        this.message = student.present ? 'Welcome, ' : 'Goodbye, '
        this.UpdateStudents()
      })
    },
    studentDeleted (student) {
      this.$$student_api.deleteStudent(student).then ( () => {
        this.UpdateStudents()
      })
    },
    UpdateStudents() {
      this.$student_api.getAllStudents().then(students => {
        this.students = students  
      })
    }
  }
}


</script>

<style>

</style>
