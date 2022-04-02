<template lang="">
    <div class="cbbox">
        <div class="cbbox-label">{{label}}</div>
        <div class="select-list" :class="{'sl-activate':isActivate}" ref="cbb">
            <div class="select-item" v-for="(item) in items" :key="item[Object.keys(item)[0]]" @click="isSelect">
                <i class="fas fa-check"></i>
                <div class="select-item-text">{{item[Object.keys(item)[2]]}}</div>
            </div>
        </div>
        <div class="select">
            <input class="cbbox-input" type="text" placeholder="Chọn/Nhập thông tin" v-model="selectedValue">
            <div class="cbbox-button" @click="activateCbb">
                <i class="fas fa-angle-down"></i>
            </div>
        </div>
    </div>
</template>
<script>

export default {

    name: 'TheCombobox',
    props: {
        label: String,
        type: String,
        items: [],
        itemName: String,
        itemId: String,
        valueInput: null,
    },
    data(){
        return {
            isActivate: false,
            selectedValue: null,
            idSelected: null,
        }
    },
    created(){       
        this.selectedValue = this.valueInput
    }, 
    methods: {
        activateCbb(){
            this.isActivate = !this.isActivate
        },
        isSelect(event){
            this.selectedValue = event.currentTarget.children[1].innerHTML
            this.isActivate = false
        }
    },
    watch:{
        selectedValue: function(value){
            this.$emit('setValue', this.selectedValue)
            var items = this.$refs.cbb.children
            Array.from(items).forEach(item => {
                if(value == item.children[1].innerHTML){
                    item.classList.add('selected-item')
                }
                else{
                    item.classList.remove('selected-item')
                }
            });
        }
    }
}
</script>
<style lang="">
    
</style>