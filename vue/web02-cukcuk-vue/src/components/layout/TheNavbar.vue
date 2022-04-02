<template>
<div class ="m-navbar">
     <router-link to="/" class="m-menu-item m-menu-selected">
            <div class="m-menu-icon"><i class="fa-solid fa-chart-pie"></i></div>
            <div class="m-meni-text">Tổng quan</div>
        </router-link>
       <router-link to="/report" class="m-menu-item">
            <div class="m-menu-icon"><i class="fa-solid fa-chart-column"></i></div>
            <div class="m-meni-text">Báo cáo</div>
        </router-link>
        <router-link to ="/customer" class="m-menu-item">
            <div class="m-menu-icon"><i class="fa-solid fa-chart-pie"></i></div>
            <div class="m-meni-text">Mua hàng</div>
        </router-link>
         <router-link to ="/employee" class="m-menu-item">
            <div class="m-menu-icon"><i class="fa-solid fa-chart-pie"></i></div>
            <div class="m-meni-text">Danh mục nhân viên</div>
        </router-link>
         <router-link to ="/setting" class="m-menu-item">
            <div class="m-menu-icon"><i class="fa-solid fa-chart-pie"></i></div>
            <div class="m-meni-text">Thiết lập hệ thống</div>
        </router-link>
     <!--   <div class="m-menu-item">
            <div class="m-menu-icon"><i class="fa-solid fa-users"></i></div>
            <div class="m-meni-text">Cài đặt</div>
        </div>     -->
    </div>
</template>
<style scoped>
@import url(../../css/layout/navbar.css);
</style>

