<template>
  <nav>
    <a href="#"
       v-for="item in menuItems"
       :key="item.id"
       :class="{ active: active === item.id }"
       @click.prevent="$emit('update-active', item.id)">
      {{ item.name }}
    </a>
  </nav>
</template>

<script>
export default {
  props: {
    menuItems: Array,
    active: String
  }
}
</script>

<style>
  /*-------------------------
		The menu
	--------------------------*/

	nav{
		display: flex;
		justify-content: center; /* Centrer les éléments de navigation */
		background-color: #5597b4;
		box-shadow: 0 1px 1px #ccc;
		padding: 10px 0; /* Ajustez le padding si nécessaire */
	}

	nav a{
		display:flex;
		align-items: center;
  		height: 100%;
		padding: 18px 30px;
		color:#fff !important;
		font-weight:bold;
		font-size:16px;
		text-decoration:none !important;
		line-height:1;
		text-transform: uppercase;
		background-color:transparent;

		-webkit-transition:background-color 0.25s;
		-moz-transition:background-color 0.25s;
		transition:background-color 0.25s;
	}

	nav a:first-child{
		border-radius:2px 0 0 2px;
	}

	nav a:last-child{
		border-radius:0 2px 2px 0;
	}

	nav.home .home,
	nav.projects .projects,
	nav.services .services,
	nav.contact .contact,
	a.active{
		background-color:#e35885;
	}

	p{
		font-size:22px;
		font-weight:bold;
		color:#7d9098;
	}

	p b{
		color:#ffffff;
		display:inline-block;
		padding:5px 10px;
		background-color:#c4d7e0;
		border-radius:2px;
		text-transform:uppercase;
		font-size:18px;
	}
</style>
