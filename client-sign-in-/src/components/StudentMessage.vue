<template>

    <div>
        <div v-show="student.name">
        <div v-if ="student.present" class="alert alert-dark">
            Welcome, {{student.name}}
        </div>
            <div v-else class="alert alert-primary">
                Goodbye, {{student.name}}. See you later!

            </div>
    
        </div>

    </div>
</template>


<script>

export default {
    //create component here

    name: 'StudentMessage',
    props: {
        student: Object
    }
}

</script>


<style scoped>


</style>