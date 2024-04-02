<template>
    <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
            {{ '订单 ' + o }}
        </div>
    </el-card>
</template>