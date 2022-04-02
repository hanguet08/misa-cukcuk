<template lang="">
    <div class = 'wrap-confirm'>
        <div class="confirm">
            <div class="confirm-header">
                <div class="confirm-title">Xác nhận xóa</div>
                <div class="exit-confirm" v-on:click="exitBtnOnClick">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div class="confirm-content">
            <div class="confirm-icon">

            </div>
            <div class="confirm-text">
                Bạn có chắc chắn muốn xóa không ?
            </div>
            </div>
            <div class="confirm-buttons">
                <TheButton text="Hủy" type="small-button" color="grey-button" style="margin-right: 16px" v-on:click="cancelBtnOnClick"/>
                <TheButton text="Đồng ý" type="small-button" color="red-button" style="margin-right: 25px" v-on:click="agreeBtnOnClick"/>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import TheButton from '../components/common/TheButton.vue'
export default {
    name: 'TheConfirm',
    components: {
        TheButton,
    },
    props: {
        deleteList: [],
    },
    created(){
        console.log(this.deleteList)
    },
    methods: {
        cancelBtnOnClick(){
            this.$emit('hideConfirm')
            this.$emit('emptyCheckedList')
        },
        exitBtnOnClick(){
            this.$emit('hideConfirm')
            this.$emit('emptyCheckedList')
        },
        agreeBtnOnClick(){
            this.deleteList.forEach(i => {
                axios.delete(`http://cukcuk.manhnv.net/api/v1/Employees/${i}`)
                .then(()=>{
                    this.$emit('reloadTable')
                    this.$emit('hideConfirm')
                    this.$emit('showToast', {text: 'Đã xóa thành công', status: 'ok'})
                    console.log('Xóa thành công')
                }
                ).catch(res=>{
                    console.log(res)
                    this.$emit('showToast', {text: 'Không xóa được', status: 'error'})
                })
            });

        }

    }
}
</script>
<style lang="">
    
</style>