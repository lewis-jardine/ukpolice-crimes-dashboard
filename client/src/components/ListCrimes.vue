<template>
    <div class="flex-column-centered">
        <h1>List Crimes</h1>
        <div class="flex-column-centered">
            <v-card v-for="crime in crimes" :key="crime.id">
                <v-card-item>
                    <v-card-title> {{ crime.category }} </v-card-title>
                    <v-card-subtitle>{{
                        crime.location.street.name
                    }}</v-card-subtitle>
                    <v-card-text>
                        <p>Latitude: {{ crime.location.latitude }}</p>
                        <p>Longitude: {{ crime.location.longitude }}</p>
                        <p>Date: {{ crime.month }}</p>
                    </v-card-text>
                </v-card-item>
            </v-card>
        </div>
        <div v-for="crime in crimes" :key="crime.id">
            <p>{{ crime }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const crimes = computed(() => {
    return store.getters.getTopCrimes;
});
</script>
