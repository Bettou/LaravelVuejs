<template>

<v-app>
    <v-main>
        <v-row style="height:100%" align="center" justify="center">
    <v-col md="4">
         <v-card>
             <v-toolbar dense dark color="primary">
          <v-spacer></v-spacer>
            <v-card-title > AUTHENTIFICATION </v-card-title>
            <v-spacer></v-spacer>
               </v-toolbar>
            <v-form @submit.prevent="login">
                 <v-card-text>
                 <v-img class="inline-block mx-auto" width="200" src="/logo.png"></v-img>
                <v-text-field
                outlined  prepend-inner-icon="mdi-email"
                 v-model="form.email"
                label="adresse email"
                type="email"
          > 
            
            
        </v-text-field>
         <v-text-field
          outlined  prepend-inner-icon="mdi-lock"
          v-model="form.password"
          label="Mot de passe"
          type="password"
        
          > 
                
        </v-text-field>
        <v-btn type="submit"  color="primary" block>connexion
            <v-icon right>mdi-login</v-icon>
        </v-btn>

             </v-card-text>
            </v-form>
         </v-card>

    </v-col>

    </v-row>
    </v-main>
 
</v-app>

</template>

<script>
export default {
    data() {
        return {
            form: {}
        }
    },
    methods:{
        login(){
            this.$inertia.post('/',this.form);

        }

    }
}
</script>