<template>
    <div id="title">
        <div class="flex-column-centered">
            <h1>UK Police Crime Dashboard</h1>
            <p>Use the filter bar below to narrow search</p>
            <p>Cimes will be displayed in a list, and by location below</p>
            <p>
                All data is pulled from the
                <a href="https://data.police.uk/docs/"
                    >DATA.UK.POLICE Crimes API</a
                >
            </p>
        </div>
    </div>
    <filter-bar></filter-bar>
    <list-crimes></list-crimes>
</template>

<script setup>
import FilterBar from "@/components/FilterBar.vue";
import ListCrimes from "@/components/ListCrimes.vue";
</script>

<style scoped>
#title {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    border-radius: 10px;
    width: 60%;
    margin: auto;
    color: white;
}
#title a {
    color: white;
}
</style>
