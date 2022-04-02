<template lang="">
    <div class="wrap-toastmsg">
        <div class="toast-msg" v-for="(item, index) in items" :key="index">
            <div class="toast-icon toast-icon-ok" v-if="item.status == 'ok'">
                <i class="fas fa-check"></i>
            </div>
            <div class="toast-icon toast-icon-error" v-if="item.status == 'error'">
                <i class="fas fa-exclamation"></i>
            </div>
            <div class="toast-text">
                {{item.text}} 
            </div>
            <i class="fas fa-times" @click="hideToast"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ToastMsg',
    props: {
        items: [],
    },
    methods: {
        hideToast: function(e){
            console.log(e.path[1].style.display = 'none')
            // this.$emit('hideToast', e)
        }
    },
}
</script>
<style lang="">
    
</style>