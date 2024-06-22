<template>
  <div class="navbar">
    <nav>
      <img
        src="@/assets/Screenshot_5-removebg-preview.png"
        alt="Music App Logo"
      />
      <h1>
        <router-link :to="{ name: 'home' }">Music App</router-link>
      </h1>
      <div class="links">
        <div v-if="user">
          <button @click="handleClick">Logout</button>
        </div>
        <div v-else>
          <router-link :to="{ name: 'Signup' }" class="btn">
            Sign up
          </router-link>
          <router-link :to="{ name: 'Login' }" class="btn">
            Log in
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from "@/composables/useLogout";
import { useRouter } from "vue-router";
import getUser from "@/composables/getUser";

export default {
  setup() {
    const { user } = getUser();
    const { error, logout } = useLogout();
    const router = useRouter();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
        await router.push("Login");
      }
    };

    return { handleClick, user };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}

nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

nav h1 {
  margin-left: 20px;
}

nav .links {
  margin-left: auto;
}

nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}

nav img {
  max-height: 60px;
}
</style>
