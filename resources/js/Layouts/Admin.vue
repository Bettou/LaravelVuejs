<template>

<v-app>
  <!-- Must have the app property -->
  <v-app-bar color="primary" app></v-app-bar>
  <v-navigation-drawer
      app
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense shaped>
        <Link style="text-decoration:none"  
          v-for="item in items"
          :href="item.route"
          :key="item.title">
        <v-list-item
          link
          active-class="primary--text"
          :class="$page.url==item.route ? 'primary lighten-4' :'' "
        
          
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </Link>
      </v-list>
      
    </v-navigation-drawer>

  <v-main>
    <v-container>
        <slot> </slot>
    </v-container>
  </v-main>
</v-app>
</template>
<script>
import {Link} from '@inertiajs/inertia-vue'

  export default {
    components:{Link},
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city',route:'/home' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline',route:'/users' },
          { title: 'Roles', icon: 'mdi-table',route:'/roles' },
        ],
        mini: true,
      }
    },
    watch:{
      '$page.props.flash':function(flash){
        if (flash.success){
          this.$toast.success(flash.success)
        }
          if (flash.info){
          this.$toast.info(flash.success)
        }
          if (flash.error){
          this.$toast.error(flash.success)
        }
      }
    }
  }
</script>