<template>
    <v-app>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<style>
.flex-column-centered {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem;
    padding: 1rem;
}
.flex-column-centered h1 {
    margin-bottom: 1rem;
}
main {
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
}
</style>
