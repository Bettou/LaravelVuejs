<template>


      <v-card>
          <v-card-text>
              <v-row  align="center" justify="center">
                  <v-col md="6">
              <v-form @submit.prevent="store">
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
              > </v-text-field>
               <v-autocomplete
               multiple
               small-chips
              label="Rôles"
              outlined
              :items="$page.props.roles"
              item-text="name"
              item-value="id"
              v-model="form.roles"
              >

              </v-autocomplete>
              <v-autocomplete
              multiple
              small-chips
              label="Permissions"
              outlined
              :items="$page.props.permissions"
              item-text="name"
              item-value="id"
              v-model="form.permissions"
              >
              </v-autocomplete>
               <v-btn type="submit" color="success">
                <v-icon>
                    mdi-store
                </v-icon>
                Enregistrer
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
      store(){
          this.$inertia.post('/users',this.form)
      }
  }



}

</script>
