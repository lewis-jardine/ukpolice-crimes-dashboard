<template>
    <v-form @submit.prevent="onSubmit">
        <v-row>
            <v-col>
                <v-select
                    v-model="crimeCategoryInput"
                    :items="crimeCategories"
                    item-title="name"
                    item-value="url"
                    label="Select Crime Catagory"
                ></v-select>
            </v-col>
            <v-col>
                <v-text-field
                    label="Latitude"
                    v-model="latitudeInput"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    label="Longitude"
                    v-model="longitudeInput"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    label="Date (YYYY-MM)"
                    v-model="dateInput"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-btn type="submit">Get Results</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
    fetch("https://data.police.uk/api/crime-categories")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((el) => {
                crimeCategories.value.push(el);
            });
        });
});

const crimeCategories = ref([]);

// Form Data
const crimeCategoryInput = ref("");
const latitudeInput = ref("");
const longitudeInput = ref("");
const dateInput = ref("");

function onSubmit() {
    let url =
        "https://data.police.uk/api/crimes-street/" +
        crimeCategoryInput.value +
        "?" +
        new URLSearchParams({
            lat: latitudeInput.value,
            lng: longitudeInput.value,
            date: dateInput.value,
        });
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.state.crimes = data;
            console.log(store.state.crimes);
        });
}
</script>
