<template>
     <div class="m-header">
        <div class="header-left">
            <div class="sidebar"></div>
            <div class="logo"></div>
        </div>
        <div class="header-right">

            <select class="m-combobox" style="padding-left: 24px; border: unset; font-weight: bold;">
                <option>Nhà hàng biển đông</option>
            </select>

            <div class="header-end">
                <div class="icon icon-notify"></div>
                <div class="header-right-avatar"></div>
                <div class="header-right-username">Nguyễn Thị Hằng</div>
                <div class="header-right-option"></div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name:"the-header",
}
</script>
<style scoped>
@import url(../../css/layout/header.css);
</style>