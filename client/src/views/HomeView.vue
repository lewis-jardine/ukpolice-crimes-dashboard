<template>
    <div>
        <h1>UK Police Crime Dashboard</h1>
        <p>Use the filter bar below to narrow search</p>
        <p>Cimes will be displayed in a list, and by location below</p>
        <p>
            All data is pulled from the
            <a href="https://data.police.uk/docs/">DATA.UK>POLICE Crimes API</a>
        </p>
    </div>
    <filter-bar></filter-bar>
    <div id="data-container">
        <list-crimes></list-crimes>
        <map-crimes></map-crimes>
    </div>
</template>

<script setup>
import FilterBar from "@/components/FilterBar.vue";
import ListCrimes from "@/components/ListCrimes.vue";
import MapCrimes from "@/components/MapCrimes.vue";
</script>

<style scoped>
#data-container {
    display: flex;
    gap: 2rem;
}
</style>
