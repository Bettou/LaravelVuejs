<template>

 
      <v-card>
          <v-card-text> 
              <v-row  align="center" justify="center">
                  <v-col md="6">
              <v-form @submit.prevent="update">
              <v-text-field
              label="nom"
              outlined
              v-model="form.name"
              >
                  
              </v-text-field>
               <v-text-field
              label="email"
              outlined
              v-model="form.email"
              >

           
              </v-text-field>
               <v-btn type="submit" color="success">
                <v-icon>
                    mdi-store
                </v-icon>
                Modifier
            </v-btn>
          </v-form>

                  </v-col>
              </v-row>
          </v-card-text>
          
        
        </v-card>
</template>
<script>
import Admin from "../../Layouts/Admin"
export default {
  layout: Admin,
  data(){
    return{
      form: {},
      
    }
  },
  methods:{
      update(){
          this.$inertia.put('/users/'+this.form.id, this.form)
      }
  },
  created(){
      this.form=this.$page.props.user
  }


    
}

</script>