<template>


      <v-card flat>
          <v-card-text>
            <v-toolbar dark dense color="primary"><v-icon left> mdi-account-multiple </v-icon>
              <v-toolbar-title>

                Liste des utilisateurs
              </v-toolbar-title>


            </v-toolbar>
            <NavigationBtn href="/users/create" color="success" class="ma-3">
              <v-icon left>mdi-plus-circle</v-icon>
              Ajouter
            </NavigationBtn>
            <v-data-table :headers="headers"
              :page.sync="page"
              :items-per-page="itemsPerPage"
              hide-default-footer
              @page-count="pageCount = $event" :search="search"
             :items="$page.props.users">
            <template v-slot:top>
              <v-toolbar flat>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                      <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                <v-text-field dense solo outlined placeholder="Rechercher" v-model="search">


                </v-text-field>
              </v-toolbar>

            </template>


             <template v-slot:item.roles= {item}>
                 <v-chip-group column>
                     <v-chip outlined small label color="success" v-for="role in item.roles" :key="role.id">{{ role.name }}</v-chip>
                 </v-chip-group>
            </template>

            <template v-slot:item.permissions= {item}>
                 <v-chip-group column>
                     <v-chip outlined small label color="success" v-for="permission in item.permissions" :key="permission.id">{{ permission.name }}</v-chip>
                 </v-chip-group>
            </template>


            <template v-slot:item.actions= {item}>
           <Navigation-Btn icon :href="'/users/'+item.id+'/edit'">
             <v-icon  color="warning">mdi-pencil</v-icon>
           </Navigation-Btn>
            <v-btn icon @click="remove(item.id)">
             <v-icon type="button" as="button" color="error">mdi-delete</v-icon>
           </v-btn>
            </template>


            </v-data-table>
           <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>

    </div>

          </v-card-text>
        </v-card>
</template>
<script>
import Admin from "../../Layouts/Admin"
export default {
  layout: Admin,
  data(){
    return{
      search:'',
      page: 1,
        pageCount: 0,
        itemsPerPage: 100,
      headers:[
          {text:'ID',value:'id'},
          {text:'Nom',value:'name' },
          {text:'E-Mail',value:'email'},
          {text:'Roles',value:'roles'},
          {text:'Permissions',value:'permissions'},
          {text:'Action',value:'actions'}
      ]
    }
  },
  methods: {
    remove(id){
      this.$confirm('voulez vous supprimez?',{
        buttonTrueText: 'Oui',
        buttonFalseText: 'Non',
        color: 'warning',
        icon: 'warning',
        title: 'Warning',
        width: 360
            }).then(res => {
              if(res){
                this.$inertia.delete('users/'+id)
                return true
              }
})
    }
  }

}

</script>
