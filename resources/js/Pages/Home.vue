<template>

 
      <v-card flat>
          <v-card-text>
            <span> {{$page.props.user.name}} </span>
            <span> {{$page.props.user.email}} </span>
            
          </v-card-text>
        </v-card>
</template>
<script>
import Admin from "../Layouts/Admin"
export default {
  layout: Admin,

   data: () => ({ drawer: null }),
   
    methods:{
        logout(){
            this.$inertia.delete('/logout');

        }

    }
    
}

</script>