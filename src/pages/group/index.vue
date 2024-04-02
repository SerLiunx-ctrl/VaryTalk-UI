<template>
    <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
            {{ '群组 ' + o }}
        </div>
    </el-card>
</template>